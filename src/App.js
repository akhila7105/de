import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  // Routes should be wrapped with Switch component from react-router-dom
  // "exact" keyword should be added
  // The Route component should be given the prop "component"
  //   When mentioning path parameters for a route we need to use ":" before the variable
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
