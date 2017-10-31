import React from 'react';
import styles from './PieChart.css';
import ECharts from 'echarts-for-react';

function PieChart({data}) {
  var option = {
    title: {
        text: data.titleText||'',
        textStyle: {
            color: '#fff'
        }
    },
    color: data.color,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: data.seriesName,
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    formatter: "{b}\n({d}%)",
                    textStyle: {
                        color: '#0f8891'
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#0f8891',
                        width: 1,
                        type: 'solid'
                    },
                    length: 25,
                    show: true
                }
            },
            data: data.seriesData
        }
    ]
  };

  return (
    <div className={styles.normal}>
      <ECharts option={option} className={styles.pie_chart}/>
    </div>
  );
}

export default PieChart;
