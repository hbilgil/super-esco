/*titleSection scripts*/

const titleSection = document.getElementById('titleSection');
const icon = document.getElementById('icon');
const banner = document.getElementById('bannerSection');

/*Modal scripts*/

const readMoreBtn1 = document.getElementById('readMore1');
const modalSection1 = document.getElementById("myModal1");
const span1 = document.getElementById("close1");

const readMoreBtn2 = document.getElementById('readMore2');
const modalSection2 = document.getElementById("myModal2");
const span2 = document.getElementById("close2");

const readMoreBtn3 = document.getElementById('readMore3');
const modalSection3 = document.getElementById("myModal3");
const span3 = document.getElementById("close3");


/*homepage scripts*/

const homeBtn = document.getElementById('homeBtn');
const homePage = document.getElementById('homePage');

/*goalspage scripts*/

const goalsBtn = document.getElementById('goalsBtn');
const goalsPage = document.getElementById('goalsPage');
const awarenessBtn = document.getElementById('awarenessBtn');
const visionBtn = document.getElementById('visionBtn');
const awarenessSection = document.getElementById('awareness');
const visionSection = document.getElementById('vision');
const hedeflerimizLink = document.getElementById('hedeflerimizLink');
const turkSevLink = document.getElementById('turkSevLink');
const kaynakVerLink = document.getElementById('kaynakVerLink');
const kaynakVerLink2 = document.getElementById('kaynakVerLink2');
const kaynakVerLink3 = document.getElementById('kaynakVerLink3');
const hedeflerimizLink2 = document.getElementById('hedeflerimizLink2');

/*phasespage scripts*/

const phasesBtn = document.getElementById('phasesBtn');
const phasesPage = document.getElementById('phasesPage');
const EvHikayeBtn = document.getElementById('EvHikayeBtn');
const kaynakVerBtn = document.getElementById('kaynakVerBtn');
const enerjiVerBtn = document.getElementById('enerjiVerBtn');
const superEscoNavBtn = document.getElementById('superEscoNavBtn');
const enerjiHikayemiz = document.getElementById('enerjiHikayemiz');
const kaynakVerSection = document.getElementById('kaynakVer');
const enerjiVerSection = document.getElementById('enerjiVer');
const superEscoSection = document.getElementById('superEsco');
const enerjiVerLink = document.getElementById('enerjiVerLink');
const superEscoLink = document.getElementById('superEscoLink');
const enerjiHikayeLink = document.getElementById('enerjiHikayeLink');
const enerjiVerLink2 = document.getElementById('enerjiVerLink2');
const enerjiHikayeLink2 = document.getElementById('enerjiHikayeLink2');

/*superEscopage scripts*/

const superEscoBtn = document.getElementById('superEscoBtn');
const superEscoYararlaniciBtn = document.getElementById('superEscoYararlaniciBtn');

/*contactpage scripts*/

const contactBtn = document.getElementById('contactBtn');
const contactPage = document.getElementById('contactPage');
const adresInfoBtn = document.getElementById('adresInfoBtn');
const escoIletisimBtn = document.getElementById('escoIletisimBtn');
const yararlaniciIletisimBtn = document.getElementById('yararlaniciIletisimBtn');
const addressSection = document.getElementById('addressSection');
const escoIletisimSection = document.getElementById('escoIletisimSection');
const yararlaniciIletisimSection = document.getElementById('yararlaniciIletisimSection');
const turkSevLink2 = document.getElementById('turkSevLink2');
const superEscoLink2 = document.getElementById('superEscoLink2');
const enerjiVerLink3 = document.getElementById('enerjiVerLink3');
const turkSevLink3 = document.getElementById('turkSevLink3');

