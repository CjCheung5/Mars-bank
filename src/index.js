import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateAccount from './Createaccount';
import Login from './Login';
import Balance from './Balance';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './alldata';
import reportWebVitals from './reportWebVitals';
import { Route, Link, HashRouter} from 'react-router-dom';
import Usercontext from './Context';

const routs = (
  <HashRouter>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={App} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>     
    </HashRouter>

);

ReactDOM.render(routs,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
