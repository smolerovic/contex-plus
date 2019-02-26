import axios from 'axios';
import { SUCCESS_MESSAGE, ERROR_MESSAGE, REQUEST_SENT, RESPONSE_RECEIVED, SUCCESS_MESSAGE_DURATION } from '../types';

// const ROOT_URL = 'http://localhost:3131/send';

// https://node-send-email.herokuapp.com/send

export function sendEmailKontant (formProps) {
  return function (dispatch) {
    dispatch({ type: REQUEST_SENT });
    axios.post('http://localhost:3131/send',
      convertToJSON(formProps),
      null
    )
      .then(function (response) {
        console.log('Radi', response);
        dispatch({ type: SUCCESS_MESSAGE, payload: 'Vaša poruka je uspešno poslata!' });
        dispatch({ type: RESPONSE_RECEIVED });
      })
      .catch(function (error) {
        console.error('Ne radi kontakt forma!', error);
        dispatch({ type: ERROR_MESSAGE, payload: 'Došlo je do greške! Poruka se nije poslata, molimo pokušajte ponovo!' });
        dispatch({ type: RESPONSE_RECEIVED });
      });
  };
}

export function removeSuccessMessage () {
  return function (dispatch) {
    setTimeout(() => dispatch({ type: SUCCESS_MESSAGE }), SUCCESS_MESSAGE_DURATION);
    setTimeout(() => dispatch({ type: ERROR_MESSAGE }), SUCCESS_MESSAGE_DURATION);
  };
}

function convertToJSON ({ ime, email, naslov, poruka }) {
  let req = {};
  req.ime = ime;
  req.email = email;
  req.naslov = naslov;
  req.poruka = poruka;

  return req;
}
