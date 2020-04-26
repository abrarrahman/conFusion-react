import React, {Component} from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Menu from '../Menu/Menu';
import DishDetail from '../DishDetail/DishDetail';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Main extends Component {
  render(){
    const HomePage = () => <Home 
      dish={this.props.dishes.filter(dish=>dish.featured)[0]}
      promotion={this.props.promotions.filter(promo=>promo.featured)[0]}
      leader={this.props.leaders.filter(leader=>leader.featured)[0]}
    />

    const DishWithId = ({match}) => {
      return(
        <DishDetail 
          dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId))[0]} 
          comments={this.props.comments.filter(comment=>comment.dishId===parseInt(match.params.dishId))}
        />
      )
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

export default withRouter(connect(mapStateToProps)(Main));