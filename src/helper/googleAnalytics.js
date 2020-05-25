import ReactGA from 'react-ga';
import routesForGoogleAnalytich from './helperRoutesGoogleAnalytics';
import { GOOGLE_ANALYTICS_KEY } from '../actions/types';
const enableAnalytics = true;

export function pageView (url) {
  if (!enableAnalytics) {
    return null;
  }
  try {
    const ga = window.ga;
    const gtag = window.gtag;
    ga('create', GOOGLE_ANALYTICS_KEY, 'auto');
    ga('set', 'location', window.location.href);
    ga('set', 'page', url);
    ga('send', 'pageview');
    // console.log('Google Analytics: Sending pageview', window.location.pathname);
    if (routesForGoogleAnalytich(window.location.pathname, true)) {
      gtag('config', GOOGLE_ANALYTICS_KEY, { page_path: url });
      // console.log('Google Analytics: gtag event: ', window.location.pathname);
    }
    ReactGA.initialize(GOOGLE_ANALYTICS_KEY);
    ReactGA.pageview(window.location.pathname + window.location.search);
  } catch (e) {
    console.error(e);
  }
}
