import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';

function Home() {
  return (
    <div className={styles.normal}>
      <h1>Welcome</h1>
      <h2 style={{color: '#000'}}>dva+antd+echarts</h2>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
