import React from 'react';
import styles from './BigScreen.css';
import { Row, Col } from 'antd';

import LineChart from './LineChart';
import BarChart from './BarChart';
import PictorialBar from './PictorialBar';
import PieChart from './PieChart';
import TotalNum from './TotalNum';
import BarChart1 from './BarChart1';
import Map from './Map';

function BigScreen() {
  // 当月客流分析 柱状图
  var barData1={
    titleText: '▎当月客流分析',
    color: ['#3398DB'],
    xAxisName: '时间',
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yAxisName: '人数',
    seriesName: '客流人数',
    seriesData: [1000, 5200, 2000, 3340, 3900, 3300, 2020]
  }
  // 本年客流分析 柱状图
  var barData2={
    titleText: '▎本年客流分析',
    color: ['rgb(198, 219, 11)'],
    xAxisName: '时间',
    xAxisData: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    yAxisName: '人数',
    seriesName: '客流人数',
    seriesData: [10200, 52200, 20200, 33240, 39200, 33020, 20220, 12312, 34521, 12000, 37060, 56002]
  }
  // 职业分布 柱状图
  var barData3={
    titleText: '▎职业分布',
    color: ['#3398DB'],
    xAxisData: ['程序猿', '程序媛', '销售', '财务', '人事', '外贸', '线上', '制衣','其他'],
    seriesName: '职业分布',
    yAxisName: '比例',
    seriesData: [15, 6, 5, 8, 2, 9, 11, 8, 20]
  }

  // 实时游客画像 柱状图
  var pictorialBarData1={
    title: {
      text: '▎实时游客画像',
      subText: '纯属虚构',
      textStyle: {
          color: '#fff'
      }
    },
    color: ['#f7d44a'],
    grid: {
      left: 0,
      right: 0,
      top: '30%',
      bottom: '20%'
    },
    formatter: "55%",
    seriesName: '男',
    seriesBarWidth: '25%',
    seriesDataSymbol: 'path://M804.571 402.286v237.714q0 22.857-16 38.857t-38.857 16-38.857-16-16-38.857v-201.143h-36.571v521.143q0 26.286-18.857 45.143t-45.143 18.857-45.143-18.857-18.857-45.143v-265.143h-36.571v265.143q0 26.286-18.857 45.143t-45.143 18.857-45.143-18.857-18.857-45.143v-521.143h-36.571v201.143q0 22.857-16 38.857t-38.857 16-38.857-16-16-38.857v-237.714q0-45.714 32-77.714t77.714-32h365.714q45.714 0 77.714 32t32 77.714zM640 146.286q0 53.143-37.429 90.571t-90.571 37.429-90.571-37.429-37.429-90.571 37.429-90.571 90.571-37.429 90.571 37.429 37.429 90.571z'
  }
  var pictorialBarData2={
    color: ['#f92366'],
    grid: {
      left: 0,
      right: 0,
      top: '10%',
      bottom: '35%'
    },
    formatter: "45%",
    seriesName: '女',
    seriesBarWidth: '30%',
    seriesDataSymbol: 'path://M757.479452 265.145863c35.433205 0 65.613151-12.470356 90.574904-37.425096 24.961753-24.95474 37.425096-55.148712 37.425096-90.574904 0-35.433205-12.463342-65.613151-37.425096-90.574904-24.961753-24.947726-55.148712-37.425096-90.574904-37.425096-35.433205 0-65.627178 12.470356-90.574904 37.425096s-37.425096 55.141699-37.425096 90.574904c0 35.433205 12.470356 65.627178 37.425096 90.574904C691.859288 252.668493 722.046247 265.145863 757.479452 265.145863z" p-id="2930"></path><path d="M1114.048877 563.999562l-146.277699-219.430575c-27.809315-40.763616-61.327781-61.145425-100.576438-61.145425L647.764164 283.423562c-39.23463 0-72.76011 20.381808-100.569425 61.145425L400.910027 563.999562c-6.094904 9.138849-9.145863 19.238575-9.145863 30.285151 0 15.233753 5.330411 28.195068 15.998247 38.848877 10.667836 10.667836 23.622137 15.998247 38.85589 15.998247 19.427945 0 34.668712-8.192 45.715288-24.568986L622.044932 429.708274l25.719233 0 0 75.425315-141.143671 234.853699c-3.429699 5.709151-5.141041 11.993425-5.141041 18.852822 0 9.910356 3.619068 18.474082 10.857205 25.719233 7.238137 7.231123 15.808877 10.850192 25.712219 10.850192l109.708274 0 0 155.430575c0 17.527233 6.27726 32.57863 18.852822 45.147178s27.619945 18.852822 45.147178 18.852822l91.423562 0c17.534247 0 32.585644-6.284274 45.154192-18.852822 12.568548-12.575562 18.852822-27.619945 18.852822-45.147178l0-155.430575 109.722301 0c9.903342 0 18.474082-3.619068 25.712219-10.850192 7.238137-7.245151 10.857205-15.808877 10.857205-25.719233 0-6.859397-1.711342-13.143671-5.134027-18.852822l-141.150685-234.853699L867.19474 429.708274l25.726247 0 129.711342 194.861589c11.046575 16.376986 26.280329 24.568986 45.722301 24.568986 15.233753 0 28.181041-5.330411 38.841863-15.998247 10.667836-10.660822 15.998247-23.615123 15.998247-38.848877C1123.19474 583.238137 1120.150795 573.145425 1114.048877 563.999562z'
  }

  // 实时游客画像 饼图
  var pieData1={
    color: ['#0fdbe0', '#15abbe', '#0f8891', '#145866', '#093138'],
    seriesName: '年龄',
    seriesData: [
      { value: 240, name: '18岁以下' },
      { value: 1548, name: '18-24岁' },
      { value: 460, name: '24-30岁' },
      { value: 310, name: '30-50岁' },
      { value: 135, name: '50岁以上' }
    ]
  }
  // 学历分布 饼图
  var pieData2={
    titleText: '▎学历分布',
    color: ['#fad442','#b19939','#5d542b'],
    seriesName: '年龄',
    seriesData: [
      { value: 240, name: '18岁以下' },
      { value: 1548, name: '18-30岁' },
      { value: 460, name: '30岁以上' },
    ]
  }

  // 累计游客总数
  var todayTotalNum={
    title: '今日累计接待游客',
    color: '#1db1ba',
    num: 3456
  }
  var thisYearTotalNum={
    title: '全年累计接待游客',
    color: '#f7d649',
    num: 12345678
  }

  // 客流地分析 柱状图
  var areaData1={
    titleText: '▎客源地分析',
    yAxisData: ['01 江西','02 广东','03 江苏','04 北京','05 浙江'],
    seriesData: [20,18,14,12,11]
  }
  var areaData2={
    yAxisData: ['06 湖南','07 陕西','08 湖北','09 天津','10 上海'],
    seriesData: [10,6,6,5,3]
  }


  return (
    <div className={styles.normal}>
      <Row>
        <Col span="6">
          <div className={styles.left}>
            <div className={styles.line_chart}>
              <LineChart />
            </div>
            <div className={styles.bar_chart1}>
              <BarChart data={ barData1 } />
            </div>
            <div className={styles.bar_chart2}>
              <BarChart data={ barData2 }/>
            </div>
            <div>
                <div className={styles.ratio}>
                    <div className={styles.male}>
                      <PictorialBar data={pictorialBarData1} />
                    </div>
                    <div className={styles.female}>
                      <PictorialBar data={pictorialBarData2} />
                    </div>
                </div>
                <div className={styles.pie_chart1}>
                  <PieChart data={pieData1} />
                </div>
            </div>
          </div>
        </Col>
        <Col span="12">
          <div className={styles.center}>
            <div className={styles.center_head}>
              <Col span='12' className={styles.header}>
                <TotalNum data={todayTotalNum} />
              </Col>
              <Col span='12' className={styles.header}>
                <TotalNum data={thisYearTotalNum} />
              </Col>
            </div>
            <div className={styles.map}>
              <Map />
            </div>
            <div className={styles.bar_chart3}>
              <BarChart1 data={areaData1} />
              <BarChart1 data={areaData2} />
            </div>
            <div className={styles.distribution}>
              <div className={styles.education}>
                <PieChart data={pieData2} />
              </div>
              <div className={styles.job}>
                <BarChart data={ barData3 }/>
              </div>
            </div>
          </div>
        </Col>
        <Col span="6">
          <div className={styles.right}></div>
        </Col>
      </Row>
    </div>
  );
}

export default BigScreen;
