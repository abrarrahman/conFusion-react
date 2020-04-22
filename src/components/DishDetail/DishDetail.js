import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

const RenderDish = ({dish}) => dish?
  <Card>
    <CardImg width="100%" src={dish.image} alt={dish.name}/>
    <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
    </CardBody>
  </Card> : null

const renderComments = comments => {
    const commentDetails = comments.map(comment=><li key={comment.id}>
      <p>{comment.comment}</p>
      <p>{'--'+comment.author+', '+
        new Intl.DateTimeFormat(
          'en-US', 
          {year: 'numeric', month: 'short', day:'2-digit'}
        ).format(new Date(Date.parse(comment.date)))}</p>
    </li>);
    return comments? <div>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
        {commentDetails}
        </ul>
    </div> : <div></div>;
}

const DishDetail = ({dish}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          {dish && renderComments(dish.comments)}
        </div>
      </div>
    </div>
  );
}

export default DishDetail;



