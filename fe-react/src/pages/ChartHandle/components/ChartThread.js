import React, { PureComponent, PropTypes } from "react";
import "../../../style/pages/ChartHandle.less";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";

const createRandomArr = function(length) {
  return Array.from({length}).map(() => parseInt(Math.random() * 100));
};
const TOTAL_LENGTH = 10000;

//
class ChartThread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    this.renderChartThread(echarts);
  }

  componentWillUnmount() {
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */
  renderChartThread(ec) {
    // 基于准备好的dom，初始化echarts图表
    const myChart = ec.init(document.getElementById("chart-thread"), "blue");
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
          data: []
        }
      ]
    };
    myChart.setOption(option);

    /**
     * 线程构造
     */
    const Thread = function(timeGap) {
      this.list = [];
      this.timer = undefined;
      /**
       * 开始执行
       */
      this.start = function() {
        const _this = this;
        this.timer = setInterval(function() {
          if (_this.list.length) {
            var fn = _this.list.shift();
            setTimeout(fn, 0);
          }
        }, timeGap || 1);
      };
      /**
       * 停止执行
       */
      this.stop = function() {
        clearInterval(this.timer);
      };
      /**
       * 添加任务
       * @param fn
       */
      this.addThread = function(fn) {
        this.list.push(fn);
      };
    };
    // 执行
    var thread = new Thread(100);
    thread.start();

    // 事件队列生成
    const RENDER_TIMES = 10;
    for (let i = 0; i < RENDER_TIMES; i++) {
      thread.addThread(function() {
        myChart.setOption({
          series: [{
            name: "成交",
            data: dataArr.slice(0, dataArr.length / RENDER_TIMES * (i + 1))
          }]
        });
      });
    }
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <div id="chart-thread"></div>
    );
  }
}

export default ChartThread;
