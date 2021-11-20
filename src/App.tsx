import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import Foo from './components/Foo';
import Bar from './components/Bar';
import Loadable from 'react-loadable';

const Loading = () => <div>...loading</div>;


const AsyncHome = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

const AsyncFoo = Loadable({
  loader: () => import('./components/Foo'),
  loading: Loading,
});

const AsyncBar = Loadable({
  loader: () => import('./components/Bar'),
  loading: Loading,
});

function App() {
  return (
    <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route exact path="/foo" component={AsyncFoo} />
            <Route exact path="/bar" component={AsyncBar} />
          </Switch>
        </div>
      </Router>
  );
}

/*
function App() {
  return (
    <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
          </Switch>
        </div>
      </Router>
  );
}
*/
export default App;
