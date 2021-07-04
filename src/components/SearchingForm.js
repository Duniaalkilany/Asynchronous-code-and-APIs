import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class SearchingForm extends Component {
    render() {
        return (
            <div>
       
       <Form onSubmit={this.props.getData}>
            <Form.Group>
              <Form.Label>City name</Form.Label>
              <Form.Control placeholder="where would you like to explore?..." size="lg" type="text"  onChange={this.props.updateCity}  />
              
            </Form.Group>
            <Button variant="dark" type="submit">
              Explore!
            </Button>
          </Form>

         </div>
            
        )
    }
}

export default SearchingForm
