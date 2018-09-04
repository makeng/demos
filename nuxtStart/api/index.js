/* ---------------------------------------------------------------------------------------
* about:axios的配置文件
* author:马兆铿
* date:2018-9-4
* ---------------------------------------------------------------------------------------- */

import axios from "axios";

export const getWeather = () =>
  axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=${encodeURI("深圳")}`).then(res => res.data);