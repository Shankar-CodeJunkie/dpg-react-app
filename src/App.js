import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import logo from './logo.svg';
import './app.scss';
import LoginContainer from './components/LoginContainer';
import { Loading } from 'carbon-components';
import S2IContainer from './components/S2IContainer';
import PushImageContainer from './components/PushImageContainer';
// import history from "./history";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Suspense fallback={<Loading />}>
          {/* <LoginContainer /> */}
          {/* <S2IContainer /> */}
          {/* <PushImageContainer /> */}
          <Switch>
            <Route exact path="/">
              <LoginContainer />
            </Route>
            <Route path="/buildimage">
              <S2IContainer />
            </Route>
            <Route path="/pushimage">
              <PushImageContainer />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
