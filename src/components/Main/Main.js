import React, {Component} from 'react';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { DISHES } from '../../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDishId: null,
    }
  }
  onDishSelect=dishId=>{
    this.setState({selectedDishId: dishId});
  }
  render(){
    const HomePage = () => <Home/>
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu dishes={DISHES}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;