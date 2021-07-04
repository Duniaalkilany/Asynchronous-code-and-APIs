import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
export class Location extends Component {
    render() {
        return (
            <div>
                  <p>{this.props.display_name}</p>
                  <h5>{this.props.lon},{this.props.lat}</h5>
                  <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10&size=500x500`} rounded />;
                {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.props.lat},
                ${this.props.lon}&zoom=10&size=500x500`} /> */}
            </div>
        )
    }
}

export default Location
