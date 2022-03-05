
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../views/Home';
import Nav from './Nav'
import Contact from '../views/Contact';
import NotFound from '../views/NotFound';
function App() {
   return (
    <Router>
      <nav>
        <h1>Routing</h1>
        <Nav/>
      </nav>
      <Switch> 
        <Redirect from='/beta' to='/'/>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/contact' ><Contact/></Route>
        <Route path='/404.html'><NotFound/></Route>
        <Route>
          <Redirect to='/404.html'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
