
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
export class WeatherDay extends Component {
    render() {
        return (
            <div>
              <Card style={{ width: '18rem' }}>
              <Card.Title>{this.props.date}</Card.Title>
  <Card.Body>
   
    <Card.Text>
    {this.props.description}
    </Card.Text>
   
  </Card.Body>
</Card>  
            </div>
        )
    }
}

export default WeatherDay







