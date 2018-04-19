import { Switch, Route, Link } from 'react-router-dom';
import PlayerAPI from './playerAPI';
import Player from './player';
import React, { Component } from 'react';

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Roster = () => (
  <Switch>
    <Route exact path="/roster" component={FullRoster} />
    <Route  path="/roster/:number" component={Player} />
  </Switch>
)

export default Roster;