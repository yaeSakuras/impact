import dva from 'dva';
import './App.less';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use(require());

// 3. Model
require('./models').default.forEach(key => app.model(key.default));

// 4. Router
app.router(require('./App').default);

// 5. Start

app.start('#root');