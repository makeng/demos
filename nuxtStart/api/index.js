/* ---------------------------------------------------------------------------------------
* about:axios的配置文件
* author:马兆铿
* date:2018-9-4
* ---------------------------------------------------------------------------------------- */

import axios from "axios";

console.log("环境变量", process.env.DATA_ENV);

export const getWeather = () =>
  axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=${encodeURI("深圳")}`).then(res => res.data);