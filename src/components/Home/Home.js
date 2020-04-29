import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Loading from '../Loading/Loading';
import {baseUrl} from '../../shared/baseUrl';

const RenderCard = ({item, isLoading, errorMessage}) => {
  if(isLoading){
    return(
      <Loading/>
    );
  }else if(errorMessage){
    return(
      <h4>{errorMessage}</h4>
    );
  }else{
    return(
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name}/>
        <CardBody>
          <CardTitle><h4>{item.name}</h4></CardTitle>
          {item.designation ? <CardSubtitle><h5>{item.designation}</h5></CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    )
  }
}

const Home = props => {
  return(
    <div className="container">
      <div className="row align-items-start">
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.dish} 
            isLoading={props.dishesLoading} 
            errorMessage={props.dishesErrMess}/>
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.promotion}
            isLoading={props.promosLoading} 
            errorMessage={props.promosErrMess}/>
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.leader}/>
        </div>
      </div>
    </div>
  )
}
export default Home;