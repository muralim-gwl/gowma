import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import $ from "jquery";
// import * as actions from '../actions';

import Header from './common/Header';
import Landing from './content/Landing';
import Footer from './common/Footer';

import ViewProdcut from './content/ViewProduct';

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
              <br/>
                <Route exact path={basePath+"/"} component={Landing} />
                <Route exact path={basePath+"/view-product"} component={ViewProdcut} />
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
