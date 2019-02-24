import React, { Component } from 'react';

class Kursevi extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <div className='container'>
        <div className='row'>
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
