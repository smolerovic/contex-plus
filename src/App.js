/* eslint-disable react/jsx-fragments */
import React from 'react';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import HelmetHeader from './components/HelmetHeader';

const App = (props) => {
  return (
    <React.Fragment>
      <HelmetHeader />
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default App;
