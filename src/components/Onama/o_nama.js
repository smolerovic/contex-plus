import React, { Component } from 'react';

class Onama extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <div className='container'>
        <div className='row'>
          O nama
        </div>
      </div>
    );
  }
}
export default Onama;
