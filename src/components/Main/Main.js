import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import DishDetail from '../DishDetail/DishDetail';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { DISHES } from '../../shared/dishes';

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
    return (
      <div>
        <Header/>
        <Menu dishes={DISHES} onClick={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.selectedDishId!=null? DISHES[this.state.selectedDishId] : null}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;