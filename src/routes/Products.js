import React from 'react';
import { connect } from 'dva';
import styles from './Products.css';

import ProductList from '../components/Product/ProductList';
import MainLayout from '../components/MainLayout/MainLayout';

const Products = ({ dispatch, products, location }) => {

  function delHandle(id) {
    dispatch({
      type: 'product/delete',
      payload: id
    })
  }

  return (
    // <MainLayout location={location}>
      <div className={styles.normal}>
        <h2>List of Products</h2>
        <ProductList products={products} onDelete={delHandle} />
      </div>
    // </MainLayout>
  );
}

function mapStateToProps(state) {
  const { products } = state.product;
  return { products };
}

export default connect(mapStateToProps)(Products);
