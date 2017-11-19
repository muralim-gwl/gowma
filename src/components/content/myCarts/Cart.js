import React,{Component} from 'react';


class Cart extends Component {


  render()

  {

return(

   <div className="row">
        <div className="col s12 m12">
          <div className="card-small">
            <div className="card-image-left ">
              <img src="https://lorempixel.com/500/250/nature/3"></img>
              <span className="card-title">Card Title</span>
                </div>
            <div className="card-content">
              <span className="REGULAR">Micromax 016cm (42inch) Full HD LED TV</span>
                <br/>
              <span className="THIN">376567574FHD/76354667FHD</span>
                 <br/>
              <span>Seller:OmniTechRetail</span>
              <br/>

             <span><h5>25,000 </h5>45,000</span>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
)

  }

}

export default Cart;
