/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { KONTACT_RUTA, O_NAMA_RUTA, GALERIJA_RUTA, KURSEVI_RUTA } from '../../helper/routes';

import LinkedIn from '../../images/linkedin-min.png';
import Stefan from '../../images/krug-min.png';
import FacebookFooter from '../../images/facebook-png-min.png';
import Oa from '../../images/otkupantikviteta.gif';

import './footer.scss';

const Footer = () => {
  const scrollToTheSection = (id) => {
    try {
      $('html, body').animate({
        scrollTop: $(`#${id}`).offset().top
      }, 500, 'swing');
    } catch (error) {
      console.warn('Error focusing map', error);
    }
  };

  return (
    <footer className='container-fluid pl-xs-0 pr-xs-0 footer-kp'>
      <div className='container p-0'>
        <div className='row pt-5 pb-3 m-0'>
          <div className='col-md-4'>
            <h3>Prečice</h3>
            <div className='row'>
              <div className='col-md-6'>
                <ul className='pl-3 font-size-15 li-parent-color'>
                  <li><Link to={O_NAMA_RUTA}>O nama</Link> </li>
                  <li><Link to={KURSEVI_RUTA}>Kursevi</Link> </li>
                </ul>
              </div>
              <div className='col-md-6'>
                <ul className='pl-3 font-size-15 li-parent-color'>
                  <li><Link to={GALERIJA_RUTA}>Galerija</Link> </li>
                  <li><Link to={KONTACT_RUTA}>Kontakt</Link> </li>
                </ul>
              </div>
              <div className='col-12 mt-2 mb-3'>
                <a href='http://www.otkupantikviteta.com/' target='_blank' rel='noopener'>
                  <img src={Oa} alt='Otkup Antikviteta' width='100%' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <h3>O nama</h3>
            <div className='font-size-15 mb-3'>Škola jezika Kontext plus nastala je kao deo Centra za strane jezike Kontext koji je počeo sa radom septembra 1991. godine sa željom da kreira okruženje koje će omogućiti bavljenje jezikom, bilo da se radi o učenju, podučavanju, prevođenju ili umetničkom izražavanju, i da postane deo svakodnevne kulture i zadovolji komunikative i delatne potrebe svojih polaznika i saradnika.</div>
          </div>
          <div className='col-md-4'>
            <h3>Naša misija</h3>
            <div className='font-size-15'>Ako tražite efikasne programe kurseva stranih jezika i posvećene i stručne predavače - na pravom ste mestu. Naša škola je spoj iskustva, znanja i velikog entuzijazma da ih prenesemo na druge. Dostupni smo Vam u skoro svako doba za sve infomacija koje su Vam potrebne.</div>
          </div>
        </div>
      </div>
      <hr />
      <div className='container p-0 pt-0 pb-4 position-relative pt-md-3'>
        <div className='row m-0'>
          <div className='col d-none d-md-block pl-xs-0' style={{ fontSize: '14px' }}>
            <div className='footer-p'>
                &copy; Kontext Plus. All Rights Reserved. Build by
              <span className='a-footer position-relative'>Stefan Molerović
                <div className='radi'>
                  <div className='gornji' />
                  <div className='krug'>
                    <img src={Stefan} className='stefan-krug' alt='Stefan Molerović slika' />
                  </div>
                  <div className='donji'>
                    <p className='stefan-molerovic'>Stefan Molerović</p>
                    <p className='front-end'>Front End Developer</p>
                    <a href='https://rs.linkedin.com/in/stefan-molerovic' target='_blank' rel='noopener'><img className='linked-in' src={LinkedIn} alt='LinkedIn' /></a>
                    <a href='https://www.facebook.com/9stefan2' target='_blank' rel='noopener'><img className='facebook-footer' src={FacebookFooter} alt='Facebook' /></a>
                  </div>
                  <div className='nevidljivi' />
                </div>
              </span>
            </div>
          </div>
          <div className='col-md-3 text-right pr-4'>
            <a href='https://www.facebook.com/kontextplusgrocka/' target='_blank' rel='noopener' className='mr-4'>
              <i className='fa fa-facebook-f' title='Facebook' />
            </a>
            <a href='https://www.instagram.com/kontext_grocka/' target='_blank' rel='noopener' className='mr-5'>
              <i className='fa fa-instagram' title='Instagram' />
            </a>
            <i className='fa fa-chevron-up pointer topcina' title='Povratak na vrh' onClick={() => scrollToTheSection('top')} />
          </div>
          <div className='col-12 d-block d-md-none mt-3 mb-2' style={{ fontSize: '14px' }}>
            <div className='footer-p'>
              &copy; Kontext Plus. All Rights Reserved. Build by
              <span className='a-footer position-relative'>Stefan Molerović
                <div className='radi'>
                  <div className='gornji' />
                  <div className='krug'>
                    <img src={Stefan} className='stefan-krug' alt='Stefan Molerović slika' />
                  </div>
                  <div className='donji'>
                    <p className='stefan-molerovic'>Stefan Molerović</p>
                    <p className='front-end'>Front End Developer</p>
                    <a href='https://rs.linkedin.com/in/stefan-molerovic' target='_blank' rel='noopener'><img className='linked-in' src={LinkedIn} alt='LinkedIn' /></a>
                    <a href='https://www.facebook.com/9stefan2' target='_blank' rel='noopener'><img className='facebook-footer' src={FacebookFooter} alt='Facebook' /></a>
                  </div>
                  <div className='nevidljivi' />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
