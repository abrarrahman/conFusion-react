import React, {Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,
  Breadcrumb,BreadcrumbItem,
  Button, Modal, ModalBody, ModalHeader, Row, Label, Col} from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

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
        <CommentForm/>
    </div> : <div></div>;
}

const maxLength = len => val => !(val) || (val.length <= len);
const minLength = len => val => !(val) || (val.length >= len);

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal(){
    this.setState({isModalOpen: !this.state.isModalOpen})
  }
  handleSubmit(values){

  }
  render(){
    return(
      <>
        <Button outline onClick={this.toggleModal}><span className='fa fa-pencil'></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values=>this.handleSubmit(values)}>
              <Row className='mb-2'>
                <Label htmlFor="rating" md={2}>Rating</Label>
                <Col md={10}>
                  <Control.select model=".rating" id="rating" className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Label htmlFor="author" md={2}>Author</Label>
                <Col md={10}>
                  <Control.text model=".author" id="author"
                    className="form-control"
                    placeholder="Your Name"
                    validators={{
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors className="text-danger" model=".author" show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 charachters',
                      maxLength: 'Must be 15 charachters or less',
                    }}/>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Label htmlFor="message" md={2}>Comment</Label>
                <Col md={10}>
                  <Control.textarea model=".message" id="message"
                    className="form-control" rows={6}
                  />
                </Col>
              </Row>
              <Button color="primary" type='submit'>Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

const DishDetail = ({dish,comments}) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <h3>{dish.name}</h3>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          {dish && renderComments(comments)}
        </div>
      </div>
    </div>
  );
}

export default DishDetail;



