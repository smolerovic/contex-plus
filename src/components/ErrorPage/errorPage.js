import React, { Component } from 'react';
import './errorPage.scss';
import HelmetHeader from '../HelmetHeader';

import Err from '../../images/magare-min.png';
import { ROOT_ROUTE } from '../../helper/routes';

class ErrorPage extends Component {
  render () {
    return (
      <div className='container-fluid  h-100' style={{ background: '#ff7713' }}>
        <HelmetHeader pageTitle='Stranica nije pronadjena' description='Sertifikovani kursevi jezika u samom centru Grocke za sve nivoe i uzraste. Pripremni časovi za školsko gradivo i međunarodne ispite. Kontakt: 065/47-93-883.' />
        <div className='row align-items-center text-center h-50'>
          <div className='w-100'>
            <h1 style={{ fontSize: '50px' }}>Ooops! <br />Stranica nije pronadjena</h1>
            <a href={ROOT_ROUTE} className='btn position-relative mt-3 error-btn'>POVRATAK NA POČETNU</a>
          </div>
        </div>
        <img src={Err} alt='Error slika' className='error-slika-style' />
        <style>{'footer{display: none!important;} #top{display: none;}'}</style>
      </div>
    );
  }
}
export default ErrorPage;
