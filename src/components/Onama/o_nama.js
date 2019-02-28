import React, { Component } from 'react';
import CountTo from 'react-count-to';
import './o_nama.scss';

import Crtica from '../../images/slash-min.png';
import Breaker from '../../images/breaker-min.png';

class Onama extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='row text-center'>
              <div className='col-md-3'>
                <CountTo className='count-style' to={210} speed={1234} />
                <div className='font-family-fensy ff-size'>Projekti</div>
                <div className='crca' />
                <p>Some text</p>
              </div>
              <div className='col-md-3'>
                <CountTo className='count-style' to={2000} speed={1200} />
                <div className='font-family-fensy ff-size'>Zadovoljne musterije</div>
                <div className='crca' />
                <p>Some text</p>
              </div>
              <div className='col-md-3'>
                <CountTo className='count-style' to={50} speed={1300} />
                <div className='font-family-fensy ff-size'>Kursevi</div>
                <div className='crca' />
                <p>Some text</p>
              </div>
              <div className='col-md-3'>
                <CountTo className='count-style' to={10000} speed={2000} />
                <div className='font-family-fensy ff-size'>Ucenika</div>
                <div className='crca' />
                <p>Some text</p>
              </div>
            </div>
          </div>
          <div className='col-12 mt-4'>
            <h5 className='o-nama-h5'>Škola jezika Kontext plus nastala je kao deo Centra za strane jezike Kontext koji je počeo sa radom septembra 1991. godine sa željom da kreira okruženje koje će omogućiti bavljenje jezikom, bilo da se radi o učenju, podučavanju, prevođenju ili umetničkom izražavanju, i da postane deo svakodnevne kulture i zadovolji komunikative i delatne potrebe svojih polaznika i saradnika.</h5>
          </div>
          <div className='col-12 mb-4 text-center three-dots'>. . .</div>
          <div className='col-md-6 d-flex'>
            <div style={{ paddingTop: '6px', marginRight: '1rem' }}>
              <img src={Crtica} alt='crtica' />
            </div>
            <p className='o-nama-p'>Uspešno se bavimo podučavanjem stranih jezika i propremom za polaganje internacionalnih ispita.</p>
          </div>
          <div className='col-md-6 d-flex'>
            <div style={{ paddingTop: '6px', marginRight: '1rem' }}>
              <img src={Crtica} alt='crtica' />
            </div>
            <p className='o-nama-p'>Od septembra ove godine, naša škola je predvođena mladim timom entuzijasta i zaljubljenika u jezike.</p>
          </div>
          <div className='col-md-6 d-flex'>
            <div style={{ paddingTop: '6px', marginRight: '1rem' }}>
              <img src={Crtica} alt='crtica' />
            </div>
            <p className='o-nama-p'>Kursevi su prilagođeni različitim uzrastima, a metode u nastavi u skladu sa savremenim načinom podučavanja. Naši polaznici dolaze na časove sa osmesima na licu, jer se raduju svakom novom okupljanju sa ostatkom grupe kao i predavačima.</p>
          </div>
          <div className='col-md-6 d-flex'>
            <div style={{ paddingTop: '6px', marginRight: '1rem' }}>
              <img src={Crtica} alt='crtica' />
            </div>
            <p className='o-nama-p'>Garantujemo Vam dobre rezultate i uživamo u obostranom zadovoljstvu kada Vam poznavanje jezika otvori neka nova vrata.</p>
          </div>
          <div className='col-md-6 d-flex'>
            <div style={{ paddingTop: '6px', marginRight: '1rem' }}>
              <img src={Crtica} alt='crtica' />
            </div>
            <p className='o-nama-p'>Učenje se obavlja u grupama malog broja polaznika, što ostavlja prostora za svakoga da se individualno izrazi i usavrši.</p>
          </div>
          <div className='col-md-6 d-flex'>
            <div style={{ paddingTop: '6px', marginRight: '1rem' }}>
              <img src={Crtica} alt='crtica' />
            </div>
            <p className='o-nama-p'>
              Nakon svakog uspešno završenog kursa, polaznici dobijaju sertifikat priznat bilo gde u zemlji.
            </p>
          </div>
          <div className='col-12 text-center'>
            <img src={Breaker} alt='breaker' style={{ height: '20px' }} />
          </div>
          <div className='col-md-12 mt-5'>
            <h5 className='o-nama-h5'>
              Radi još bolje pristupačnosti svima zainteresovanima, sada se nalazimo na novoj lokaciji - Vučka Milićevića 7a, u zgradi odmah pored marketa Idea.
              Sve informacije od željenom kursu možete dobiti na brojevima telefona: <a className='a-color-hover' href='tel:0654793883'>065/47-93-883</a>,
              i <a className='a-color-hover' href='tel:063480277'>063/48-02-77</a>.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Onama;
