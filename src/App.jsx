import './App.css';
import Home from './component/home';
import About from './component/about';
import Service from './component/service';
import Navbar from './component/navbar';
import Footer from './component/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  return (
    
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  )
}

export default App
