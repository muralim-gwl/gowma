import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import $ from "jquery";
// import * as actions from '../actions';

import Header from './common/Header';
import Landing from './content/Landing';
import Footer from './common/Footer';

import ViewProdcut from './content/ViewProduct';

// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
              <br/>
                <Route exact path="/" component={Landing} />
                <Route exact path="/view-product" component={ViewProdcut} />
              <br/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
// export default connect(null, actions)(App);
