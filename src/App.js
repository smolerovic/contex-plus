import React, { Component } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import HelmetHeader from './components/HelmetHeader';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <HelmetHeader />
        <Header />
        { this.props.children }
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
