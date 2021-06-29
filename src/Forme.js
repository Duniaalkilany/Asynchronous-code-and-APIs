import React, { Component } from 'react';

import axios from 'axios';
import Form from'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alertmsg from './Alertmsg';
export class Forme extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: '',
      disalay:false,
      error:'',
      alert:false,
    

    };
  }


 




  getData=async(event)=>{
    event.preventDefault();
    try{

      const url=`https://eu1.locationiq.com/v1/search.php?key=pk.817cb7273867d605c2d5314fc4f44fd8&q=${this.state.cityName}&format=json`;
      const req=await axios.get(url);
      this.setState({
        cityData:req.data[0],
       disalay:true,
       alert:false

      });
    }
    catch(err){
      this.setState(
        {error: `${err.message}: ${err.response.data.error}`,
      alert:true})
    }
  }


  updateCity=(event)=>{
    event.preventDefault();
    this.setState({
      cityName:event.target.value,
   
    });
  }



  
    render() {
        return (
  <>
        <Alertmsg  alert={this.state.alert} error=
        {this.state.error}/>
            <Form onSubmit={this.getData}>
            <Form.Group>
              <Form.Label>City name</Form.Label>
              <Form.Control placeholder="where would you like to explore?..." size="lg" type="text"  onChange={this.updateCity}  />
              
            </Form.Group>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>

          
        {this.state.disalay &&
          <>
            <p>{this.state.cityData.display_name}</p>
            <h5>{this.state.cityData.lon},{this.state.cityData.lat}</h5>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.817cb7273867d605c2d5314fc4f44fd8&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10&size=500x500`} rounded />;
           
      </>}
      </>
    );
  }
}
          
        

export default Forme
