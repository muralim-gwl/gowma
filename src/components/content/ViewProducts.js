import React,{Component} from 'react';


class ViewProducts extends Component {


  render() {
    return (
      <div className="row">
         <div className="col s4 m3 l3 z-depth-3" ><h5>Filter</h5>


         <h6>Price</h6>
         <div className="progress">
           <div className="determinate" style={{width: "70%"}}></div>
         </div>


        <div className="row">
          <div className="col s6 m4 l3">Tharu</div>
          <div className="col s6 m4 l3">tharu</div>
        </div>

         </div>


        <div className="col s8 m9 l9 z-depth-3">
        <nav>
          <div className="nav-wrapper">
     <div className="col s12">
       <a href="#!" className="breadcrumb">First</a>
       <a href="#!" className="breadcrumb">Second</a>
       <a href="#!" className="breadcrumb">Third</a>
       <a href="#!" className="breadcrumb">Third</a>
       <a href="#!" className="breadcrumb">Third</a>
       <a href="#!" className="breadcrumb">Third</a>
     </div>
          </div>
       </nav>
<h6>Mens Footwear</h6>

<div className="row">
    <div className="col s12">
      <ul className="tabs">
        <li className="tab col s3"><a href="#Popularity">Popularity</a></li>
        <li className="tab col s3"><a className="active" href="#Price -- Low to High">Price -- Low to High</a></li>
        <li className="tab col s3"><a href="#Price -- High to Low">Price -- High to Low</a></li>
        <li className="tab col s3"><a href="#Newest First">Newest First</a></li>
      </ul>
    </div>
</div>

<div className="carousel carousel-slider center" data-indicators="true">
   <div className="carousel-fixed-item center">
     <a className="btn waves-effect white grey-text darken-text-2">button</a>
   </div>
   <div className="carousel-item"></div>
   <img src="https://lorempixel.com/580/250/nature/3"/>
     <h2>First Panel</h2>
     <p className="white-text">This is your first panel</p>

   <img src="https://lorempixel.com/580/250/nature/3"/>
     <h2>Second Panel</h2>
     <p className="white-text">This is your second panel</p>

   <img src="https://lorempixel.com/580/250/nature/3"/>
     <h2>Third Panel</h2>
     <p className="white-text">This is your third panel</p>

   <img src="https://lorempixel.com/580/250/nature/3"/>
     <h2>Fourth Panel</h2>
     <p className="white-text">This is your fourth panel</p>

 </div>


      </div>

      </div>
    );
  }
}

export default ViewProducts;
