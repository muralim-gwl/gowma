import React,{Component} from 'react';

class Signup extends Component {

  render()
  {

    return(

<div className="row">
   <div className="col s9 m8 l7">

   <ul className="collapsible popout" data-collapsible="accordion">
    <li>
      <div className="collapsible-header"><i className="material-icons">filter_drama</i>SINGUP OR LOGIN</div>
      <div className="collapsible-body">
      <span>
           <div className="row">
             <div className="col s9 m8 l6">
               <div className="input-field col s12">
                <input id="email" type="email" className="validate"></input>
                <label for="email">Email</label>
               </div>
            <div className="row">
             <div className="col s10 m8 l7"><a class="waves-effect waves-light btn-large">CONTINUE</a></div>
           </div>
          </div>

          <div className="col s9 m7 l6">
              <span>Advantages of our secure login</span><br/><br/>
              <span className="left-align"><i className="tiny material-icons ">directions_bus</i>Easily Track Orders. </span><br/><br/>
              <span><i className="tiny material-icons ">add_aler</i>Get Relevant Alerts and Recommendation. </span><br/>
              <span><i className="tiny material-icons ">grade</i>Wishlist,Reviews,Ratings and more. </span>

          </div>

       </div>
       </span></div>
    </li>
    </ul>

    <ul class="collapsible" data-collapsible="accordion">
      <li>
      <div className="collapsible-header"><i className="material-icons">place</i>DELIVERY ADDRESS</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
     </li>
    </ul>

    <ul class="collapsible" data-collapsible="accordion">
     <li>
      <div className="collapsible-header"><i className="material-icons">whatshot</i>ORDER SUMMERY</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
     </li>
    </ul>

    <ul class="collapsible" data-collapsible="accordion">
      <li>
      <div className="collapsible-header"><i className="material-icons">whatshot</i>PAYMENT OPTIONS</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
    </li>
  </ul>
   </div>
   <div className="col s3 m4 l4">allah</div>

</div>

    )
  }

}

export default Signup;
