import React from 'react';
import { connect } from 'dva';
import styles from './BigScreen.css';

import BigScreenComponent from '../components/BigScreen/BigScreen';

function BigScreen() {
  return (
    <div className={styles.normal}>
      <BigScreenComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(BigScreen);
