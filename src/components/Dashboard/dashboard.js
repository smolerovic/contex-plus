import React, { Component } from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';
import { O_NAMA_RUTA } from '../../helper/routes';

import SectionTwoImage from '../../images/home_school_photo-min.jpg';
import SectionThree from '../../images/home_school_picoftheweek-min.png';
import Imageone from '../../images/teaching-min.png';
import Imagetwo from '../../images/creativity-min.png';
import Imagethree from '../../images/reaction-min.png';
class Dashboard extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <main className='container-fluid p-0'>
        <div className='container container-dash-custom'>
          <div className='row m-0'>
            <div className='col-md-12 p-0 mt-5 mb-5'>
              <div className='row'>
                <div className='col-md-4 mb-3'>
                  <div className='first-section'>
                    <h2>Sta nas razlikuje?</h2>
                    <p className='m-0'>Naša misija je da obezbedimo da svako dete bude mentalno, emocionalno, društveno i duhovno opremljeno za život.</p>
                    <ul className='mt-3'>
                      <li className='li-check'>Savremene metode podučavanja kao i moderni i živopisni materijali</li>
                      <li className='li-check'>Kvalitet i profesionalnost</li>
                      <li className='li-check'>Pristupacne cene i mnoge druge pogodnosti pri placanju</li>
                    </ul>
                    <Link to={O_NAMA_RUTA} className='btn position-relative'>VISE</Link>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='second-section'>
                    <h2>Nastava</h2>
                    <img className='w-100' src={SectionTwoImage} alt='Nastava u našoj školi' />
                    <p className='m-0 mt-3'>Pored razvoja svih jezičkih veština, koncept nastave na našim kursevima pospešuje i razvoj drugih kognitivnih sposobnosti. Sva nastava je interaktivna, što
                    znači da podstiče ne samo na usvajanje novih znanja lako i zanimljivo, već i
                    rešavanje zadataka u grupi i razvijanje socijalne inteligencije kod dece.</p>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='thirt-section'>
                    <h2>Slika dana</h2>
                    <img src={SectionThree} className='w-100 h-100 mt-4 mb-4 pr-3 pl-3' alt='Naša slika dana' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-4 pr-3' style={{ color: 'black' }}>
            <div className='col-12 pr-xs-0 text-center mb-5 font-family-fensy' style={{ fontSize: '33px', fontWeight: 'bold' }}>
              Nasa skole je <b className='pl-2 pr-2 pr-xs-0 pl-xs-0' style={{ background: '#ff7713', color: 'white', whiteSpace: 'nowrap' }}>najbolji izbor</b> za Vas
            </div>
            <div className='col-12 pl-0 mb-5'>
              <div className='row'>
                <div className='col-md-4 border-right-custom'>
                  <div className='row mb-4'>
                    <div className='col-5 text-center'>
                      <img src={Imageone} alt='Časovi' style={{ width: '75%' }} />
                    </div>
                    <div className='col pl-0'>
                      <h4 style={{ fontWeight: 'bold' }}>Časovi</h4>
                      <div className='font-size-15'>
                        Tradicionalni pristup nastavi nikada nije bio naš način rada. Usvajanje novog znanja ćete najmanje svesno primetiti na našim kursevima. Videćete samo da se dobro zabavljate!
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 border-right-custom'>
                  <div className='row mb-4'>
                    <div className='col-5'>
                      <img src={Imagetwo} alt='Kreativnost' className='w-100' />
                    </div>
                    <div className='col pl-0'>
                      <h4 style={{ fontWeight: 'bold' }}>Kreativnost</h4>
                      <div className='font-size-15'>
                        Zašto uraditi nešto na prost način, kada možemo kreativno. Zavirite u naše učionice, vidite šarenilo svugde, i panoe koje krase prava umetnička dela malih velikih ljudi, poslušajte neki čas ili zavirite u našu galeriju i naboj kreativnosti će vas odmah obuzeti!
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-5'>
                      <img src={Imagethree} alt='Rekreacija' className='w-100' />
                    </div>
                    <div className='col pl-0'>
                      <h4 style={{ fontWeight: 'bold' }}>Rekreacija</h4>
                      <div className='font-size-15'>
                        Deca su kinestetička bića, ona i uče o svetu oko sebe krećući se kroz njega. Naši đaci nisu prikovani za stolice, pogleda uprtih u jednu tačku, oni su svugde, a najčešće u igrama koje imaju za cilj da ih motivišu da novo znanje primene na njima svojstven način.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Dashboard;
