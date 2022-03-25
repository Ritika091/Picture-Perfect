import './App.css';

import './components/Component.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Explore from './pages/explore'
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/explore" component={Explore}/>
    </Router>

  );
}

export default App;
