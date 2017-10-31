import React from 'react';
import styles from './LineChart.css';
import ECharts from 'echarts-for-react';

function LineChart() {
  var option = {
    title: {
        text: '▎实时流入流出人数',
        subText: '纯属虚构',
        textStyle: {
            color: '#fff',
        }
    },
    textStyle: {
        color: '#fff'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['流入人数', '流出人数'],
        textStyle: {
            color: '#fff',
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        name: '时间',
        // boundaryGap: false,
        data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '人数',
        min: 0,
        max: 1000,
        splitLine: {  // 去掉网格线
            show: false
        }
    },
    series: [
        {
            name: '流入人数',
            type: 'line',
            data: [110, 866, 502, 320, 540, 300, 95],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' }
                ]
            }
        },
        {
            name: '流出人数',
            type: 'line',
            data: [55, 78, 250, 300, 240, 198, 80],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' }
                ]
            },
        }
    ]
  };
  return (
    <div className={styles.normal}>
      <ECharts option={ option } className={styles.line_chart} />
    </div>
  );
}

export default LineChart;
