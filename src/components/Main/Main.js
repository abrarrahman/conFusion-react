import React, {Component} from 'react';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { DISHES } from '../../shared/dishes';
import { COMMENTS } from '../../shared/comments';
import { LEADERS } from '../../shared/leaders';
import { PROMOTIONS } from '../../shared/promotions';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes: {DISHES},
      promotions: {PROMOTIONS},
      comments: {COMMENTS},
      leaders: {LEADERS}
    }
  }
  render(){
    const HomePage = () => <Home 
      dish={DISHES.filter(dish=>dish.featured)[0]}
      promotion={PROMOTIONS.filter(promo=>promo.featured)[0]}
      leader={LEADERS.filter(leader=>leader.featured)[0]}
    />
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu dishes={DISHES}/>}/>
          <Route path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;