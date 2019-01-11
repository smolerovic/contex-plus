import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './galerija.scss';

import Slika1 from '../../images/galerija/falls2.jpg';
import Slika2 from '../../images/galerija/mountainskies.jpg';
import Slika3 from '../../images/galerija/ocean.jpg';
import Slika4 from '../../images/galerija/paris.jpg';
import Slika5 from '../../images/galerija/rocks.jpg';
import Slika6 from '../../images/galerija/underwater.jpg';
import Slika7 from '../../images/galerija/wedding.jpg';

const images = [
  Slika1,
  Slika2,
  Slika3,
  Slika4,
  Slika5,
  Slika6,
  Slika7
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
                <img className='pointer w-100' src={newLocal} onClick={() => this.setState({ isOpen: true, photoIndex: index })} alt='slike-galerija' />
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
