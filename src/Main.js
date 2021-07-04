import React, { Component } from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Errormsg from './components/Errormsg';
import SearchingForm from  './components/SearchingForm'
import Location from  './components/Location'
import Weather from './components/Weather';
 import Movies from './components/Movies';

 class Main extends Component {

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

      const url=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`;
      const req=await axios.get(url);

      

      
      this.setState({
        cityData:req.data[0],
       disalay:true,
       alert:false,
    
      });

      this.getWeather();
      this.getMovie();


    } catch(err){
      this.setState(
        {error: `${err.message}: ${err.response.data.error}`,
      alert:true})
    }
  
  };

 
  updateCity=(event)=>{
    event.preventDefault();
    this.setState({
    cityName:event.target.value,

    });
  
    
  };

  getWeather=async()=>{
    
    const weatherUrl=`${process.env.REACT_APP_CLIENT_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`;
    
    const reqWeather=await axios.get(weatherUrl);
   
    this.setState({
      weatherData:reqWeather.data
     
    });
    console.log(this.state.weatherData);
 

  };


  getMovie=async()=>{
    const movieUrl=`${process.env.REACT_APP_CLIENT_SERVER}/movie?query=${this.state.cityName}&limit=8`
   
    const reqMovie=await axios.get(movieUrl);
    this.setState({
      movieData:reqMovie.data
    });
    
  }



    render() {
        return (
  <div>
        <Errormsg  alert={this.state.alert} error=
        {this.state.error}/>
          
< SearchingForm getData={this.getData } updateCity={this.updateCity}
        />
        {this.state.disalay &&
          <>

          <Location display_name ={this.state.cityData.display_name} 
          lon={this.state.cityData.lon} lat= {this.state.cityData.lat}/>
  
<Weather weatherInfo={this.state.weatherData}/>
 <Movies movieInfo={this.state.movieData}/>
           
           
      </>
      }
   
 

   
   </div>
    );
  }
}
          
        

export default Main