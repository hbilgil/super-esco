/*titleSection scripts*/

const titleSection = document.getElementById('titleSection');
const icon = document.getElementById('icon');
const banner = document.getElementById('bannerSection');

/*Modal scripts*/

const readMoreBtn = document.getElementById('readMore');
const modalSection = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

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

/*phasespage scripts*/

const phasesBtn = document.getElementById('phasesBtn');
const phasesPage = document.getElementById('phasesPage');
const kaynakVerBtn = document.getElementById('kaynakVerBtn');
const enerjiVerBtn = document.getElementById('enerjiVerBtn');
const superEscoNavBtn = document.getElementById('superEscoNavBtn');
const enerjiHikayemiz = document.getElementById('enerjiHikayemiz');
const kaynakVerSection = document.getElementById('kaynakVer');
const enerjiVerSection = document.getElementById('enerjiVer');
const superEscoSection = document.getElementById('superEsco');

/*superEscopage scripts*/

const superEscoBtn = document.getElementById('superEscoBtn');

/*contactpage scripts*/

const contactBtn = document.getElementById('contactBtn');
const contactPage = document.getElementById('contactPage');
const adresInfoBtn = document.getElementById('adresInfoBtn');
const escoIletisimBtn = document.getElementById('escoIletisimBtn');
const yararlaniciIletisimBtn = document.getElementById('yararlaniciIletisimBtn');
const addressSection = document.getElementById('addressSection');
const escoIletisimSection = document.getElementById('escoIletisimSection');
const yararlaniciIletisimSection = document.getElementById('yararlaniciIletisimSection');

/*readMoreBtn.onclick = function() {
     modalSection.style.display = "block";
}

goalsBtn.onclick = function() {
     awarenessSection.style.display = "none";
}

span.onclick = function() {
     modalSection.style.display = "none";
}*/

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
     } else if (e.target == readMoreBtn) {
          modalSection.style.display = "block";
     } else if (e.target == modalSection) {
          modalSection.style.display = "none";
     } else if (e.target == span) {
          modalSection.style.display = "none";
     } else if (e.target == goalsBtn) {
          homePage.classList.add('passive');
          goalsPage.classList.remove('passive');
          phasesPage.classList.add('passive');
          contactPage.classList.add('passive');
          visionSection.classList.add('passive');
          awarenessSection.classList.remove('passive');
          titleSection.textContent = "Farkındalığımız";
          icon.href = "images/Logo-Amblem-mavi.png";
          banner.src="images/Logo-mavi.png";
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
          titleSection.textContent = "Vizyonumuz";
          visionBtn.classList.add('active');
          awarenessBtn.classList.remove('active');
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
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
     } else if (e.target == kaynakVerBtn) {
          kaynakVerSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Kaynak Verimliliği Teması";
          kaynakVerBtn.classList.add('active');
          enerjiVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
     } else if (e.target == enerjiVerBtn) {
          enerjiVerSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          superEscoSection.classList.add('passive');
          titleSection.textContent = "Enerji Verimliliği Mentorlük Programı";
          enerjiVerBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          superEscoNavBtn.classList.remove('active');
     } else if (e.target == superEscoNavBtn) {
          superEscoSection.classList.remove('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          titleSection.textContent = "Super Esco İş Modeli";
          superEscoNavBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
     } else if (e.target == superEscoBtn) {
          homePage.classList.add('passive');
          goalsPage.classList.add('passive');
          phasesPage.classList.remove('passive');
          contactPage.classList.add('passive');
          enerjiHikayemiz.classList.add('passive');
          kaynakVerSection.classList.add('passive');
          enerjiVerSection.classList.add('passive');
          superEscoSection.classList.remove('passive');
          titleSection.textContent = "Super Esco İş Modeli";
          icon.href = "images/Logo-Amblem-kirmizi.png";
          banner.src="images/Logo-kirmizi.png";
          superEscoBtn.classList.add('active');
          homeBtn.classList.remove('active');
          goalsBtn.classList.remove('active');
          phasesBtn.classList.remove('active');
          contactBtn.classList.remove('active');
          superEscoNavBtn.classList.add('active');
          kaynakVerBtn.classList.remove('active');
          enerjiVerBtn.classList.remove('active');
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
     }
}

homeBtn.classList.add('active');