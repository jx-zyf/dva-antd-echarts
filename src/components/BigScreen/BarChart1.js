import React from 'react';
import styles from './BarChart1.css';
import ECharts from 'echarts-for-react';

function BarChart1({data}) {
  var option = {
    title: {
      text: data.titleText||'',
      textStyle: {
        color: '#fff'
      },
    },
    textStyle: {
      color: '#fff'
    },
    grid: {
        left: '13%'
    },
    legend: {
        padding: 0
    },
    xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
    },
    yAxis: {
        type: 'category',
        axisTick: {show: false},
        axisLine: {show: false},
        inverse: true,
        data: data.yAxisData
    },
    series: [
        {
            type: 'bar',
            data: data.seriesData,
            barWidth: '10%',
            z: 10,
            itemStyle: {
              normal: {
                color: 'red'
              }
            },
            label: {
              normal: {
                  show: true,
                  formatter: "{c}%",
                  textStyle: {
                      color: '#fff'
                  },
                  position: ['120%','200%']
              },
              emphasis: {
                  show: true
              }
            }
          },
          {
            name: 'full',
            type: 'bar',
            barGap: '-100%',
            barWidth: '10%',
            itemStyle: {
              normal: {
                color: 'gray'
              }
            },
            data: [100,100,100,100,100]
          }
    ]
  }
  return (
    <div className={styles.normal}>
      <ECharts option={option} className={styles.bar_chart} />
    </div>
  );
}

export default BarChart1;
