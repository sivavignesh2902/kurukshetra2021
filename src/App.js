import './App.css';
import { Navbar,Nav } from 'react-bootstrap'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import History from './history';
import green from './green';
import About from './about';
import Views from './view';
import Things from './things';
import farmers from './farmers';
import logos from './images/logo.jfif'
import Advancement from './advancement';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
    <Navbar.Brand><img width="80px" src={logos} alt="agroilogo" /></Navbar.Brand>
          <Navbar.Brand>Agriculture</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" sticky="top">
              <Nav.Link  href="/">About</Nav.Link>
              <Nav.Link  href="/history">History</Nav.Link>
              <Nav.Link  href="/farmers">Farmers</Nav.Link>
              <Nav.Link  href="/greenrevolution">Green Revolution</Nav.Link>
              <Nav.Link  href="/equipments">Equipments</Nav.Link>
              <Nav.Link  href="/advancement">Advancement</Nav.Link>
              <Nav.Link  href="/Views">Give your view</Nav.Link>




            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/history" component={History} />
      <Route path="/advancement" component={Advancement} />
      <Route path="/greenrevolution" component={green} />
      <Route path="/views" component={Views} />
      <Route path="/equipments" component={Things} />
      <Route path="/farmers" component={farmers} />
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
