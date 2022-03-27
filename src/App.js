import './App.css';

import './components/Component.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Explore from './pages/explore'
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import Profile from './pages/Profile'
import CryptoChicks from './pages/CryptoChicks';

function App() {
  return (
    <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/explore" component={Explore}/>
    <Route exact path="/rankings" component={Rankings}/>
    <Route exact path='/profile' component={Profile}/>
    <Route exact path='/rankings/Cryptochicks' component={CryptoChicks}/>
    </Router>

  );
}

export default App;
