import React from 'react';
import { connect } from 'dva';
import styles from './Map.css';

import MapComponent from '../components/Map/Map'

function Map() {
  return (
    <div className={styles.normal}>
      <MapComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Map);
