import React from 'react';
import styles from './PictorialBar.css';
import ECharts from 'echarts-for-react';

function PictorialBar({data}) {
  var xAxis = {
      data: ['a'],
      axisTick: {show: false},
      axisLine: {show: false},
      axisLabel: {show: false}
  },
  yAxis = {
      min: 0,
      max: 150,
      axisTick: {show: false},
      axisLine: {show: false},
      axisLabel: {show: false},
      splitLine: {show: false}
  },
  legend = {
      width: '100%',
      height: '100%'
  }

  var option = {
    title: data.title||null,
    xAxis: xAxis,
    yAxis: yAxis,
    color: data.color,
    legend: legend,
    grid: data.grid,
    tooltip: {
        trigger: 'item',
        formatter: `${data.seriesName}：${data.formatter}`,
        position: ['65%', '30%']
    },
    series: [
        {
            name: data.seriesName,
            type: 'pictorialBar',
            symbolClip: true,
            symbolBoundingData: 150,
            barWidth: data.seriesBarWidth,
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    formatter: data.formatter,
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            data: [
                {
                    value: 150,
                    symbol: data.seriesDataSymbol
                }
            ]
        }
    ]
  }
  return (
    <div className={styles.normal}>
      <ECharts option={ option } className={styles.pictorialBar} />
    </div>
  );
}

export default PictorialBar;
