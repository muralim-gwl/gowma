import React,{Component} from 'react';

class DeliveryAdd extends Component {

  render()
{

  return(

    <div className="row">
        <div className="col s9 m7 l8">


          <ul class="collapsible" data-collapsible="accordion">
             <li>
               <div class="collapsible-header"><i class="material-icons">filter_drama</i>DeliveryAddress</div>
               <div class="collapsible-body"><span><form action="#">
                  <p>
                     <input name="group1" type="radio" id="test1" />
                     <label for="test1">
                         <span> <h6>Thahareema</h6>
                           Add radio buttons to a group by adding the name attribute along with the same corresponding value for each of the radio buttons in the group. Create disabled radio buttons by adding the disabled attribute as shown below.
                              <br/>
                           <a class="waves-effect waves-light btn">CONTINUE</a>
                         </span>
                     </label>
                 </p>
                 <p>
                     <input name="group1" type="radio" id="test2" />
                     <label for="test2">
                        <span> <h6>Thahareema</h6>
                          Add radio buttons to a group by adding the name attribute along with the same corresponding value for each of the radio buttons in the group. Create disabled radio buttons by adding the disabled attribute as shown below.
                          <br/>
                           <a class="waves-effect waves-light btn">CONTINUE</a>
                          </span>
                     </label>
                 </p>
                  <p>
                     <input class="with-gap" name="group1" type="radio" id="test3"  />
                    <label for="test3">
                       <span> <h6>Thahareema</h6>
                          Add radio buttons to a group by adding the name attribute along with the same corresponding value for each of the radio buttons in the group. Create disabled radio buttons by adding the disabled attribute as shown below.
                          <br/>
                          <a class="waves-effect waves-light btn">CONTINUE</a>
                        </span>
                   </label>
                  </p>
                  <p>
                     <input name="group1" type="radio" id="test4" disabled="disabled" />
                     <label for="test4">
                          <span> <h6>Thahareema</h6>
                             Add radio buttons to a group by adding the name attribute along with the same corresponding value for each of the radio buttons in the group. Create disabled radio buttons by adding the disabled attribute as shown below.
                             <br/>
                             <a class="waves-effect waves-light btn">CONTINUE</a>
                           </span>
                    </label>
                  </p>
                 </form></span></div>
             </li>
        </ul>

          <ul class="collapsible" data-collapsible="accordion">
             <li>
               <div class="collapsible-header"><i class="material-icons">filter_drama</i>Add a new address</div>
               <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
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

        <div className="col s6 m4 l3">
           Allah...
        </div>

    </div>



  )
}


}
export default DeliveryAdd;
