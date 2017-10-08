import React,{Component} from 'react';
import Products from '../../common/Products';

class Offers extends Component{
  render()
  {

    return(
      <div>
      <div className="row">
          <div className="col s12 m2">

                <div className="card-panel teal">
                  <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively. I am similar to what is asdasd.
                  </span>
                  <a className="waves-effect waves-light btn red">View All</a>
                </div>



          </div>

          <Products/>




     </div>


      </div>


    )
  }
}

export default Offers;
