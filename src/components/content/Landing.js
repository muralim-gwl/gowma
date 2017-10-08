import React,{Component} from 'react';
import Carousel from './Landing/Carousel';
import Menu from './Landing/Menu';
import Offers from './Landing/Offers';


class App extends Component {
  render() {
    return (
      <div>

      <div className="row">
         <div className="col s3"><Menu/></div>
         <div className="col s9">
            <Carousel/>
         </div>


      </div>

      <Offers/>

      <Offers/>

      <Offers/>



  </div>
    );
  }
}

export default App;