window.onclick = function(e) {
     if (e.target == homeBtn) {
          homePage.classList.remove('passive');
          goalsPage.classList.add('passive');
          phasesPage.classList.add('passive');
          contactPage.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Faaliyetlerimiz";
          icon.href = "images/Logo-Amblem.png";
          banner.src="images/logo.jpg";
          homeBtn.classList.add('active');
          goalsBtn.classList.remove('active');
          phasesBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          contactBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == readMoreBtn1) {
          modalSection1.classList.add('active');
     } else if (e.target == modalSection1) {
          modalSection1.classList.remove('active');
     } else if (e.target == span1) {
          modalSection1.classList.remove('active');
     } else if (e.target == readMoreBtn2) {
          modalSection2.classList.add('active');
     } else if (e.target == modalSection2) {
          modalSection2.classList.remove('active');
     } else if (e.target == span2) {
          modalSection2.classList.remove('active');
     } else if (e.target == readMoreBtn3) {
          modalSection3.classList.add('active');
     } else if (e.target == modalSection3) {
          modalSection3.classList.remove('active');
     } else if (e.target == span3) {
          modalSection3.classList.remove('active');
     } else if (e.target == goalsBtn) {
          homePage.classList.add('passive');
          goalsPage.classList.remove('passive');
          phasesPage.classList.add('passive');
          contactPage.classList.add('passive');
          visionSection.classList.add('passive');
          awarenessSection.classList.remove('passive');
          titleSection.textContent = "Farkındalığımız";
          icon.href = "images/Logo-Amblem-mavi-2.png";
          banner.src="images/Logo-mavi-2.png";
          goalsBtn.classList.add('active');
          homeBtn.classList.remove('active');
          phasesBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          contactBtn.classList.remove('active');
          awarenessBtn.classList.add('active');
          visionBtn.classList.remove('active');
     } else if (e.target == awarenessBtn) {
          awarenessSection.classList.remove('passive');
          visionSection.classList.add('passive');
          titleSection.textContent = "Farkındalığımız";
          awarenessBtn.classList.add('active');
          visionBtn.classList.remove('active');
     } else if (e.target == visionBtn) {
          visionSection.classList.remove('passive');
          awarenessSection.classList.add('passive');
          titleSection.textContent = "Hedeflerimiz";
          visionBtn.classList.add('active');
          awarenessBtn.classList.remove('active');
     } else if (e.target == hedeflerimizLink) {
          visionSection.classList.remove('passive');
          awarenessSection.classList.add('passive');
          titleSection.textContent = "Hedeflerimiz";
          visionBtn.classList.add('active');
          awarenessBtn.classList.remove('active');
          scrollToTop(); 
     } else if (e.target == turkSevLink) {
          goalsPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          enerjiHikayemiz.classList.remove('passive');
          enerjiVerSection.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Hikayemiz";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          EvHikayeBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          phasesBtn.classList.add('active');
          goalsBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == phasesBtn) {
          homePage.classList.add('passive');
          goalsPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          contactPage.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          enerjiHikayemiz.classList.remove('passive');
          titleSection.textContent = "Enerji Verimliliği Hikayemiz";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          phasesBtn.classList.add('active');
          homeBtn.classList.remove('active');
          goalsBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          contactBtn.classList.remove('active');
          EvHikayeBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
     } else if (e.target == EvHikayeBtn) {
          enerjiHikayemiz.classList.remove('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Hikayemiz";
          EvHikayeBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          phasesBtn.classList.add('active');
     } else if (e.target == kaynakVerBtn) {
          kaynakVerSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Kaynak Verimliliği Teması";
          kaynakVerBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          phasesBtn.classList.add('active');
     } else if (e.target == enerjiVerBtn) {
          enerjiVerSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Mentorlük Programı";
          enerjiVerBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          phasesBtn.classList.add('active');
     } else if (e.target == superEscoNavBtn) {
          superEscoSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          titleSection.textContent = "Super Esco (Yatırım)";
          superEscoNavBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
     } else if (e.target == enerjiVerLink) {
          enerjiVerSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Mentorlük Programı";
          enerjiVerBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == superEscoLink) {
          superEscoSection.classList.remove('passive');
          enerjiVerSection.classList.add('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          titleSection.textContent = "Super Esco (Yatırım)";
          superEscoNavBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == enerjiHikayeLink) {
          enerjiHikayemiz.classList.remove('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Hikayemiz";
          EvHikayeBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == enerjiVerLink2) {
          enerjiVerSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Mentorlük Programı";
          enerjiVerBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          phasesBtn.classList.add('active');
          scrollToTop();
     } else if (e.target == enerjiHikayeLink2) {
          enerjiHikayemiz.classList.remove('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Hikayemiz";
          EvHikayeBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          phasesBtn.classList.add('active');
          scrollToTop();
     } else if (e.target == hedeflerimizLink2) {
          goalsPage.classList.remove('passive');
          phasesPage.classList.add('passive');
          visionSection.classList.remove('passive');
          awarenessSection.classList.add('passive');
          titleSection.textContent = "Hedeflerimiz";
          icon.href = "images/Logo-Amblem-mavi-2.png";
          banner.src="images/Logo-mavi-2.png";
          visionBtn.classList.add('active');
          awarenessBtn.classList.remove('active');
          goalsBtn.classList.add('active');
          phasesBtn.classList.remove('active');
          scrollToTop(); 
     } else if (e.target == superEscoBtn) {
          homePage.classList.add('passive');
          goalsPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          contactPage.classList.add('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.remove('passive');
          titleSection.textContent = "Super Esco (Yatırım)";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          superEscoBtn.classList.add('active');
          homeBtn.classList.remove('active');
          goalsBtn.classList.remove('active');
          phasesBtn.classList.remove('active');
          contactBtn.classList.remove('active');
          superEscoNavBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
     } else if (e.target == kaynakVerLink) {
          goalsPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          superEscoSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.remove('passive');
          titleSection.textContent = "Kaynak Verimliliği";
          kaynakVerBtn.classList.add('active');
          superEscoNavBtn.classList.remove('active');
          EvHikayeBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          phasesBtn.classList.add('active');
          superEscoBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == kaynakVerLink2) {
          superEscoSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.remove('passive');
          titleSection.textContent = "Kaynak Verimliliği";
          kaynakVerBtn.classList.add('active');
          superEscoNavBtn.classList.remove('active');
          EvHikayeBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == kaynakVerLink3) {
          superEscoSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.remove('passive');
          titleSection.textContent = "Kaynak Verimliliği";
          kaynakVerBtn.classList.add('active');
          superEscoNavBtn.classList.remove('active');
          EvHikayeBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == superEscoYararlaniciBtn) {
          homePage.classList.add('passive');
          goalsPage.classList.add('passive');
          phasesPage.classList.add('passive');
          contactPage.classList.remove('passive');
          yararlaniciIletisimSection.classList.remove('passive');
          addressSection.classList.add('passive');
          escoIletisimSection.classList.add('passive');
          titleSection.textContent = "Yararlanıcı İletişim";
          icon.href = "images/Logo-Amblem-siyah-beyaz.png";
          banner.src="images/logo-S-B.jpg";
          contactBtn.classList.add('active');
          homeBtn.classList.remove('active');
          goalsBtn.classList.remove('active');
          phasesBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          yararlaniciIletisimBtn.classList.add('active');
          adresInfoBtn.classList.remove('active');
          escoIletisimBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == contactBtn) {
          homePage.classList.add('passive');
          goalsPage.classList.add('passive');
          phasesPage.classList.add('passive');
          contactPage.classList.remove('passive');
          escoIletisimSection.classList.add('passive');
          yararlaniciIletisimSection.classList.add('passive');
          addressSection.classList.remove('passive');
          titleSection.textContent = "Adres Bilgileri";
          icon.href = "images/Logo-Amblem-siyah-beyaz.png";
          banner.src="images/logo-S-B.jpg";
          contactBtn.classList.add('active');
          homeBtn.classList.remove('active');
          goalsBtn.classList.remove('active');
          phasesBtn.classList.remove('active');
          superEscoBtn.classList.remove('active');
          adresInfoBtn.classList.add('active');
          escoIletisimBtn.classList.remove('active');
          yararlaniciIletisimBtn.classList.remove('active');
     } else if (e.target == adresInfoBtn) {
          addressSection.classList.remove('passive');
          escoIletisimSection.classList.add('passive');
          yararlaniciIletisimSection.classList.add('passive');
          titleSection.textContent = "Adres Bilgileri";
          adresInfoBtn.classList.add('active');
          escoIletisimBtn.classList.remove('active');
          yararlaniciIletisimBtn.classList.remove('active');
     } else if (e.target == escoIletisimBtn) {
          escoIletisimSection.classList.remove('passive');
          addressSection.classList.add('passive');
          yararlaniciIletisimSection.classList.add('passive');
          titleSection.textContent = "Esco İletişim";
          escoIletisimBtn.classList.add('active');
          adresInfoBtn.classList.remove('active');
          yararlaniciIletisimBtn.classList.remove('active');
     } else if (e.target == yararlaniciIletisimBtn) {
          yararlaniciIletisimSection.classList.remove('passive');
          addressSection.classList.add('passive');
          escoIletisimSection.classList.add('passive');
          titleSection.textContent = "Yararlanıcı İletişim";
          yararlaniciIletisimBtn.classList.add('active');
          adresInfoBtn.classList.remove('active');
          escoIletisimBtn.classList.remove('active');
     } else if (e.target == turkSevLink2) {
          contactPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          enerjiHikayemiz.classList.remove('passive');
          superEscoSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Hikayemiz";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          EvHikayeBtn.classList.add('active');
          superEscoNavBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          phasesBtn.classList.add('active');
          contactBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == superEscoLink2) {
          contactPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          superEscoSection.classList.remove('passive');
          enerjiVerSection.classList.add('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          titleSection.textContent = "Super Esco (Yatırım)";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          superEscoNavBtn.classList.add('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          phasesBtn.classList.add('active');
          contactBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == enerjiVerLink3) {
          contactPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          superEscoSection.classList.add('passive');
          enerjiVerSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Mentorlük Programı";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          superEscoNavBtn.classList.remove('active');
          EvHikayeBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.add('active');
          phasesBtn.classList.add('active');
          contactBtn.classList.remove('active');
          scrollToTop();
     } else if (e.target == turkSevLink3) {
          contactPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          enerjiHikayemiz.classList.remove('passive');
          superEscoSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Hikayemiz";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          EvHikayeBtn.classList.add('active');
          superEscoNavBtn.classList.remove('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          phasesBtn.classList.add('active');
          contactBtn.classList.remove('active');
          scrollToTop();
     }
}

const yukariBtn = document.getElementById('yukari_buton');
const htmlPage = document.getElementsByTagName('html')[0];
const bodyPage = document.getElementsByTagName('body')[0];

yukariBtn.addEventListener('click', function(e) {
     e.preventDefault();
     htmlPage.animate({scrollTop:0}, '300');
     bodyPage.animate({scrollTop:0}, '300');
});

function scrollToTop() { 
     yukariBtn.click();
}

homeBtn.classList.add('active');