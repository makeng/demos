/*----------------------------------------------------------------------------------
* about:Promise链生成
* date:2018-12-25
* ----------------------------------------------------------------------------------*/

function InterceptorManager() {

}

function Axios( instanceConfig ) {
  this.request = function ( config ) {
    // 返回
    const chain = [];
    let promise = undefined;
    /*    while ( chain.length ) {
          promise = new Promise().then(chain.shift(), chain.shift());
        }*/
    promise = new Promise(resolve => {
      resolve(`发送内容${JSON.stringify(config)}`);
    });
    return promise;
  };

  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

[ 'post', 'delete', 'get', 'head', 'options' ].forEach(method => {
  Axios.prototype[ method ] = function ( url, config ) {
    return this.request({
      method: method,
      url: url
    });
  };
});

const axios = new Axios();

axios.post("test").then(res => {
  console.log(res);
});