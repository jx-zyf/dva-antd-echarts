import React from 'react';
import { connect } from 'dva';
import styles from './Chart.css';
import ChartComponent from '../components/Chart/Chart';

function Chart() {
  return (
    <div className={styles.normal}>
      <ChartComponent></ChartComponent>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Chart);
