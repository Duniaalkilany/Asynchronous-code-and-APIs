


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Movie from './Movie';
import { CardDeck} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
class Movies extends React.Component {
    render() {
        if (this.props.movieInfo.length === 0) {
            return ('');}

        return (
           <div id='dstyle'>
               <h2> 🎥Movies related to the city🎥 </h2>
              
             {this.props. movieInfo.map((data, index) => (
                  <Container id='cstyle'>
            <Movie   title={data.title} image_url={data.image_url} overview={data.overview} average_votes={data.average_votes} total_votes={this.total_votes}  popularity={data.popularity} released_date={data.released_date}/>
            </Container>
          ))}
        
            </div>             
        )
    }
}

export default Movies