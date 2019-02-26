import React, { Component } from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';
import SectionTwoImage from '../../images/home_school_photo.jpg';
import SectionThree from '../../images/home_school_picoftheweek.png';
import Imageone from '../../images/teaching.png';
import Imagetwo from '../../images/creativity.png';
import Imagethree from '../../images/reaction.png';
import { O_NAMA_RUTA } from '../../helper/routes';

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
                    <img width='100%' src={SectionTwoImage} alt='section-tow' />
                    <p className='m-0 mt-3'>Pored razvoja svih jezičkih sposobnosti, kursevi ovog tipa su korisni za mlađe
                    uzraste i u razvoju drugih kognitivnih sposobnosti. Sva nastava je interaktivna, što
                    znači da podstiče ne samo na usvajanje novih znanja lako i zanimljivo, već i
                    rešavanje zadataka u grupi i razvijanje socijalne inteligencije kod dece.</p>
                    <button className='btn mt-3 position-relative'>VISE</button>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='thirt-section'>
                    <h2>Picture of the week</h2>
                    <img src={SectionThree} className='w-100 h-100 mt-4 mb-4 pr-3 pl-3' alt='section-three' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-4 mb-5 pr-3' style={{ color: 'black' }}>
            <div className='col-12 pr-xs-0 text-center mb-5 font-family-fensy' style={{ fontSize: '33px', fontWeight: 'bold' }}>
              Nasa skole je <b className='pl-2 pr-2 pr-xs-0 pl-xs-0' style={{ background: '#ff7713', color: 'white' }}>najbolji izbor</b> za Vas
            </div>
            <div className='col-md-4 border-right-custom'>
              <div className='row mb-3'>
                <div className='col-5 text-center'>
                  <img src={Imageone} alt='image1' style={{ width: '75%' }} />
                </div>
                <div className='col pl-0'>
                  <h4 style={{ fontWeight: 'bold' }}>Teaching</h4>
                  <div className='font-size-15'>
                    Vitae adipiscing turpis. Aenean ligula nibh in, molestie id viverra a, dapibus at dolor.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 border-right-custom'>
              <div className='row'>
                <div className='col-5'>
                  <img src={Imagetwo} alt='image2' style={{ width: '100%' }} />
                </div>
                <div className='col pl-0'>
                  <h4 style={{ fontWeight: 'bold' }}>Creativity</h4>
                  <div className='font-size-15'>
                    Vitae adipiscing turpis. Aenean ligula nibh in, molestie id viverra a, dapibus at dolor.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-5'>
                  <img src={Imagethree} alt='image3' style={{ width: '100%' }} />
                </div>
                <div className='col p-0'>
                  <h4 style={{ fontWeight: 'bold' }}>Recreation</h4>
                  <div className='font-size-15'>
                    Vitae adipiscing turpis. Aenean ligula nibh in, molestie id viverra a, dapibus at dolor.
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
