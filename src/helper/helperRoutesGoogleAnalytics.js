import { KURSEVI_RUTA, GALERIJA_RUTA, O_NAMA_RUTA, KONTACT_RUTA } from './routes';

export default function routesForGoogleAnalytich () {
  const { pathname } = window.location;
  switch (pathname) {
  case KURSEVI_RUTA:
  case GALERIJA_RUTA:
  case O_NAMA_RUTA:
  case KONTACT_RUTA:
    return true;
  default:
    return false;
  }
}
