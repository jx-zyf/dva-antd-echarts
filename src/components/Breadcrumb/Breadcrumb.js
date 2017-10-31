import React from 'react';
import { connect } from 'dva';
import styles from './Breadcrumb.css';
import { Breadcrumb } from 'antd';
import { Link } from 'dva/router';

function CustomBreadcumb(props) {
  return (
    <Breadcrumb className={styles.normal} routes={props.routes}>
      {
        props.breadcrumb.map((v,i)=>(
          <Breadcrumb.Item key={i}>
            {v.path?(<Link to={v.path}>{v.name}</Link>):v.name}
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  );
}

function mapStateToProps({breadcrumb}) {
  return {...breadcrumb};
}

export default connect(mapStateToProps)(CustomBreadcumb);
