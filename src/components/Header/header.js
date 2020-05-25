/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { ROOT_ROUTE, KONTACT_RUTA, O_NAMA_RUTA, GALERIJA_RUTA, KURSEVI_RUTA } from '../../helper/routes';
import { pageView } from '../../helper/googleAnalytics';
import { CURRENT_URL } from '../../actions/types';

import Logo from '../../images/kontex_logo-min.png';

import './header.scss';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: true,
      openHamburger: true
    };
  }

  linkChanged = (url) => {
    const prevURL = sessionStorage.getItem(CURRENT_URL);
    if (prevURL !== url) {
      sessionStorage.setItem(CURRENT_URL, url);
      pageView(url);
    }
  }

  handleHideSidebar = () => {
    if (window.innerWidth < 992) {
      document.getElementsByClassName('navbar-toggler')[0].click();
      this.setState({ open: false });
    }
  }

  pageSubTitles = () => {
    const { pathname } = window.location;
    let pageSubTitle = '';
    switch (pathname) {
    case KONTACT_RUTA:
      return (pageSubTitle = <h2>Kontakt</h2>);
    case O_NAMA_RUTA:
      return (pageSubTitle = <h2>O nama</h2>);
    case GALERIJA_RUTA:
      return (pageSubTitle = <h2>Galerija</h2>);
    case KURSEVI_RUTA:
      return (pageSubTitle = <h2>Kursevi</h2>);
    default:
      return pageSubTitle;
    }
  }

  render () {
    const { openHamburger } = this.state;
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 150) {
        $('.nav-changed-position').addClass('fixed-top-new');
      } else {
        $('.nav-changed-position').removeClass('fixed-top-new');
      }
    });

    let { pathname } = window.location;
    sessionStorage.removeItem(CURRENT_URL);
    window.browserHistory.listen((ev) => {
      pathname = ev.pathname;
      this.linkChanged(pathname);
    });

    let style = {};
    let flag = {};
    let isDashbord = false;
    if (pathname === ROOT_ROUTE) {
      style = { minHeight: '650px' };
      flag = { alignItems: 'center' };
      isDashbord = true;
    } else {
      style = { height: '300px', minHeight: '300px' };
      flag = { alignItems: 'flex-end' };
    }
    return (
      <div className='container-fluid position-relative p-0 background-header' style={style} id='top'>
        <div className='position-container container max-width-container'>
          <div className='row background-white-responsive'>
            <div className='col-md-10'>
              <span className='mr-3 imate-pitanja'>Imate bilo kakva pitanja?</span>
              <i className='fa fa-phone mr-2' /><a className='a-color-hover mr-2' href='tel:+381654793883'>065/47-93-883</a>
              <i className='fa fa-envelope mr-2' /><a className='a-color-hover' href='mailto:kontext.grocka@gmail.com'>kontext.grocka@gmail.com</a>
            </div>
            <div className='col-md-2 text-right'>
              <a href='https://www.facebook.com/kontextplusgrocka/' target='_blank' rel='noopener' className='mr-3'>
                <i className='fa fa-facebook-f white-hover' title='Facebook' />
              </a>
              <a href='https://www.instagram.com/kontext_grocka/' target='_blank' rel='noopener'>
                <i className='fa fa-instagram white-hover' title='Instagram' />
              </a>
            </div>
          </div>
          <div className='nav-changed-position' style={{ background: 'white' }}>
            <div className='row pr-3 pl-3 container' style={{ margin: '0px auto' }}>
              <div className='logo-responsive'>
                <a href={ROOT_ROUTE}>
                  <img src={Logo} alt='Kontext Plus - Škola stranih jezika' />
                </a>
              </div>
              <nav className='navbar-expand-lg'>
                <div className='navbar-toggler navbar-toggler-right button-header-hamburger pointer' onClick={() => this.setState({ openHamburger: !openHamburger })}>
                  <span className='hamburger' />
                  <span className='hamburger' />
                  <span className='hamburger' />
                </div>
                <div className={`navbar-collapse ${openHamburger ? 'collapse' : ''}`}>
                  <Link className={`ml-5 pl-3 position-relative link-hover ${pathname === ROOT_ROUTE ? 'activan' : ''}`} to={ROOT_ROUTE} onClick={this.handleHideSidebar}>
                    <div className='border-desni'>Početna</div>
                    <div className='nav-hover' />
                  </Link>
                  <Link className={`pl-3 position-relative link-hover ${pathname === O_NAMA_RUTA ? 'activan' : ''}`} to={O_NAMA_RUTA} onClick={this.handleHideSidebar}>
                    <div className='border-desni'>O nama</div>
                    <div className='nav-hover' />
                  </Link>
                  <Link className={`pl-3 position-relative link-hover ${pathname === KURSEVI_RUTA ? 'activan' : ''}`} to={KURSEVI_RUTA} onClick={this.handleHideSidebar}>
                    <div className='border-desni'>Kursevi</div>
                    <div className='nav-hover' />
                  </Link>
                  <Link className={`pl-3 position-relative link-hover ${pathname === GALERIJA_RUTA ? 'activan' : ''}`} to={GALERIJA_RUTA} onClick={this.handleHideSidebar}>
                    <div className='border-desni'>Galerija</div>
                    <div className='nav-hover' />
                  </Link>
                  <Link className={`pl-3 position-relative link-hover ${pathname === KONTACT_RUTA ? 'activan' : ''}`} to={KONTACT_RUTA} onClick={this.handleHideSidebar}>
                    <div className='border-desni'>Kontakt</div>
                    <div className='nav-hover' />
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className='container h-100'>
          <div className='row text-center h-100' style={flag}>
            {isDashbord
              ? <div className='col-12 pt-5'>
                <div className='table-font pt-5'>
                  <div className='carousel slide' data-ride='carousel' data-pause='false'>
                    <div className='carousel-inner'>
                      <div className='carousel-item active'>
                        &quot;The beautiful thing about learning is that no one can take it away from you.&quot;<br />
                        <p className='text-right dashbord-p'>- B. B. KING</p>
                      </div>
                      <div className='carousel-item'>
                      &quot;Učenje nije produkt nastavničkog predavanja. Učenje je produkt aktivnosti onih koji uče.&quot;<br />
                        <p className='text-right dashbord-p'>- Dzon Holt</p>
                      </div>
                      <div className='carousel-item'>
                        &quot;Tell me and I forget. Teach me and I remember. Involve me and I learn.&quot;<br />
                        <p className='text-right dashbord-p'>- Xun Kuang</p>
                      </div>
                      <div className='carousel-item'>
                      &quot;Um nije sud koji treba da se ispuni nego vatra koja treba da se rasplamsa.&quot;<br />
                        <p className='text-right dashbord-p'>- Plutarh</p>
                      </div>
                      <div className='carousel-item'>
                      &quot;You can get help from teachers, but you are going to have to learn a lot by yourself, sitting alone in a room.&quot;<br />
                        <p className='text-right dashbord-p'>- Dr Seuss</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              : <div className='col-12 pb-5'>
                {this.pageSubTitles()}
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
