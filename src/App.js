import React, { Component, Fragment } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import HelmetHeader from './components/HelmetHeader';

class App extends Component {
  render () {
    return (
      <Fragment>
        <HelmetHeader />
        <Header />
        { this.props.children }
        <Footer />
      </Fragment>
    );
  }
}

export default App;
