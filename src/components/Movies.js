


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';

class Movies extends React.Component {
    render() {
        if (this.props.movieInfo.length === 0) {
            return ('');}

        return (
           <div>
             {this.props. movieInfo.map((data, index) => (
            <Movie   title={data.title} image_url={data.image_url} overview={data.overview} average_votes={data.average_votes} total_votes={this.total_votes} release_date={data.release_date} popularity={data.popularity} />
          ))}
          
            </div>             
        )
    }
}

export default Movies