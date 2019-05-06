import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ROOT_ROUTE, KONTACT_RUTA, O_NAMA_RUTA, GALERIJA_RUTA, KURSEVI_RUTA } from '../../helper/routes';

class HelmetHeader extends Component {
  pageSubTitles = () => {
    const { pathname } = window.location;
    let subtitlePage;
    let description = 'Sertifikovani kursevi jezika u samom centru Grocke za sve nivoe i uzraste. Pripremni časovi za školsko gradivo i međunarodne ispite. Kontakt: 065/47-93-883.';
    switch (pathname) {
    case ROOT_ROUTE:
      subtitlePage = 'Škola stranih jezika';
      return { subtitlePage, description };
    case KONTACT_RUTA:
      subtitlePage = 'Kontakt';
      description = 'Tu smo za Vas. Na adresi, Vučka Milićevića 7a, Grocka, naći ćete nas radnim danima posle 15h. Ali, za sva Vaša pitanja tu je kontakt telefon 065/47-93-883.';
      return { subtitlePage, description };
    case O_NAMA_RUTA:
      subtitlePage = 'O nama';
      description = 'Naša škola jezika nastala je iz želje da poboljšamo kvalitet obrazovanja, i poznavanje određenih stranih jezika naših polaznika uz najnovije metode i savremene programe.';
      return { subtitlePage, description };
    case GALERIJA_RUTA:
      subtitlePage = 'Galerija';
      description = '“Slika govori više od hiljadu reči”, kaže mudra izreka. A mi Vam predlažemo da zavirite u našu galeriju i vidite kako mi to vodimo naše kurseve.';
      return { subtitlePage, description };
    case KURSEVI_RUTA:
      subtitlePage = 'Kursevi';
      description = 'U svojoj ponudi imamo kurseve svih nivoa, prilagođene svim uzrastima, vodećih svetskih jezika: engleskog, nemačkog, italijanskog, francuskog i ruskog.';
      return { subtitlePage, description };
    default:
      return [{ subtitlePage, description }];
    }
  }

  render () {
    const { pageTitle, description } = this.props;
    const titlovi = this.pageSubTitles();
    let title = titlovi.subtitlePage || pageTitle !== '' ? `Kontext Plus - ${titlovi.subtitlePage || pageTitle}` : 'Kontext Plus - Škola stranih jezika';
    return (
      <Helmet>
        <meta name='tags' content='engleski, nemački, italijanski, kursevi jezika, Grocka, Umčari, Brestovik, Vrčin, Boleč, Leštane, Vinča, Kaluđerica, pripremni časovi za osnovnu školu, časovi engleskog za srednju školu, časovi nemačkog za srednju školu, časovi engleskog za osnovnu i srednju školu, kurs engleskog za vrtić, engleski za najmlađe, kursevi jezika za decu, kursevi jezika za odrasle, Kembridž ispiti, međunarodni sertifikati, CEA, FCE, KET, PET, Movers, Flyers, Starters, Goethe, nemački za početnike, konverzacijski kursevi, individualni kursevi jezika, testirajte svoje znanje jezika, sertifikovani testovi, sertifikovani kursevi, engleski A1, engleski A2 engleski B1, engleski B2, engleski C1, nemački A1, nemački A2, nemački B1, nemački B2, škola stranih jezika Grocka, prevod nemački, prevod engleski, prevodilac engleskog, prevodilac nemačkog, prevodilac italijanskog' />
        <meta name='keywords' content='Kontext plus, Škola stranih jezika Grocka, privatni časovi engleskog, privatni časovi nemačkog, kurs italijanskog, pripremni kursevi za međunaredne ispite, Priprema za Goethe, nemački za početnike, engleski za decu Grocka, Kontext Grocka, Kontext Plus Grocka, engleski za decu Vrčin, engleski za decu Umčari, engleski za decu Vinča, kako brzo savladati engleski, kada je najbolje za dete da uči drugi jezik, engleska gramatika, rad u inostranstvu, kako dobiti sertifikat o znanju jezika, Gročanska čaršija, jeftini kursevi jezika, popraviti govorni engleski, konverzacija na nemačkom, nemački jezik početni nivo Grocka' />
        <meta name='description' content={titlovi.description || description} />
        <meta property='og:url' content='http://kontextplus.rs' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={titlovi.description || description} />
        <title>{ title }</title>
      </Helmet>
    );
  }
}

export default HelmetHeader;
