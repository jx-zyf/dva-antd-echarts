import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';

import { Breadcrumb } from 'antd';
import { Link } from 'dva/router';

// import CurstomBreadcrumb from '../Breadcrumb/Breadcrumb'

function MainLayout({ children, location, routes }) {
  // console.log(children)
  // console.log(routes)
  return (
    <div className={styles.normal}>
      <Header location={location} />
      {/* <CurstomBreadcrumb className={styles.breadcrumb} routes={routes} /> */}
      <Breadcrumb className={styles.breadcrumb} routes={routes} separator=">">
        {
          routes.map((v,i)=>(
            <Breadcrumb.Item key={i}>
              {v.path}
            </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
