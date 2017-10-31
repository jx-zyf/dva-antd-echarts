import React from 'react';
import { connect } from 'dva';
import styles from './users.css';
import UserComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';

function Users({ location }) {
  return (
    // <MainLayout location={ location }>
      <div className={styles.normal}>
        <UserComponent />
      </div>
    // </MainLayout>
  );
}

// function mapStateToProps() {
//   return {};
// }

// export default connect(mapStateToProps)(Users);

export default connect()(Users);
