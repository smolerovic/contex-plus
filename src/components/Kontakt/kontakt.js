import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import * as validations from '../../helper/validation';
import * as actions from '../../actions/sendEmail';

import Loader from '../Loader/loader';

import './kontakt.scss';

const renderField = ({ input, id, label, type, meta: { touched, error, warning } }) => (
  <fieldset className={'mb-2 position-relative p-0 ' + (touched && error ? 'has-danger ' : (touched && warning ? 'has-warning ' : (touched ? '' : '')))}>
    <input
      {...input} id={id} type={type} placeholder={label}
      className={'floating-input form-control ' + (touched && error ? ' form-control-danger '
        : (touched && warning ? ' form-control-warning '
          : (touched ? '' : '')))}
    />
    <div className='form-control-feedback'>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
  </fieldset>
);

const renderFieldTextArea = ({ input, id, label, type, meta: { touched, error, warning } }) => (
  <fieldset className={'mb-2 position-relative p-0 ' + (touched && error ? 'has-danger ' : (touched && warning ? 'has-warning ' : (touched ? '' : '')))}>
    <textarea
      {...input} id={id} type={type} placeholder={label}
      className={'floating-input form-control ' + (touched && error ? ' form-control-danger '
        : (touched && warning ? ' form-control-warning '
          : (touched ? '' : '')))}
    />
    <div className='form-control-feedback'>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
  </fieldset>
);
class Kontakt extends Component {
  constructor (props) {
    super(props);
    this.state = {
      scrolledToTop: false
    };
  }

  handleFormSubmit = (formProps) => {
    this.props.sendEmailKontant(formProps);
    if (this.state.scrolledToTop) {
      this.setState({ scrolledToTop: false });
    }
    // console.log('!!!!!!!!!', formProps);
    this.props.dispatch(reset('KontaktForma'));
  }

  render () {
    const { scrolledToTop } = this.state;
    const { handleSubmit, fields: { ime, email, naslov, poruka }, successMessage, errorMessage } = this.props;

    if (errorMessage || successMessage) {
      if (!scrolledToTop) {
        try {
          setTimeout(() => {
            const element = document.getElementById('kontakt');
            element.scrollIntoView({ block: 'start', behavior: 'smooth' });
          }, 500);
          this.setState({ scrolledToTop: true });
        } catch (error) {
          console.warn('Error scrolling top', error);
        }
      }
      this.props.removeSuccessMessage();
    }
    return (
      <main className='container-fluid pl-xs-0 pr-xs-0'>
        <Loader />
        <div className='container p-0'>
          <div className='row mt-5 mb-5 m-0'>
            <div className='col-md-6'>
              <h1 className='mb-5'>Kontaktirajte nas</h1>
              <div className='row'>
                <div className='col-12 mb-4 adresa'>
                  Vučka Milićevića 7a<br />
                  11306 Grocka<br />
                  Srbija
                </div>
                <div className='col-12 mt-2'>
                  <div className='d-flex align-items-center mb-1'>
                    <i className='fa-kontakt fa fa-phone mr-2' />
                    <a className='a-color-hover mr-2' style={{ fontSize: '16px' }} href='tel:+381654793883'>065/47-93-883</a>
                  </div>
                  <div className='d-flex align-items-center mb-1'>
                    <i className='fa-kontakt fa fa-phone mr-2' />
                    <a className='a-color-hover' href='tel:+38163480277'>063/48-02-77</a>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='fa-kontakt fa fa-envelope mr-2' />
                    <a className='a-color-hover' style={{ fontSize: '16px' }} href='mailto:kontext.grocka@gmail.com'>kontext.grocka@gmail.com</a>
                  </div>
                </div>
                <div className='col-12 radno-vreme mt-5'>
                  Radno vreme<br />
                  Ponedeljak - Petak: 15h - 20h<br />
                  Subota: 09h - 17h<br />
                </div>
              </div>
            </div>
            <div className='col-md-6 mt-5 mt-md-0'>
              <h1 className='mb-5'>Online kontakt</h1>
              <form onSubmit={handleSubmit(this.handleFormSubmit)} className='row'>
                <div className='col-lg-6 col-md-12 col-sm-6 mb-2'>
                  <Field
                    name='ime'
                    label='Vaše Ime *'
                    {...ime}
                    type='text'
                    component={renderField}
                    className='form-control'
                  />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-6 mb-2'>
                  <Field
                    name='email'
                    label='Vaš Email *'
                    {...email}
                    component={renderField}
                    className='form-control'
                  />
                </div>
                <div className='col-sm-12 mb-2'>
                  <Field
                    name='naslov'
                    label='Naslov'
                    {...naslov}
                    component={renderField}
                    className='form-control'
                  />
                </div>
                <div className='col-sm-12 mb-2'>
                  <Field
                    name='poruka'
                    label='Vasa poruka'
                    {...poruka}
                    component={renderFieldTextArea}
                    className='form-control'
                  />
                </div>
                <div className='col-sm-12 mb-2'>
                  <button className='btn w-100 position-relative h-white' type='submit' id='kontakt'>Pošalji</button>
                </div>
                <small className='col-12'>* Obavezna polja</small>
                {successMessage &&
                  <div className='col-sm-12'>
                    <div className='alert alert-success mt-5'>
                      {successMessage}
                    </div>
                  </div>}
                {errorMessage &&
                  <div className='col-sm-12'>
                    <div className='alert alert-danger mt-5'>
                      {errorMessage}
                    </div>
                  </div>}
              </form>
            </div>
          </div>
        </div>
        <div className='row margin-respo'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2501.185399721031!2d20.71660254087211!3d44.670425905507194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0796c21c3969a5d!2sKontext+Plus%2C+%C5%A1kola+stranih+jezika!5e0!3m2!1sen!2srs!4v1551090863968' width='100%' height='450' title='kako do nas' frameBorder='0' allowFullScreen />
        </div>
      </main>
    );
  }
}

function validate (formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Email je obavezno polje!';
  } else if (validations.email(formProps.email)) {
    errors.email = 'Email nije validan';
  }
  if (!formProps.ime) {
    errors.ime = 'Ime je obavezno polje!';
  }
  return errors;
}

function mapStateToProps (state) {
  return {
    successMessage: state.successReducer.successMessage,
    errorMessage: state.errorReducer.errorMessage,
    KontaktForma: state.form.KontaktForma
  };
}

const KontaktForma = reduxForm({
  form: 'KontaktForma',
  fields: ['ime', 'email', 'naslov', 'poruka'],
  validate: validate
})(Kontakt);

export default connect(mapStateToProps, actions)(KontaktForma);
