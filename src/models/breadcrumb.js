
export default {
  namespace: 'breadcrumb',
  state: {
    breadcrumb:[
      {
        name:'Home',
        path:'/'
      }
    ]
  },
  reducers: {
    changeBreadcrumb(state,{ payload: breadcrumb }) {
      return {...state, ...breadcrumb}
    }
  },
  effects: {},
  subscriptions: {},
};
