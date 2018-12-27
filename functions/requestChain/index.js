/*----------------------------------------------------------------------------------
* about:Promise链生成
* date:2018-12-25
* ----------------------------------------------------------------------------------*/
var InterceptorManager = require('./InterceptorManager');

function fetch() {
  console.log("发送中");
  return Promise.reject({code: 200, msg: "成功"})
}

function Axios() {
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };

  this.request = function (config) {
    const chain = [fetch, undefined];
    let promise = Promise.resolve(config); // 形成参数链，拦截函数需要返回config
    // 压入任务
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    console.log("chain", chain);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  };
}

// request的包装
['post', 'delete', 'get', 'head', 'options'].forEach(method => {
  Axios.prototype[method] = function (url, config) {
    return this.request({
      method: method,
      url: url
    });
  };
});

const axios = new Axios();
// 拦截
axios.interceptors.request.use(
  function (config) {
    config.key = "1";
    console.log("请求前拦截，增加属性", config);
    return config;
  },
  // 发送失败第一时间
  function (error) {
    console.log("请求前失败", error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    console.log("请求后拦截", response);
    response.add = "拦截增加属性";
    return response;
  },
  // 接收失败第一时间
  function (error) {
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
    console.log("发送失败")
  });
