
export default {
  namespace: 'product',
  state: {
    products: [
      { name: 'dva', id: 1, key: 1 },
      { name: 'antd', id: 2, key: 2 },
      { name: 'dva1', id: 3, key: 3 },
      { name: 'antd1', id: 4, key: 4 },
      { name: 'dva2', id: 5, key: 5 },
      { name: 'antd2', id: 6, key: 6 },
    ],
  },
  reducers: {
    delete(state, { payload: id }) {
      state.products=state.products.filter(item => item.id !== id)
      // console.log(state);
      return {...state};
    }
  },
  effects: {},
  subscriptions: {},
};
