import React from 'react';
import ReactDOM from 'react-dom';
//import Homepage from "./pages/HomePage";

const title = '成功运行';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();