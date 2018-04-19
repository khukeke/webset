import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { AppContainer } from './'
import { createStore } from 'redux';
import IndexApp from './app/containers';
import rootReducer from './app/reducers'

import { BrowserRouter } from 'react-router-dom';

const initialState = {};
const store = createStore(rootReducer,initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <IndexApp />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
