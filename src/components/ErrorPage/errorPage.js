import React, { Component } from 'react';
import './errorPage.scss';

import Err from '../../images/magare-min.png';
import { ROOT_ROUTE } from '../../helper/routes';

class ErrorPage extends Component {
  render () {
    return (
      <div className='container-fluid  h-100' style={{ background: '#ff7713' }} title='Stranica nije pronadjena'>
        <div className='row align-items-center text-center h-50'>
          <div className='w-100'>
            <h1 style={{ fontSize: '50px' }}>Ooops! <br />Stranica nije pronadjena</h1>
            <a href={ROOT_ROUTE} className='btn position-relative mt-3 error-btn'>POVRATAK NA POČETNU</a>
          </div>
        </div>
        <img src={Err} alt='error-slika' className='error-slika-style' />
        <style>{'footer{display: none!important;} #top{display: none;}'}</style>
      </div>
    );
  }
}
export default ErrorPage;
