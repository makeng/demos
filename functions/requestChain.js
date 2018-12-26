/*----------------------------------------------------------------------------------
* about:Promise链生成
* date:2018-12-25
* ----------------------------------------------------------------------------------*/

// 拦截器的存储
function InterceptorManager() {
  this.promiseArr = [];
  this.config = {};
  this.fulfilled = undefined;
  this.rejected = undefined;
  this.use = function ( success, fail ) {
    this.fulfilled = () => {
      if ( success ) {
        return Promise.resolve(success(this.config));
      } else {
        return fail();
      }
    }
    this.rejected = () => {
      return fail();
    }
    this.promiseArr.push(this.fulfilled); // 支持多个任务
    this.promiseArr.push(this.rejected); // 支持多个任务
  }
}

function fetch( config ) {
  return Promise.resolve(`发送数据${JSON.stringify(config)}`)
}

function Axios() {
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };

  this.request = function ( config ) {
    const chain = [ fetch, undefined ];
    let promise = Promise.resolve(config);
    // 压入任务
    this.interceptors.request.config = config;
    this.interceptors.response.config = config;
    console.log(chain);
    /*    while ( chain.length ) {
          promise = promise.then(chain.shift(), chain.shift());
        }*/
    return promise
      .then(this.interceptors.request.fulfilled, this.interceptors.request.rejected)
      .then(fetch, undefined)
      .then(this.interceptors.response.fulfilled, this.interceptors.response.rejected)
  };
}

// request的包装
[ 'post', 'delete', 'get', 'head', 'options' ].forEach(method => {
  Axios.prototype[ method ] = function ( url, config ) {
    return this.request({
      method: method,
      url: url
    });
  };
});

const axios = new Axios();
// 拦截
axios.interceptors.request.use(
  function ( config ) {
    console.log("请求前拦截", config);
    return config;
  },
  function ( error ) {
    console.log("请求前失败", error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function ( config ) {
    console.log("请求后拦截", config);
    return config;
  },
  function ( error ) {
    console.log("请求后失败", error);
    return Promise.reject(error);
  }
);
// 调用
axios.post("test")
  .then(res => {
    console.log("发送成功", res);
  })
  .catch(err => {
    console.log("🙅")
  });
