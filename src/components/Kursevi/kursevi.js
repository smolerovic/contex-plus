import React, { Component } from 'react';

import Kurs1 from '../../images/kurs1-min.jpg';
import Kurs2 from '../../images/kurs2-min.jpg';
import Kurs3 from '../../images/kurs3-min.jpg';

const podaci = [
  { index: 1, src: Kurs1, h1: 'Kursevi engleskog', text: 'Usled mnogobrojnih kolonija koje je Velika Britanija posedovala tokom 18. i 19. veka, kao i rastućeg uticaja SAD-a od 20. veka, engleski jezik je postao lingva franka. Drugim rečima, engleski nije jezik koji se priča samo unutar granica države u kojoj je on zvanični jezik, već i mnogo izvan tog opsega. Zato je poznavanje engleskog u današnje vreme, sposobnost koja se podrazumeva i neophodno je da to navedete u svom CV-ju. Takođe, ako pričate engleski jezik, uspećete da ostvarite komunikaciju sa skoro svakom nacijom na svetu. Zato, ako čitajući ovo i dalje osećate nesigurnost u svoje veštine, prijavite se ya neki od naših kurseva putem našeg broja telefona. Zatim, doći čete na kratak intervju koji je tu za utvrđivanje Vašeg nivoa od strane našeg stručnog tima. Nakon testiranje, određujemo za Vas pravi kurs. Ubrzo ćete uvideti, da su Vaši rezultati sve bolji i bolji iz časa u čas, a da za nesigurnost tu više nema mesta.' },
  { index: 2, src: Kurs2, h1: 'Kursevi nemačkog', text: 'Nemački jezik je maternji jezik većine statovnika u Evropskoj Uniji. Nemačkim jezikom se govori u Nemačkoj, Austriji, Lihtenštajnu, u dve trećine Švajcarske, u dve trećine provincije Južni Tirol u Italiji, istočnim kantonima Belgije i u pograničnim delovima Danske. Danas je nemački jezik jezik uspešnih i ambicioznih. Bilo da vam je ovaj jezik potreban za rad u nekoj od mnogobrojnih kompanija u našoj zemlji, ili za ostvarenje planova u nekoj od razvijenih zemalja gore pomenutih, savetujemo Vam kurs u našoj školi. Takođe, bilo da ste početnik ili ste se već susreli sa nemačkim ranije, proaći ćemo pravi kurs za Vas. Grupe na kursevima su sastavljane iz malog broja polaznika, te je napredovanje u ovakvom sastavu zagarantovano. Posvećenost naših predavača usmerena je ka razvijanju sposobnosti komunikacije naših polaznika i snalaženju u mnogobrojnim situacijama, gde je ovaj jezik uslov za uspešnu saradnju.' },
  { index: 3, src: Kurs3, h1: 'Kursevi italijanskog', text: 'Ako zaželite da saznate više o kulturi i jeziku nacije prekrasne hrane, živopisnih krajolika, dobrih vina i veselog duha, započnite individualni ili grupni kurs italijanskog jezika. Nažalost, nije dovoljno naučiti samo njihovu gestikulaciju, potrebno Vam je još nešto i reči. Naučite sve o italijanskim dijalektima, standardima i steknite sposobnost komunikacije sa ljudima koji govore ovaj melodičan jezik.' },
  { index: 4, src: Kurs1, h1: 'Kursevi francuskog', text: 'Francuski je službeni jezik u 29 zemalja, a neke od njih, pored Francuske, su Belgija, Švajcarska i Kanada. Ovaj jezik koristi 110 miliona stanovnika na Zemlji kao prvi jezik, a ukupno 190 miliona ljudi ga koristi u svakodnevnoj komunikaciji. Francuski ima dugu istoriju kao međunarodni jezik trgovine, diplomatije, književnosti i naučnih standarda i on je zvanični jezik mnogih međunarodnih organizacija uključujući Ujedinjene Nacije, Evropsku Uniju, NATO, WTO i ICRC. Francuski je drugi po redu na svetu koji se najviše izučava u školama. A mnogi ga karakterišu kao nelogičnog i teškog za učenje, Nadamo se da ćemo Vas našim zanimljivim kursevima uveriti u suprotno.' },
  { index: 5, src: Kurs1, h1: 'Kursevi ruskog', text: 'Ruski je još jedan od jezika međunarodne komunikaije. Preko 280 miliona ljudi na svetu govori ruski. Jeste li Vi među njima? Ako je Vaš odgovor odričan, a potreban Vam je ovaj jezik za život, posao ili obrazovanje, prijavite se na kurs putem našeg broja telefona. Ruski je jedan od 6 zvaničnih jezika UN-a, usled velikog uticaja i moći svoje matične zemlje. Rusija je stabilno na trećem mestu u spoljnoj trgovini Srbije, a njene sadašnje i buduće investicije u našoj zemlji su mnogobrojne.' }
];
class Kursevi extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  kursevi = (pod) => {
    return (
      <div className='col-md-12 p-0' key={pod.index}>
        <div className='row m-0 mt-4 mb-4'>
          <div className='col-md-6 pl-0 pr-xs-0'>
            <img src={pod.src} alt='kursevi 1' className='w-100' />
          </div>
          <div className='col-md-6 pl-sm-3 pl-0'>
            <h1 className='mb-3'>{pod.h1}</h1>
            <p style={{ color: 'grey', lineHeight: '26px' }}>{pod.text}</p>
            <ul className='mt-3'>
              <li className='li-check'>Text 1</li>
              <li className='li-check'>Text 2</li>
            </ul>
            <button className='btn position-relative'>Neki text a i ne mora</button>
          </div>
        </div>
      </div>
    );
  }
  render () {
    return (
      <div className='container'>
        <div className='row m-0 mt-4 mb-4'>
          <h1 className='col-12 text-center mt-4 mb-5'>UPIS JE U TOKU!</h1>
          {podaci.map((pod) => {
            return this.kursevi(pod);
          })}
          ostali kursevi:<br />
          Kursevi za odrasle
          Individualni i intezivni kursevi
          Konverzacijski kursevi
          Pripremni časovi za osnovnu i srednju školu
          Prevodilačke usluge

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
