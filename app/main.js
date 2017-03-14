import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink ,browserHistory,hashHistory  } from 'react-router';

import App from './component/app.js'
import Index from './component/routers/index/index.js'

var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

render((
  <Router history={history}>
    <Route path="/" component={App}>
    	<IndexRoute component={Index} />
    	
    </Route>
  </Router>
), document.getElementById('app'));