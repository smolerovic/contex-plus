import React, { Component } from 'react';
import './dashboard.scss';
import SectionTwoImage from '../../images/home_school_photo.jpg';
import SectionThree from '../../images/home_school_picoftheweek.png';
import Imageone from '../../images/teaching.png';
import Imagetwo from '../../images/creativity.png';
import Imagethree from '../../images/reaction.png';

class Dashboard extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <main className='container-fluid p-0'>
        <div className='container'>
          <div className='row m-0'>
            <div className='col-md-12 p-0 mt-5 mb-5'>
              <div className='row'>
                <div className='col-md-4 mb-3'>
                  <div className='first-section'>
                    <h2>What distinguishes us?</h2>
                    <p className='m-0'>Our mission is to ensure that every child is equipped mentally, emotionally, socially and spiritually for life. We provide a quality pre-school education and has been operating for the past 25 years.</p>
                    <ul className='mt-3'>
                      <li className='li-check'>Neki text jedan</li>
                      <li className='li-check'>Neki text dva</li>
                      <li className='li-check'>Neki text tri</li>
                    </ul>
                    <button className='btn position-relative'>VISE</button>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='second-section'>
                    <h2>Our beliefs</h2>
                    <img width='100%' src={SectionTwoImage} alt='section-tow' />
                    <p className='m-0 mt-3'>We believe that salvation is only possible in this life when a person is able to make a volitional and intelligent decision to receive Christ as Saviour. We believe that there is no second chance after death.</p>
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
          <div className='row mt-4 mb-5' style={{ color: 'black' }}>
            <div className='col-12 text-center mb-5 font-family-fensy' style={{ fontSize: '33px', fontWeight: 'bold' }}>
              Our school is the <b className='pl-2 pr-2' style={{ background: '#ff7713', color: 'white' }}>best choice</b> for your kid
            </div>
            <div className='col-md-4 border-right-custom'>
              <div className='row'>
                <div className='col-4 pl-0'>
                  <img src={Imageone} alt='image1' style={{ width: '100%' }} />
                </div>
                <div className='col'>
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
