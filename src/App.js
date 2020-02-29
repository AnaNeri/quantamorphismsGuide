import React from 'react';
import MyNav from './components/Nav';
import CaseStudy from './containers/CaseStudy';
import ReplicationPackage from './containers/ReplicationPackage';
import DetailedPerformance from './containers/DetailedPerformance';
import HomePage from './containers/HomePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // must import this AND npm install
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
        <MyNav />
        <Router>
            <Switch>
              <Route path="/caseStudy">
                <CaseStudy />
              </Route>
              <Route path="/replicationPackage">
                <ReplicationPackage />
              </Route>
             <Route path="/detailedPerformance">
                <DetailedPerformance />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;