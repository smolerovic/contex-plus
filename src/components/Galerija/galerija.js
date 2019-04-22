import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './galerija.scss';

import Slika1 from '../../images/galerija/p1.jpg';
import Slika2 from '../../images/galerija/p2.jpg';
import Slika3 from '../../images/galerija/p3.jpg';
import Slika4 from '../../images/galerija/p4.jpg';
import Slika5 from '../../images/galerija/p5.jpg';
import Slika6 from '../../images/galerija/p6.jpg';
import Slika7 from '../../images/galerija/p7.jpg';
import Slika8 from '../../images/galerija/p8.jpg';
import Slika9 from '../../images/galerija/p9.jpg';
import Slika10 from '../../images/galerija/p10.jpg';
import Slika11 from '../../images/galerija/p11.jpg';
import Slika12 from '../../images/galerija/p12.jpg';
import Slika13 from '../../images/galerija/p13.jpg';
import Slika14 from '../../images/galerija/p14.jpg';
import Slika15 from '../../images/galerija/p15.jpg';

const images = [
  Slika1,
  Slika2,
  Slika3,
  Slika4,
  Slika5,
  Slika6,
  Slika7,
  Slika8,
  Slika9,
  Slika10,
  Slika11,
  Slika12,
  Slika13,
  Slika14,
  Slika15
];

class Galerija extends Component {
  constructor (props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className='container pt-4 pb-4'>
        <div className='row'>
          {images.map((newLocal, index) => {
            return (
              <div className='col-md-4 pb-3' key={index}>
                <img className='pointer w-100' src={newLocal} onClick={() => this.setState({ isOpen: true, photoIndex: index })} alt={'Slika ' + index} />
              </div>
            );
          })}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </div>
      </div>
    );
  }
}
export default Galerija;
