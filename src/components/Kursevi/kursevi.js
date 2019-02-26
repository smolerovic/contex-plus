import React, { Component } from 'react';
import Kurs1 from '../../images/kurs1.jpg';
import Kurs2 from '../../images/kurs2.jpg';
import Kurs3 from '../../images/kurs3.jpg';

const podaci = [
  { index: 1, src: Kurs1, h1: 'Kursevi engleskog', text: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.' },
  { index: 2, src: Kurs2, h1: 'Kursevi nemačkog', text: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.' },
  { index: 3, src: Kurs3, h1: 'Individualni kursevi', text: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.' }
];
class Kursevi extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  kursevi = (pod) => {
    return (
      <div className='col-md-12 p-0' key={pod.index}>
        <div className='row m-0 mt-4 mb-4'>
          <div className='col-md-6 pl-0 pr-xs-0'>
            <img src={pod.src} alt='kursevi 1' className='w-100' />
          </div>
          <div className='col-md-6 pl-sm-3 pl-0'>
            <h1 className='mb-3'>{pod.h1}</h1>
            <p style={{ color: 'grey', lineHeight: '26px' }}>{pod.text}</p>
            <ul className='mt-3'>
              <li className='li-check'>Text 1</li>
              <li className='li-check'>Text 2</li>
            </ul>
            <button className='btn position-relative'>Neki text a i ne mora</button>
          </div>
        </div>
      </div>
    );
  }
  render () {
    return (
      <div className='container'>
        <div className='row m-0 mt-4 mb-4'>
          <h1 className='col-12 text-center mt-4 mb-5'>UPIS JE U TOKU!</h1>
          {podaci.map((pod) => {
            return this.kursevi(pod);
          })}
        Upis je u toku!
        - kursevi nemačkog
        - kursevi engleskog
        - konverzacijski kursevi
        - pripremni časovi za osnovnui i srednju školu
        - rad u malim grupama
        - intezivni kursevi svih nivoa
        - obuka za međunarodne ispite
        </div>
      </div>
    );
  }
}
export default Kursevi;
