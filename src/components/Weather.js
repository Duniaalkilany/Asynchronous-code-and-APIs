
import React, { Component } from 'react'
import WeatherDay from './WeatherDay';
import CardDeck from 'react-bootstrap/CardDeck';
export class Weather extends Component {
    render() {
        if (this.props. weatherInfo.length === 0) {
            return (''); }
        return (
            <div>
                  <CardDeck>
          {this.props.weatherInfo.map((data, index) => (
            <WeatherDay  date={data.date} description={data.description} />
          ))}
        </CardDeck>
            </div>
        )
    }
}

export default Weather


