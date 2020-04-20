import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/Menu/Menu';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
  construst
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={DISHES}/>
      </div>
    );
  }
}

export default App;
