import React, { Component } from 'react';
import $ from 'jquery';
import './footer.scss';
import LinkedIn from '../../images/linkedin-min.png';
import Stefan from '../../images/krug-min.png';
import FacebookFooter from '../../images/facebook-png-min.png';

class Footer extends Component {
  scrollToTheSection (id) {
    try {
      $('html, body').animate({
        scrollTop: $(`#${id}`).offset().top
      }, 500, 'swing');
    } catch (error) {
      console.warn('Error focusing map', error);
    }
  }
  render () {
    return (
      <footer className='container-fluid pl-xs-0 pr-xs-0' style={{ backgroundColor: '#3c3023', color: '#A0968A' }}>
        <div className='container p-0'>
          <div className='row pt-5 pb-5 m-0'>
            <div className='col-md-4'>
              <h3>Shortcut links</h3>
              <div className='row'>
                <div className='col-md-6'>
                  <ul className='pl-3 font-size-15 li-parent-color'>
                    <li><a href='#nista'>Nesto</a> </li>
                    <li><a href='#nista'>Proba</a> </li>
                    <li><a href='#nista'>Example</a> </li>
                  </ul>
                </div>
                <div className='col-md-6'>
                  <ul className='pl-3 font-size-15 li-parent-color'>
                    <li><a href='#nista'>Nesto</a> </li>
                    <li><a href='#nista'>Testa</a> </li>
                    <li><a href='#nista'>Probas</a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <h3>About us</h3>
              <div className='font-size-15'>Cras varius mauris imperdiet efficitur pulvinar? Morbi pretium sed tortor et blandit. Ut risus ligula.</div>
              <div className='font-size-15'>Dictum et lectus id, pharetra porta odio? Vivamus aliquet consectetur lorem. Donec fringilla nisi ac eros molestie auctor. Phasellus hendrerit ante rhoncus, cursus odio in; blandit urna.</div>
            </div>
            <div className='col-md-4'>
              <h3>Our mission</h3>
              <div className='font-size-15'>Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis.</div>
              <div className='font-size-15 m-0'>Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imper diet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu luctus et ac, laoreet enim.</div>
            </div>
          </div>
        </div>
        <hr />
        <div className='container p-0 pt-0 pb-4 position-relative pt-md-3'>
          <div className='row m-0'>
            <div className='col d-none d-md-block pl-0' style={{ fontSize: '14px' }}>
              <div className='footer-p'>
                &copy; Kontext Plus. All Rights Reserved. Build by
                <span className='a-footer position-relative'>Stefan Molerović
                  <div className='radi'>
                    <div className='gornji' />
                    <div className='krug'>
                      <img src={Stefan} className='stefan-krug' alt='stefan-molerovic-slika' />
                    </div>
                    <div className='donji'>
                      <p className='stefan-molerovic'>Stefan Molerović</p>
                      <p className='front-end'>Front End Developer</p>
                      <a href='https://rs.linkedin.com/in/stefan-molerovic' target='_blank' rel='noopener noreferrer'><img className='linked-in' src={LinkedIn} alt='linkedin-stefan' /></a>
                      <a href='https://www.facebook.com/9stefan2' target='_blank' rel='noopener noreferrer'><img className='facebook-footer' src={FacebookFooter} alt='facebook-stefan' /></a>
                    </div>
                    <div className='nevidljivi' />
                  </div>
                </span>
              </div>
            </div>
            <div className='col-md-3 text-right'>
              <a href='https://www.facebook.com/kontextplusgrocka/' target='_blank' rel='noopener noreferrer' className='mr-3' >
                <i className='fa fa-facebook-f' title='Facebook' />
              </a>
              <a href='https://www.instagram.com/kontext_grocka/' target='_blank' rel='noopener noreferrer' className='mr-5'>
                <i className='fa fa-instagram' title='Instagram' />
              </a>
              <i className='fa fa-chevron-up pointer topcina' title='Povratak na vrh' onClick={() => this.scrollToTheSection('top')} />
            </div>
            <div className='col-12 d-block d-md-none mt-3 mb-2' style={{ fontSize: '14px' }}>
              <div className='footer-p'>
              &copy; Kontext Plus. All Rights Reserved. Build by
                <span className='a-footer position-relative'>Stefan Molerović
                  <div className='radi'>
                    <div className='gornji' />
                    <div className='krug'>
                      <img src={Stefan} className='stefan-krug' alt='stefan-molerovic-slika' />
                    </div>
                    <div className='donji'>
                      <p className='stefan-molerovic'>Stefan Molerović</p>
                      <p className='front-end'>Front End Developer</p>
                      <a href='https://rs.linkedin.com/in/stefan-molerovic' target='_blank' rel='noopener noreferrer'><img className='linked-in' src={LinkedIn} alt='linkedin-stefan' /></a>
                      <a href='https://www.facebook.com/9stefan2' target='_blank' rel='noopener noreferrer'><img className='facebook-footer' src={FacebookFooter} alt='facebook-stefan' /></a>
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
  }
}

export default Footer;
