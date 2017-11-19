import React,{Component} from 'react';

class MyCarts extends Component {

  render()
{
  return(
    <div className="row">
    <div className="col s9 m8 l8">
           sffgty
    </div>

    <div className="col s2 m3 l3">
      <table className="responsive-table">
       <thead>
        <tr>
         <th>PRICE DETAILS</th>
        </tr>
       </thead>

        <tbody>
         <tr>
          <td>PRICE(2items)</td>
          <td>34,834</td>
         </tr>

         <tr>
          <td>DeliveryCharges</td>
          <td>Free</td>
         </tr>

         <tr>
          <td>  <span>Amount Payable</span></td>
          <td>34,446</td>
         </tr>

        </tbody>
      </table>

<span className="green-text text-darken-2">Your Totle Saving On This Order 12,746</span>

    </div>


    </div>
  )
}
}

export default MyCarts;
