export const required = value => value ? undefined : 'Obavezno polje!';

export const pNumber = (value) => {
  if (value && isNaN(Number(value))) {
    if (!(isNaN(Number(value.substr(1, value.length)))) && value[0] === '+') {
      console.log('tacno');
      return undefined;
    } else {
      console.log('netacno');
      return 'Neispravan telefon. Telefon mora biti broj';
    }
  } else {
    return undefined;
  }
};

export const number = value => value && isNaN(Number(value)) ? 'Mora biti broj' : undefined;

export const email = value =>
  value && !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value))
    ? 'Neispravna email adresa' : undefined;
