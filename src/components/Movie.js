
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './Movie.css';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
export class Movie extends Component {
    render() {
        return (
        
              <div>
                  <Container id='container'>
                  <img src={this.props.image_url} />
          <h2>{this.props.title}</h2>
          <p id='ov'>{this.props.overview}</p>

          <p id="ps">Average votes: {this.props.average_votes}</p>
          <p id="ps">Popularity: {this.props.popularity}</p>
          <p id="ps">released_date: {this.props.released_date}</p>
     
                  </Container>
                   {/* <Card  border="dark"  style={{ width: '25rem',height:'1500px'   }} bg="info" text = 'dark'  >
   <Card.Img variant="top"  style={{ width: '24.88rem',height:'400px'  }}  src={this.props.image_url} />
   <ListGroup variant="flush" style={{ width: '25rem',height:'250px'}} >
   <Card.Body>
   <ListGroup.Item><Card.Title>{this.props.title}</Card.Title></ListGroup.Item>
   <ListGroup.Item> <Card.Text>
    <p>Overview:{this.props.overview} </p>
    <p>Average votes:{this.props.average_votes}</p>
    <p>Total votes:{this.props.total_votes}</p>
  <p>Release data:{this.props.release_date}</p>
  <p>Popularity:{this.props.popularity}</p>
  

    </Card.Text> </ListGroup.Item>  
   </Card.Body> 
   </ListGroup>
   </Card>
      */}

            </div>
        )
    }
}

export default Movie










