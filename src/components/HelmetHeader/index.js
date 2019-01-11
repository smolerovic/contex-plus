import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ROOT_ROUTE, KONTACT_RUTA, O_NAMA_RUTA, GALERIJA_RUTA, KURSEVI_RUTA } from '../../helper/routes';

class HelmetHeader extends Component {
  pageSubTitles = () => {
    const { pathname } = window.location;
    let pageSubTitle = '';
    switch (pathname) {
    case ROOT_ROUTE:
      return (pageSubTitle = '');
    case KONTACT_RUTA:
      return (pageSubTitle = 'Kontakt');
    case O_NAMA_RUTA:
      return (pageSubTitle = 'O nama');
    case GALERIJA_RUTA:
      return (pageSubTitle = 'Galerija');
    case KURSEVI_RUTA:
      return (pageSubTitle = 'Kursevi');
    default:
      return pageSubTitle;
    }
  }
  render () {
    const titlovi = this.pageSubTitles();
    let title = titlovi !== '' ? `Kontext Plus - ${titlovi}` : 'Kontext Plus';
    return (
      <Helmet>
        <title>{ title }</title>
      </Helmet>
    );
  }
}

export default HelmetHeader;
