/*----------------------------------------------------------------------------------
* about:页面
* author:马兆铿
* date:2019-5-8
* ----------------------------------------------------------------------------------*/

/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, { PureComponent, PropTypes } from "react";
import "../../../style/pages/ChartHandle.less";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";

const createRandomArr = function(length) {
  return Array.from({length}).map(() => parseInt(Math.random() * 100));
};
const TOTAL_LENGTH = 2000;
const CHANGE_LENGTH = 100;

//
class ChartTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chartTimer = 0;
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    this.renderChartTime(echarts);
  }

  componentWillUnmount() {
    clearInterval(this.chartTimer);
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */
  renderChartTime(ec) {
    // 基于准备好的dom，初始化echarts图表
    const myChart = ec.init(document.getElementById("chart-time"), "blue");
    let dataArr = createRandomArr(TOTAL_LENGTH);
    let orderArr = Array.from({length: TOTAL_LENGTH}).map((item, index) => index);
    // 为echarts对象加载数据
    const option = {
      title: {
        text: "某楼盘销售情况",
        subtext: "纯属虚构"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["意向", "预购", "成交"]
      },
      toolbox: {
        show: true,
        feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ["line", "bar", "stack", "tiled"]},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: orderArr
        }
      ],
      yAxis: [
        {
          boundaryGap: [0, "50%"],
          type: "value"
        }
      ],
      series: [
        {
          name: "成交",
          type: "line",
          smooth: true,
          stack: "a",
          areaStyle: {
            normal: {}
          },
          itemStyle: {normal: {areaStyle: {type: "blue"}}},
          data: dataArr
        }
      ]
    };
    // 操作的数组

    myChart.setOption(option);
    this.chartTimer = setInterval(() => {
      // x轴
      orderArr.splice(0, CHANGE_LENGTH);
      const addOrderArr = Array
        .from({length: CHANGE_LENGTH})
        .map((item, index) => index + orderArr[orderArr.length - 1] + 1);
      orderArr = orderArr.concat(addOrderArr);
      // y轴
      const addDataArr = createRandomArr(CHANGE_LENGTH);
      dataArr.splice(0, CHANGE_LENGTH);
      dataArr = dataArr.concat(addDataArr);
      myChart.setOption({
        xAxis: {
          data: orderArr
        },
        series: [{
          name: "成交",
          data: dataArr
        }]
      });
    }, 1000);
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <div id="chart-time"></div>
    );
  }
}

export default ChartTime;
