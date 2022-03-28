import './App.css';

import './components/Component.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Explore from './pages/explore'
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import Profile from './pages/Profile'
import CryptoChicks from './pages/CryptoChicks';
import RewardsPage from './pages/RewardsPage';
import NewPages from './pages/NewPages';
import CrypRank from './pages/CrypRank';

function App() {
  return (
    <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/explore" component={Explore}/>
    <Route exact path="/rankings" component={Rankings}/>
    <Route exact path='/profile' component={Profile}/>
    <Route exact path='/rankings/Cryptochicks' component={CryptoChicks}/>
    <Route exact path='/rewards' component={RewardsPage}/>
    <Route exact path='/explore/activities' component={NewPages}/>
    <Route exact path='/rankings/Cryptochicks/Rank' component={CrypRank}/>
    </Router>

  );
}

export default App;
