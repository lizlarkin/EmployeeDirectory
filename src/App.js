import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import AllEmployees from './Pages/AllEmployees';
import Locations from './Pages/Locations';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/AllEmployees" component={AllEmployees} />
          <Route path="/Locations" component={Locations} />
        </Switch>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
