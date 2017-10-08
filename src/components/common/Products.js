import React,{Component} from 'react';
import Product from './Product';

let items=[1,2,3,4,5];

class Products extends Component{
  render()
  {
    return items.map((item,key)=>{
      return (<div key={key} className="col s12 m2">
                  <Product/>
             </div>)
    })

  }
}

export default Products;
