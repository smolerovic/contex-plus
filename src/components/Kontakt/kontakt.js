import React, { Component } from 'react';
import GoogleMap from '../../images/google-map.png';
import './kontakt.scss';

class Kontakt extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <main className='container-fluid'>
        <div className='container p-0'>
          <div className='row mt-5 mb-5'>
            <div className='col-md-6'>
              <h1 className='mb-5'>Kontaktirajte nas</h1>
              <div className='row'>
                <div className='col-12 mb-4 adresa'>
                  Level 13, 2 Elizabet St.<br />
                  11070 Novi Beograd<br />
                  Srbija
                </div>
                <div className='col-12 mt-2'>
                  <div className='d-flex align-items-center mb-1'>
                    <i className='fa-kontakt fa fa-phone mr-2' />
                    <a className='a-color-hover mr-2' style={{ fontSize: '16px' }} href='tel:0654793883'>065/47-93-883</a>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='fa-kontakt fa fa-envelope mr-2' />
                    <a className='a-color-hover' style={{ fontSize: '16px' }} href='mailto:kontext.grocka@gmail.com'>kontext.grocka@gmail.com</a>
                  </div>
                </div>
                <div className='col-12 radno-vreme mt-5'>
                  Radno vreme<br />
                  Ponedeljak - Subota: 10 - 18h
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <h1 className='mb-5'>Online kontakt</h1>
              <form name='formaKontakt' className='row'>
                <div className='col-sm-6 form-group'>
                  <input className='form-control' placeholder='Vaše ime *' type='text' required />
                </div>
                <div className='col-sm-6 form-group'>
                  <input className='form-control' placeholder='Vaš e-mail *' type='email' required />
                </div>
                <div className='col-sm-12 form-group'>
                  <input className='form-control' placeholder='Naslov' type='naslov' />
                </div>
                <div className='col-sm-12 form-group'>
                  <textarea className='form-control' placeholder='Vaša poruka' rows='5' />
                </div>
                <div className='col-sm-12 form-group'>
                  <button className='btn w-100 position-relative' type='submit'>Pošalji</button>
                </div>
                <small className='col-12'>* Obavezna polja</small>
              </form>
            </div>
          </div>
        </div>
        <div className='row'>
          <img className='mt-3 mb-4 w-100 h-100' src={GoogleMap} alt='mapa' />
        </div>
      </main>
    );
  }
}

export default Kontakt;
