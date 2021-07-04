import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import "./Location.css"
export class Location extends Component {
    render() {
        return (
            <div id='location'>
                  <h2 class='h2'>{this.props.display_name}</h2>
                  <h4 class='h4'>Longitude  :{this.props.lon}</h4>
                  <h4 class='h4' >Latitude :{this.props.lat}</h4>
                  <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10&size=500x500`} rounded />;
                {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.props.lat},
                ${this.props.lon}&zoom=10&size=500x500`} /> */}
            </div>
        )
    }
}

export default Location
