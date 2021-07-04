
import React, { Component } from 'react'
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';
import { CardColumns } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
export class Weather extends Component {
    render() {
        if (this.props. weatherInfo.length === 0) {
            return (''); }
            return (
               
       <div id='cards'>
          <h2> ⛅️ Weather Data ⛅️ </h2>
      
                
          {this.props.weatherInfo.map((data, index) => (
              <CardDeck id='card'>
            <WeatherDay key={index}  date={data.date} description={data.description} />
            </CardDeck>
          )
                )}
 

          </div>
            )
    }
}

export default Weather


