import React from 'react';
import './App.css';
import Layout from './component/layout/Layout';
import {Route,Switch} from 'react-router-dom'
import Preview from './component/preview/Preview';
function App() {
  return (
    <div className="App">
      <Switch>

<Route exact path='/' component={Layout}/>
<Route exact path='/preview' component={Preview}/>
</Switch>
    </div>
  );
}

export default App;
