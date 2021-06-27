import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export class App extends Component {

  updateSearchCity=(event)=>{
    this.setState({
      searchCity:event.target.value
    });
  }
  
  render() {
    return (
      <div>
         <Form  onSubmit={this.getYourCity}>
          <input style={{width:`20rem`,height:'3rem',color:'blue'}} id='city' onChange={this.updateSearchCity} type='text' placeholder='city name'/>
          <Button style={{ width: '5rem' ,height:'2rem',backgroundColor:'red'}} type='submit' value='get city' >Explore!</Button>
       
       

        </Form >
      </div>
    )
  }
}

export default App
