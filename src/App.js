import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home.js';
import TestBS from './pages/TestBS.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
            {/* <TestBS/> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;