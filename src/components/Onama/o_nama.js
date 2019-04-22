import React, { Component } from 'react';
import CountTo from 'react-count-to';
import './o_nama.scss';
import $ from 'jquery';

import Crtica from '../../images/slash-min.png';
import Breaker from '../../images/breaker-min.png';

const podaciONama = [
  { index: 1, p: 'Uspešno se bavimo podučavanjem stranih jezika i propremom za polaganje internacionalnih ispita.' },
  { index: 2, p: 'Od septembra ove godine, naša škola je predvođena mladim timom entuzijasta i zaljubljenika u jezike.' },
  { index: 3, p: 'Kursevi su prilagođeni različitim uzrastima, a metode u nastavi u skladu sa savremenim načinom podučavanja. Naši polaznici dolaze na časove sa osmesima na licu, jer se raduju svakom novom okupljanju sa ostatkom grupe kao i predavačima.' },
  { index: 4, p: 'Garantujemo Vam dobre rezultate i uživamo u obostranom zadovoljstvu kada Vam poznavanje jezika otvori neka nova vrata.' },
  { index: 5, p: 'Učenje se obavlja u grupama malog broja polaznika, što ostavlja prostora za svakoga da se individualno izrazi i usavrši.' },
  { index: 6, p: ' Nakon svakog uspešno završenog kursa, polaznici dobijaju sertifikat priznat bilo gde u zemlji.' }

];

class Onama extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  oNama = (pod) => {
    return (
      <div className='col-md-6 d-flex' key={pod.index}>
        <div style={{ paddingTop: '6px', marginRight: '1rem' }}>
          <img src={Crtica} alt='Crtica' />
        </div>
        <p className='o-nama-p'>{pod.p}</p>
      </div>
    );
  }
  render () {
    function isInView (el) {
      var rect = el.getBoundingClientRect();
      return !(rect.top > $(window).height() || rect.bottom < 0);
    }

    $(document).on('scroll', function () {
      $('video').each(function () {
        if (isInView($(this)[0])) {
          if ($(this)[0].paused) $(this)[0].play();
        } else {
          if (!$(this)[0].paused) $(this)[0].pause();
        }
      });
    });
    return (
      <div className='container mt-5 mb-4'>
        <div className='row'>
          <div className='col-12'>
            <div className='row text-center'>
              <div className='col-md-3'>
                <CountTo className='count-style' to={10} speed={1234} />
                <div className='font-family-fensy ff-size'>Projekata</div>
                <div className='crca' />
                { /*  <p>Some text</p> */ }
              </div>
              <div className='col-md-3'>
                <CountTo className='count-style' to={300} speed={1200} />
                <div className='font-family-fensy ff-size'>Polaznika</div>
                <div className='crca' />
                { /* <p>Some text</p> */ }
              </div>
              <div className='col-md-3'>
                <CountTo className='count-style' to={50} speed={1300} />
                <div className='font-family-fensy ff-size'>Kurseva</div>
                <div className='crca' />
                { /*   <p>Some text</p> */ }
              </div>
              <div className='col-md-3'>
                <CountTo className='count-style' to={150} speed={2000} />
                <div className='font-family-fensy ff-size'>Ucenika</div>
                <div className='crca' />
                { /*  <p>Some text</p> */ }
              </div>
            </div>
          </div>
          <div className='col-12 mt-4'>
            <h5 className='o-nama-h5'>Škola jezika Kontext plus nastala je kao deo Centra za strane jezike Kontext koji je počeo sa radom septembra 1991. godine sa željom da kreira okruženje koje će omogućiti bavljenje jezikom, bilo da se radi o učenju, podučavanju, prevođenju ili umetničkom izražavanju, i da postane deo svakodnevne kulture i zadovolji komunikative i delatne potrebe svojih polaznika i saradnika.</h5>
          </div>
          <div className='col-12 mb-4 text-center three-dots'>. . .</div>
          {podaciONama.map((pod) => {
            return this.oNama(pod);
          })}
          <div className='col-12 text-center'>
            <img src={Breaker} alt='Linija razdvajanja' style={{ height: '20px' }} />
          </div>
          <div className='col-md-12 mt-5'>
            <h5 className='o-nama-h5'>
              Radi još bolje pristupačnosti svima zainteresovanima, sada se nalazimo na novoj lokaciji - Vučka Milićevića 7a, u zgradi odmah pored marketa Idea.
              Sve informacije od željenom kursu možete dobiti na brojevima telefona: <a className='a-color-hover' href='tel:+381654793883'>065/47-93-883</a>,
              i <a className='a-color-hover' href='tel:+38163480277'>063/48-02-77</a>.
            </h5>
          </div>
          <video className='mt-5 pl-3 pr-3 pl-xs-0 pr-xs-0' loop='' width='100%' height='100%'>
            <source src='https://dl.dropboxusercontent.com/s/9u5hbu1ny00ot5t/KIZOA-Movie-Maker-9i9ptzgm.mp4?dl=0' />
          </video>
        </div>
      </div>
    );
  }
}
export default Onama;
