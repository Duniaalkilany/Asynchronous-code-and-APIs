import React, { Component } from 'react'

 class WeatherData extends Component {
            render() {
                return (
                    this.props.weatherInfo.map((data, index) => {
                        return (<div key={index}>
                            <p>{data.date}</p>
                            <p>{data.description}</p>
                        </div>)
                    })
                )
            }
        }



        export default WeatherData
















//             <div>
//             <h2>{this.props.date}  </h2> 
//             <h2> {this.props.description}</h2
//              >  
//             </div>
//         )
//     }
// }


