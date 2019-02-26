import React, { Component } from 'react';
import { connect } from 'react-redux';
import './loader.scss';

class Loader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      faded: false
    };
  }

  render () {
    const { faded } = this.state;
    const { requestProcessing, hide } = this.props;
    let loading = false;
    if (requestProcessing) {
      loading = true;
    }
    if (hide || !loading) {
      return <div />;
    }
    return (
      <div className={`loader-background ${faded ? 'fade-in-opacity' : ''}`}>
        <div className='loader-frame'>
          <p className='loading-message'>Učitava se, molimo sačekajte</p>
          <div className='loader' />
          <div>
            <div className='lds-css-first'>
              <div className='lds-default'>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    requestProcessing: state.loadingReducer.requestProcessing
  };
}

export default connect(mapStateToProps, null)(Loader);
