import React from 'react';
import styles from './IndexPage.css';

import MainLayout from '../components/MainLayout/MainLayout';

class IndexPage extends React.Component{
  render(){
    return (
      <div className={styles.normal}>
        <MainLayout location={ location } />
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
