import React, { Component } from 'react';

import axios from 'axios';
import Form from'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Errormsg from './Errormsg';
import Weather from './components/Weather';
 import Movies from './components/Movies';
 class Forme extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: '',
      disalay:false,
      error:'',
      alert:false,
      weatherData:[],
      movieData:[],

    };
  }


  getData=async(event)=>{
    event.preventDefault();
    try{

      const url=`https://eu1.locationiq.com/v1/search.php?key=pk.817cb7273867d605c2d5314fc4f44fd8&q=${this.state.cityName}&format=json`;
      const req=await axios.get(url);



      //  const localReq =await axios.get('http://localhost:8000//weather?lat=47.60621&lon=-122.33207&searchQuery=seattle');

        //  const localUrl=`${process.env.REACT_APP_CLIENT_SERVER}/weather?lat=${this.state.cityData.lon}&lon=${this.state.cityData.lon}`;
        // const localReq = await axios.get(localUrl); 
      this.setState({
        cityData:req.data[0],
       disalay:true,
       alert:false,
        //  localWeatherData:localReq.data

      });
    } catch(err){
      this.setState(
        {error: `${err.message}: ${err.response.data.error}`,
      alert:true})
    }
    this.getWeather();
    this.getMovie()
  };


  updateCity=(event)=>{
    event.preventDefault();
    this.setState({
      cityName:event.target.value,

    });
    
  };

  getWeather=async()=>{
    
    const expressWeatherUrl=`${process.env.REACT_APP_CLIENT_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`;
    //   console.log(this.state.data);
    const reqExpress=await axios.get(expressWeatherUrl);
    console.log(expressWeatherUrl);
    this.setState({
      weatherData:reqExpress.data
      // show:true,
    });
    console.log(this.state.weatherData);
    //   console.log(this.state.weatherData);

  };


  getMovie=async()=>{
    const expressMovieURL=`${process.env.REACT_APP_CLIENT_SERVER}/movie?query=${this.state.cityName}&limit=8`
    console.log(expressMovieURL);
    const reqMovie=await axios.get(expressMovieURL);
    this.setState({
      movieData:reqMovie.data
    });
    
  }



    render() {
        return (
  <div>
        <Errormsg  alert={this.state.alert} error=
        {this.state.error}/>
            <Form onSubmit={this.getData}>
            <Form.Group>
              <Form.Label>City name</Form.Label>
              <Form.Control placeholder="where would you like to explore?..." size="lg" type="text"  onChange={this.updateCity}  />
              
            </Form.Group>
            <Button variant="dark" type="submit">
              Explore!
            </Button>
          </Form>

          
        {this.state.disalay &&
          <>
            <p>{this.state.cityData.display_name}</p>
            <h5> Longitude: {this.state.cityData.lon}, Latitude: {this.state.cityData.lat}</h5>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.817cb7273867d605c2d5314fc4f44fd8&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10&size=500x500`} rounded />;
           
      </>}
   {/* {this.state.localWeatherData.map( weatherData=>{
return <Weather description={ weatherData.description} date={ weatherData.date}/> */}
 <Weather weatherInfo={this.state.weatherData}/>
 <Movies movieInfo={this.state.movieData}/>

   
   </div>
    );
  }
}
          
        

export default Forme