
import React, { Component } from 'react'
 import Forme from './Forme';
 import Header from './Header'
import Footer from './Footer';
import { render as r } from 'react-dom';


class App extends Component {
  render() {
    return (
      <div>
    
       <Header/>
       <Forme/>
       <Footer/>
</div>
    )
  }
}

export default App


























// import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';

// export class App extends Component {

//   updateSearchCity=(event)=>{
//     this.setState({
//       searchCity:event.target.value
//     });
//   }
  
//   render() {
//     return (
//       <div>
//          <Form  onSubmit={this.getYourCity}>
//           <input style={{width:`20rem`,height:'3rem',color:'blue'}} id='city' onChange={this.updateSearchCity} type='text' placeholder='city name'/>
//           <Button style={{ width: '5rem' ,height:'2rem',backgroundColor:'red'}} type='submit' value='get city' >Explore!</Button>
       
       

//         </Form >
//       </div>
//     )
//   }
// }

// export default App
