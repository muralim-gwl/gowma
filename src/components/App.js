import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import $ from "jquery";.M/]A,,,
// import * as actions from '../actions';

import Header from './common/Header';
import Landing from './content/Landing';
import Footer from './common/Footer';

import ViewProdcut from './content/ViewProduct';
import ViewProdcuts from './content/ViewProducts';
import MyCarts from './content/myCarts/MyCarts';

import Cart from './content/myCarts/Cart';
import Signup from './content/myCarts/Signup';
import DeliveryAdd from './content/myCarts/DeliveryAdd';

import Login from './content/Login';




// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';
var basePath=""

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <HashRouter>
          <div>
            <Header />



                <Route exact path={basePath+"/"} component={Landing} />
                <Route exact path={basePath+"/view-product"} component={ViewProdcut} />
                <Route exact path={basePath+"/view-products"} component={ViewProdcuts} />
                <Route exact path={basePath+"/my-carts"} component={MyCarts} />

                <Route exact path={basePath+"/my-cart"} component={Cart} />
                <Route exact path={basePath+"/sign-up"} component={Signup} />
                <Route exact path={basePath+"/delivery-add"} component={DeliveryAdd} />




                <Route exact path={basePath+"/login"} component={Login} />



              <br/>
            <Footer/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
// export default connect(null, actions)(App);
