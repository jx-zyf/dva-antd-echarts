import React from 'react';
import styles from './BarChart.css';
import ECharts from 'echarts-for-react';

function BarChart({data}) {
  var option = {
    title: {
        text: data.titleText,
        subText: '纯属虚构',
        textStyle: {
            color: '#fff',
        }
    },
    textStyle: {
        color: '#fff',
    },
    color: data.color,
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        name: data.xAxisName||'',
        data: data.xAxisData,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            interval: 0,  //横轴信息全部显示  
            rotate: 60,   //60度角倾斜显示  
        },
        splitLine: {  // 去掉网格线
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: data.yAxisName||'',
        splitLine: {  // 去掉网格线
            show: false
        }
    },
    series: [
        {
            name: data.seriesName,
            type: 'bar',
            barWidth: '40%',
            data: data.seriesData
        }
    ]
  };

  return (
    <div className={styles.normal}>
      <ECharts option={option} className={styles.bar_chart} />
    </div>
  );
}

export default BarChart;
