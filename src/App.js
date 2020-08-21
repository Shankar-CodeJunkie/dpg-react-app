import React, { Suspense } from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
// import logo from './logo.svg';
import './app.scss';
import LoginContainer from './components/LoginContainer';
import { Loading } from 'carbon-components';
import S2IContainer from './components/S2IContainer';
import PushImageContainer from './components/PushImageContainer';
import history from "./history";
import DeployContainer from './components/DeployContainer';
function App() {
  return (
    <Router history={history}>
      <div className="app-container">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <LoginContainer />
            </Route>
            <Route exact path="/buildimage">
              <S2IContainer />
            </Route>
            <Route exact path="/pushimage">
              <PushImageContainer />
            </Route>
            <Route exact path="/deploy">
              <DeployContainer />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
