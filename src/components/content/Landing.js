import React,{Component} from 'react';
import Carousel from './Landing/Carousel';
import Menu from './Landing/Menu';
import Offers from './Landing/Offers';
import Brands from './Landing/Brands'


class Landing extends Component {
  render() {
    return (
      <div>

      <div className="row">
         <div className="col s12 m3"><Menu/></div>
         <div className="col s12 m9">
            <Carousel/>
         </div>


      </div>

      <Offers/>
      <Brands/>

      <Offers/>

      <Offers/>



  </div>
    );
  }
}

export default Landing;
