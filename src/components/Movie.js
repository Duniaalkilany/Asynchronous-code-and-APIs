
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
export class Movie extends Component {
    render() {
        return (
        
              <div>
                   <Card style={{ width: '18rem' }}>
   <Card.Img style={{ width: '10rem' }} variant="top" src={this.props.image_url} />
   <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    <p>{this.props.overview} </p>
    <p>{this.props.average_votes}</p>
    <p>{this.props.total_votes}</p>
  <p>{this.props.release_date}</p>
  <p>{this.props.popularity}</p>
  

    </Card.Text>   
   </Card.Body> </Card>
     

            </div>
        )
    }
}

export default Movie










