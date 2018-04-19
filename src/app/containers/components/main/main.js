
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Home from './home';
// import Schedule from './schedule';
import Roster from './roster';
import Home from './home';
import Head from '../head';
import AuthExample from './authEx';
// import 'antd/dist/antd.css';
// const Home = () => (
//   <div>
//     <h1>Welcome to the Tornadoes Website!</h1>
//   </div>
// )

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const Main = () => (
  <main>
    {/* <Head /> */}
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/roster" component = {Roster} />
      <Route path="/schedule" component = {Schedule} />
      <Route path="/authExample" component = {AuthExample} />
      <Redirect to="/" />
    </Switch>

  </main>
)

export default Main;