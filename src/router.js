import React from 'react';
import { Router, Route, Switch } from 'dva/router';

// import IndexPage from './routes/IndexPage.js';
import MainLayout from './components/MainLayout/MainLayout';

import Products from "./routes/Products.js";
import users from "./routes/users.js";
import Chart from "./routes/Chart.js";
import BigScreen from "./routes/BigScreen.js";
import Map from "./routes/Map.js";
import Home from "./routes/Home.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {/* <Switch> */}
      <Route path="/" component={MainLayout} >
        <Route path="home" component={Home} />
        <Route path="Products" component={Products} />
        <Route path="users" component={users} />
        <Route path="chart" component={Chart} />
        <Route path="map" component={Map} />
      </Route>
      {/* </Switch> */}
      <Route path="/bigScreen" component={BigScreen} />
    </Router>
  );
}

export default RouterConfig;
