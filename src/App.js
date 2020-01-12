import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import ProductDescription from './ProductDescription'
import history from "./history";
import './sass/app.scss'


class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/produto/:id' component={ProductDescription} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

