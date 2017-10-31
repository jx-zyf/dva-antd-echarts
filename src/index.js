import dva from 'dva';
import './index.css';

import createLoading from 'dva-loading';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading({effects:true}));

// 3. Model
// app.model(require('./models/example'));
app.model(require("./models/product"));
app.model(require("./models/breadcrumb"));
app.model(require("./models/users"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
