import React, { Component } from 'react';
import GoogleMap from '../../images/google-map.png';
import { Field, reduxForm } from 'redux-form';
import * as validations from '../../helper/validation';
import './kontakt.scss';

const renderField = ({ input, id, label, tret, type, meta: { touched, error, warning, active, valid, visited } }) => (
  <fieldset className={'form-group position-relative p-0 ' + (touched && error ? 'has-danger ' : (touched && warning ? 'has-warning ' : (touched ? '' : '')))}>
    <input {...input} id={id} type={type} placeholder={label}
      className={'floating-input form-control ' + (touched && error ? ' form-control-danger '
        : (touched && warning ? ' form-control-warning '
          : (touched ? '' : '')))} />
    <div className='form-control-feedback'>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
  </fieldset>
);

class Kontakt extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  handleFormSubmit = (formProps) => {
    // this.props.fetchEmailDataKontakt(formProps);
    console.log('!!!!!!!!!', formProps);
  }

  render () {
    const { handleSubmit, fields: { email, name, naslov, poruka }, successMessage, errorMessage } = this.props;
    return (
      <main className='container-fluid'>
        <div className='container p-0'>
          <div className='row mt-5 mb-5'>
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
                    <a className='a-color-hover mr-2' style={{ fontSize: '16px' }} href='tel:0654793883'>065/47-93-883</a>
                  </div>
                  <div className='d-flex align-items-center mb-1'>
                    <i className='fa-kontakt fa fa-phone mr-2' />
                    <a className='a-color-hover' href='tel:063480277'>063/48-02-77</a>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='fa-kontakt fa fa-envelope mr-2' />
                    <a className='a-color-hover' style={{ fontSize: '16px' }} href='mailto:kontext.grocka@gmail.com'>kontext.grocka@gmail.com</a>
                  </div>
                </div>
                <div className='col-12 radno-vreme mt-5'>
                  Radno vreme<br />
                  Ponedeljak - Petak: 15h - 20h
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <h1 className='mb-5'>Online kontakt</h1>
              <form onSubmit={handleSubmit(this.handleFormSubmit)} className='row'>
                <div className='col-sm-6 form-group'>
                  <Field name='name'
                    label='Vaše Ime'
                    {...name}
                    type='text'
                    component={renderField}
                    className='form-control' />
                </div>
                <div className='col-sm-6 form-group'>
                  <Field name='email'
                    label='Vaš Email'
                    {...email}
                    component={renderField}
                    className='form-control' />
                </div>
                <div className='col-sm-12 form-group'>
                  <Field name='naslov'
                    label='Naslov'
                    {...naslov}
                    component={renderField}
                    className='form-control' />
                </div>
                <div className='col-sm-12 form-group'>
                  <Field name='poruka'
                    label='Vasa poruka'
                    {...poruka}
                    component={renderField}
                    className='form-control' />
                </div>
                <div className='col-sm-12 form-group'>
                  <button className='btn w-100 position-relative' type='submit'>Pošalji</button>
                </div>
                {successMessage
                  ? <div className='col-sm-12' id='kontakt'>
                    <div className='alert alert-success mt-5'>
                      {successMessage}
                    </div>
                  </div>
                  : ''
                }
                {errorMessage
                  ? <div className='col-sm-12' id='kontakt'>
                    <div className='alert alert-danger mt-5'>
                      {errorMessage}
                    </div>
                  </div> : ''}
                <small className='col-12'>* Obavezna polja</small>
              </form>
            </div>
          </div>
        </div>
        <div className='row'>
          <img className='mt-3 mb-4 w-100 h-100' src={GoogleMap} alt='mapa' />
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
  if (!formProps.name) {
    errors.name = 'Ime je obavezno polje!';
  }
  return errors;
}

const KontaktForma = reduxForm({
  form: 'KontaktForma',
  fields: ['email', 'naslov', 'name', 'poruka'],
  validate: validate
})(Kontakt);

export default KontaktForma;
