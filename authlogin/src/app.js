import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import MockBrowser from './mock-browser'
import AuthorizedRoute from './AuthorizedRoute'
import store from './store'

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import PrimaryLayout from './layouts/PrimaryLayout'

// ** See notes on this `<App>` component at the bottom of this file **
const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MockBrowser />
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/app" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

/*
I had to setup the `<App>` component to accomodate the Mock Browser. So that meant I had
to wrap the Mock Browser and the `<Switch>` in an div tag becuase `<BrowserRouter>`
will only accept one child. The below code is how I would set it up in a
non-codepen environment.

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UnauthorizedLayout} />
        <AuthorizedRoute path="/app" component={PrimaryLayout} />
        <Redirect to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>
)

Special thanks go out to Justin Dragos and Tyler Collier for helping me proof the
CSS-Tricks article.
*/

