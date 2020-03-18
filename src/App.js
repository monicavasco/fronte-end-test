import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Page1 from './contents/Page1';
import Page2 from './contents/Page2';

function App() {
  return (
    <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
