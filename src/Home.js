import React, { Component, useRef, useEffect } from 'react';
import "./Home.css"
import setupMenu from './homeScript';
import Footer from './Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from './LoadingScreen';



class Table extends Component {
    
    //---------------the button that show the navbar in phone----------------------
    toggleMenu2() {
        $('.menu-toggle-btn2').toggleClass('open-2');
        $('.navigation-menu2').toggleClass('active-2');
    }
    //-----------------Change dark/light Mode /// Alert promo tel ---------------------
      //end loading screen
    
            //end loading screen

    constructor(props) {
  super(props);
  this.state = {
    lightMode: false,
    showAlert: true, // montrer l'alerte de promotion du téléphone
    isLoading: true
  };
  
  this.changeMode = this.changeMode.bind(this);
  this.closeAlert = this.closeAlert.bind(this); // fermer l'alerte de promotion du téléphone
}
componentDidMount() {
    // Utiliser requestAnimationFrame pour retarder l'exécution de setTimeout
    requestAnimationFrame(() => {
      // Simuler un délai de chargement de 2 secondes
      setTimeout(() => {
        this.setState({ isLoading: false });
        setupMenu(); // Appeler setupMenu() après le délai
      }, 12000);
    });
  }
  
  

    //close alert promotion tel
    closeAlert() {
        this.setState({ showAlert: false });
    }
    //---
    changeMode() {
        const body = document.querySelector('body');

        if (!this.state.lightMode) {
            if (body) {
                body.style.backgroundColor = 'white';
            }

            const titleProducts = document.querySelectorAll('.titleProduct');
            if (titleProducts) {
                titleProducts.forEach(title => title.style.color = 'black');
            }
            const benefitQuestions = document.querySelectorAll('.benefitQuestion');
            if (benefitQuestions) {
                benefitQuestions.forEach(benefits => benefits.style.color = 'black');
            }
            const benefits = document.querySelector('#benefits');
            if (benefits) {
                benefits.style.color = 'black';
            }
            const containerTexts = document.querySelectorAll('.containerText');
            if (containerTexts) {
                containerTexts.forEach(container => container.style.color = 'black');
            }
            const containerTexts2 = document.querySelectorAll('.containerText2');
            if (containerTexts2) {
                containerTexts2.forEach(container => container.style.color = 'black');
            }
            const containerTexts3 = document.querySelectorAll('.containerText3');
            if (containerTexts3) {
                containerTexts3.forEach(container => container.style.color = 'black');
            }
            const containerTexts4 = document.querySelectorAll('.containerText4');
            if (containerTexts4) {
                containerTexts4.forEach(container => container.style.color = 'black');
            }
            const containerTexts5 = document.querySelectorAll('.containerText5');
            if (containerTexts5) {
                containerTexts5.forEach(container => container.style.color = 'black');
            }
            const element = document.querySelector('.fas.fa-sun');
            if (element) {
                element.classList.remove('fas', 'fa-sun');
                element.classList.add('fas', 'fa-moon');
            }
            this.setState({
                lightMode: true
            });
        } else {
            if (body) {
                body.style.backgroundColor = 'black';
            }
            const titleProducts = document.querySelectorAll('.titleProduct');
            if (titleProducts) {
                titleProducts.forEach(title => title.style.color = 'white');
            }
            const benefitQuestions = document.querySelectorAll('.benefitQuestion');
            if (benefitQuestions) {
                benefitQuestions.forEach(benefits => benefits.style.color = 'white');
            }
            const benefits = document.querySelector('#benefits');
            if (benefits) {
                benefits.style.color = 'white';
            }
            const containerTexts = document.querySelectorAll('.containerText');
            if (containerTexts) {
                containerTexts.forEach(container => container.style.color = 'white');
            }
            const containerTexts2 = document.querySelectorAll('.containerText2');
            if (containerTexts2) {
                containerTexts2.forEach(container => container.style.color = 'white');
            }
            const containerTexts3 = document.querySelectorAll('.containerText3');
            if (containerTexts3) {
                containerTexts3.forEach(container => container.style.color = 'white');
            }


            const containerTexts4 = document.querySelectorAll('.containerText4');
            if (containerTexts4) {
                containerTexts4.forEach(container => container.style.color = 'white');
            }
            const containerTexts5 = document.querySelectorAll('.containerText5');
            if (containerTexts5) {
                containerTexts5.forEach(container => container.style.color = 'white');
            }
            const element = document.querySelector('.fas.fa-moon');
            if (element) {
                element.classList.remove('fas', 'fa-moon');
                element.classList.add('fas', 'fa-sun');
            }
            //const slideShowHide = document.querySelectorAll('.slideAlign');
            //if (slideShowHide) {
            //slideShowHide.forEach(sliderShower => sliderShower.style.display='none');
            //}
            this.setState({
                lightMode: false
            });
        }
    }




    //-------------------Onclick, buy-------------------------

    //SPOTIFY
    buySpotify() {
        if (document.querySelector('#SpotifyMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#SpotifyMonths').value;
            const months = document.querySelector('#SpotifyMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *---SPOTIFY---* \n  *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}  `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //NETFLIX

    buyNetflix() {

        const standardSelect = document.getElementById('standard');
        const profileSelect = document.getElementById('profile');
        const accountTypSelect = document.getElementById('type');
        const totalPrice = document.getElementById('NetflixPrice').textContent;
        if (profileSelect.value != '-' && standardSelect.value != '-' && accountTypSelect.value != '-') {

            const message = `Salam *Digital Store* bghit \n *---NETFLIX---* \n\n *⇾ SUBSCRIPTION :* ${accountTypSelect.options[accountTypSelect.selectedIndex].text} \n *⇾  MONTHS :* ${standardSelect.options[standardSelect.selectedIndex].text} \n *⇾ PROFILES :* ${profileSelect.options[profileSelect.selectedIndex].text} \n *⇾ TOTAL* ${totalPrice}`;

            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
        else {
            alert('Error : Please select an option before clicking buy..');

        }
    }

    //Iptv
    buyIPTV() {
        if (document.querySelector('#iptvMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#iptvMonths').value;
            const months = document.querySelector('#iptvMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- IPTV ---* \n  *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}  `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy discord 
    buyDiscord() {
        if (document.querySelector('#nitro').value == '-' || document.querySelector('#typeNitro').value == '-' || document.querySelector('#accountType').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.getElementById('DiscordPrice').textContent
            const months = document.querySelector('#nitro option:checked').text;
            const typeSubs = document.querySelector('#typeNitro option:checked').text;
            const accountSubs = document.querySelector('#accountType option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- DISCORD ---* \n \n  *⇾ DURATION :* ${months} \n  *⇾ SUBSCRIPTION :* ${typeSubs} \n  *⇾ SERVICE :* ${accountSubs} \n *⇾ QUANTITY :* 1 \n \n *⇾ ${price}*  `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy  shahid
    buyShahid() {
        if (document.querySelector('#ShahidProfile').value == '-' || document.querySelector('#shahidType').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.getElementById('shahidPrice').textContent
            const months = document.querySelector('#shahidType option:checked').text;
            const typeSubs = document.querySelector('#ShahidProfile option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- SHAHID ---* \n \n  *⇾ DURATION :* ${months} \n  *⇾ SUBSCRIPTION :* ${typeSubs} \n   *⇾ QUANTITY :* 1 \n \n *⇾ ${price} MAD*  `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy canva

    buyCanva() {
        if (document.querySelector('#canvaMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#canvaMonths').value;
            const months = document.querySelector('#canvaMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- CANVA ---* \n\n  *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL : ${price} MAD*  `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy apple music
    buyAppleMusic() {
        if (document.querySelector('#AppleMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#AppleMonths').value;
            const months = document.querySelector('#AppleMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- APPLE MUSIC ---* \n\n  *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy deezer
    buyDeezer() {
        if (document.querySelector('#DeezerMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#DeezerMonths').value;
            const months = document.querySelector('#DeezerMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- DEEZER ---* \n\n *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy prime video 
    buyPrime() {
        if (document.querySelector('#PrimeMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#PrimeMonths').value;
            const months = document.querySelector('#PrimeMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- PRIME VIDEO ---* \n\n *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    // buy disney

    buyDisney() {
        if (document.querySelector('#DisneyProfile').value == '-' || document.querySelector('#DisneyMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.getElementById('disney').innerText;
            const profileDisney = document.querySelector('#DisneyProfile option:checked').text;
            const months = document.querySelector('#DisneyMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- DISNEY ---* \n\n *⇾ DURATION :* ${months} \n *⇾ PROFILES :* ${profileDisney} \n *⇾ QUANTITY :* 1 \n *⇾* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //buy crunchy
    buyCrunchy() {
        if (document.querySelector('#CrunchyMonths').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#CrunchyMonths').value;
            const months = document.querySelector('#CrunchyMonths option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- CRUNCHY ROLL ---* \n\n *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    // youtube
    buyYoutube() {
        if (document.querySelector('#youtubeService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#youtubeService').value;
            const months = document.querySelector('#youtubeService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- YOUTUBE SERVICES ---* \n\n *⇾ SERVICE :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //snapchat 
    buySnapchat() {
        if (document.querySelector('#snapchatService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#snapchatService').value;
            const months = document.querySelector('#snapchatService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- SNAPCHAT SERVICES ---* \n\n *⇾ SERVICE :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy tiktok
    buyTiktok() {
        if (document.querySelector('#tiktokService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#tiktokService').value;
            const months = document.querySelector('#tiktokService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- TIKTOK SERVICES ---* \n\n *⇾ SERVICE :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy instagram
    buyInstagram() {
        if (document.querySelector('#instagramService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#instagramService').value;
            const months = document.querySelector('#instagramService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- INSTAGRAM SERVICES ---* \n\n *⇾ SERVICE :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy facebook
    buyFacebook() {
        if (document.querySelector('#facebookService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#facebookService').value;
            const months = document.querySelector('#facebookService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- FACEBOOK SERVICES ---* \n\n *⇾ SERVICE :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //buy twitch
    buyTwitch() {
        if (document.querySelector('#twitchService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#twitchService').value;
            const months = document.querySelector('#twitchService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- TWITCH SERVICES ---* \n\n *⇾ SERVICE :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy 8ball
    buy8ball() {
        if (document.querySelector('#firstUsaService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#firstUsaService').value;
            const months = document.querySelector('#firstUsaService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- COMPTE 8BALL ---* \n\n *⇾ ACCOUNT :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy crosscomms
    buyCrosscomms() {
        if (document.querySelector('#secondUsaService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#secondUsaService').value;
            const months = document.querySelector('#secondUsaService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- PACK CROSS COMMS [TOP UP] ---* \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy harley
    buyHarley() {
        if (document.querySelector('#thirdUsaService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#thirdUsaService').value;
            const months = document.querySelector('#thirdUsaService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- HARLEY QUEEN [GIFT CARD] ---* \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //buyGrappling
    buyGrapplingClaw() {
        if (document.querySelector('#GrapplingClaw1').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#GrapplingClaw1').value;
            const months = document.querySelector('#GrapplingClaw1 option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- AXE GRAPPLING CLAW [GIFT CARD] ---* \n\n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy random fortnite account
    buyRandomeFortniteAccount() {
        if (document.querySelector('#GrapplingClaw2').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#GrapplingClaw2').value;
            const months = document.querySelector('#GrapplingClaw2 option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- RANDOM FORTNITE ACCOUNT + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1 \n *⇾ SKINS COUNT :* ${months} \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy 13k vbucks
    buy13kVnucks() {
        if (document.querySelector('#GrapplingClaw3').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#GrapplingClaw3').value;
            const months = document.querySelector('#GrapplingClaw3 option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- 13k V-BUCKS ACCOUNT + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //buy resident evil
    buyResidentEvil4() {

        const message = `Salam *Digital Store* bghit \n *--- RESIDENT EVIL 4 OFFLINE STEAM ACCOUNT ---* \n-- +2 FREE GAMES --\n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 90 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy gta5
    buyGta5AndRdr2() {

        const message = `Salam *Digital Store* bghit \n *--- GTA 5 + RDR2 STEAM ACCOUNT + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 150 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy fh5
    buyFh5() {

        const message = `Salam *Digital Store* bghit \n *--- FH5 STEAM ACCOUNT + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 110 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy last of us
    buyLastOfUs() {

        const message = `Salam *Digital Store* bghit \n *--- THE LAST OF US OFFLINE STEAM ACCOUNT ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 80 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy gow
    buyGow2018() {

        const message = `Salam *Digital Store* bghit \n *--- GOW OFFLINE STEAM ACCOUNT ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 80 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy gta5
    buyGta5Alone() {

        const message = `Salam *Digital Store* bghit \n *--- GTA 5 STEAM ACCOUNT + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 100 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy hogwart 
    buyHogwart() {

        const message = `Salam *Digital Store* bghit \n *--- HOGWARTS OFFLINE STEAM ACCOUNT ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 90 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy uncharted
    buyUncharted() {

        const message = `Salam *Digital Store* bghit \n *--- UNCHARTED LEGACY OFFLINE STEAM ACCOUNT ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 80 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy f1 + f1 manager
    buyF1AndF1Manager() {

        const message = `Salam *Digital Store* bghit \n *--- F1 + F1 MANAGER OFFLINE STEAM ACCOUNT ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 100 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy ps plus 1 months
    buyPsPlus() {
        if (document.querySelector('#firstMoroccoService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#firstMoroccoService').value;
            const months = document.querySelector('#firstMoroccoService option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- PS PLUS ON MY ACCOUNT ---* \n\n  *⇾ DURATION :* 1 MONTH \n *⇾ SUBSCRIPTION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy ps plus 3 months
    buyPsPlus2() {
        if (document.querySelector('#secondMoroccoService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#secondMoroccoService').value;
            const months = document.querySelector('#secondMoroccoService option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- PS PLUS ON MY ACCOUNT ---* \n\n  *⇾ DURATION :* 3 MONTHS \n *⇾ SUBSCRIPTION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy ps plus 1 year
    buyPsPlus3() {
        if (document.querySelector('#thirdMoroccoService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#thirdMoroccoService').value;
            const months = document.querySelector('#thirdMoroccoService option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- PS PLUS ON MY ACCOUNT ---* \n\n  *⇾ DURATION :* 12 MONTHS \n *⇾ SUBSCRIPTION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy hulu
    buyHulu() {
        if (document.querySelector('#huluService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#huluService').value;
            const months = document.querySelector('#huluService option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- HULU ACCOUNT ---* \n\n  *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy nba league
    buynbaLeague() {
        if (document.querySelector('#nbaLeagueService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#nbaLeagueService').value;
            const months = document.querySelector('#nbaLeagueService option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- NBA LEAGUE ACCOUNT ---* \n\n  *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy ufc fight
    buyUfcFight() {
        if (document.querySelector('#ufcFightService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#ufcFightService').value;
            const months = document.querySelector('#ufcFightService option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- UFC FIGHT ACCOUNT ---* \n\n  *⇾ DURATION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy fifa23
    buyFifa23() {
        if (document.querySelector('#fifa23Plateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#fifa23Plateforme').value;
            const months = document.querySelector('#fifa23Plateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- FIFA 23 ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy bo3
    buyBo3() {
        if (document.querySelector('#bo3Plateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#bo3Plateforme').value;
            const months = document.querySelector('#bo3Plateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- BO3 ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy asseto
    buyAsseto() {
        if (document.querySelector('#assetoPlateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#assetoPlateforme').value;
            const months = document.querySelector('#assetoPlateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- ASSETO CORSA ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    // buy f1
    buyF1() {
        if (document.querySelector('#f1Plateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#f1Plateforme').value;
            const months = document.querySelector('#f1Plateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- F1 2022 ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy gta5
    buyGta5() {
        if (document.querySelector('#gtaPlateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#gtaPlateforme').value;
            const months = document.querySelector('#gtaPlateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- GTA 5 ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy ragnarok
    buyRagnarok() {
        if (document.querySelector('#ragnarokPlateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#ragnarokPlateforme').value;
            const months = document.querySelector('#ragnarokPlateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- GOW RAGNAROK ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy miles
    buyMiles() {
        if (document.querySelector('#spidermanPlateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#spidermanPlateforme').value;
            const months = document.querySelector('#spidermanPlateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- SPIDERMAN MILES MORALS ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy rdr
    buyRdr2() {
        if (document.querySelector('#rdrPlateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#rdrPlateforme').value;
            const months = document.querySelector('#rdrPlateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- RDR 2 ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy fifa22
    buyFifa22() {
        if (document.querySelector('#fifa22Plateforme').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#fifa22Plateforme').value;
            const months = document.querySelector('#fifa22Plateforme option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- FIFA 22 ---* \n\n *⇾ VERSION :* ${months} \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy psn 5 euro
    buyPsn5euro() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE PSN 5 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 70 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buy 10 euro psn
    buyPsn10euro() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE PSN 10 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 130 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buy 20euro psn
    buyPsn20euro() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE PSN 20 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 250 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy valo service
    buyValoService() {
        if (document.querySelector('#valoService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#valoService').value;
            const months = document.querySelector('#valoService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- PSN VALO SERVICE ---* \n\n *⇾ SERVICE :* ${months} RIO POINTS \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy gamepass
    buyGamepassXbox() {
        if (document.querySelector('#gamepassService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#gamepassService').value;
            const months = document.querySelector('#gamepassService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- XBOX GAME PASS ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //buy steam
    buySteam() {
        if (document.querySelector('#steamService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#steamService').value;
            const months = document.querySelector('#steamService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- STEAM GIFT CARDS ---* \n\n *⇾ CARDS :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy xbox live
    buyXboxLiveGold() {
        if (document.querySelector('#goldService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#goldService').value;
            const months = document.querySelector('#goldService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- XBOX LIVE GOLD GIFT CARDS ---* \n\n *⇾ SUBSCRIPTION :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy roblox
    buyRoblox() {
        if (document.querySelector('#robloxService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#robloxService').value;
            const months = document.querySelector('#robloxService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- ROBLOX SERVICE ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy office
    buyOffice() {
        if (document.querySelector('#officeService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#officeService').value;
            const months = document.querySelector('#officeService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- MICROSOFT OFFICE SERVICE  ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy itunes
    buyItunes() {
        if (document.querySelector('#itunesService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#itunesService').value;
            const months = document.querySelector('#itunesService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- ITUNES GIFT CARD  ---* \n\n *⇾ CARD :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //gta topup
    buyGtaTopup() {
        if (document.querySelector('#gtaTopup').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#gtaTopup').value;
            const months = document.querySelector('#gtaTopup option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- GTA 5 TOP UP  ---* \n\n *⇾ PLATFORMS :* ${months}  \n *⇾ MONEY :* 100M \n *⇾ TOTAL :* ${price} MAD   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }




    render() {
        const { isLoading } = this.state;

        //alert promotion tel
        const { showAlert } = this.state;
        //fin alert
        return (

            <div>

                <script src="./homeScript"></script>

                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" charset="utf-8"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
                </head>


                <header className='headerClass'>
                    <div className="inner-width">
                        <Link to="/home"><h1 className="logo" style={{ fontFamily: 'fantasy' }}> <i className="fas fa-store" style={{ color: '#008507' }} />
                            <span style={{ color: '#008507' }}> D</span>igital <span style={{ color: '#008507' }}>S</span>tore
                        </h1></Link>
                        <i id='menu-toggle-btn-2' className="menu-toggle-btn fas fa-bars" onClick={this.toggleMenu2} />
                        <nav id='navigation-menu-2' className="navigation-menu">
                            {/*<a href="#"><i class="fas fa-home home"></i> Home</a>*/}
                            <div className="dropdown">
                                <a className="info-btn"><i className="fas fa-gift" /> GIVEAWAY</a>
                                <div className="modal">
                                    <div className="modal-content">
                                        <span className="close-btn">×</span>
                                        <p>THERE IS NO GIVEAWAY.. PLEASE COME BACK SOON :)</p>
                                    </div>
                                </div>
                                {/*<div class="dropdown-menu">

                            <a href="#"><i class='fas fa-arrow-right'></i> NETFLIX</a>
                            <a href="#"><i class='fas fa-arrow-right'></i> SPOTIFY</a>
                            <a href="#"><i class='fas fa-arrow-right'></i> DISCORD NITRO</a>
                            <a href="#"><i class='fas fa-arrow-right'></i> IPTV</a>
                            <a href="#"><i class='fas fa-arrow-right'></i> APPLE MUSIC</a>

                        </div>
                    */}

                            </div>
                            <Link to="/orders"><i className="fas fa-shopping-cart" /> ORDER details </Link>
                            {/* 
                            <div className="dropdown">
                                <a href="#"><i className="far fa-comments" /> Contact</a>
                                {<div class="dropdown-menu">

                                <a href="https://www.instagram.com/digitalstore_v2/"> <i className="fab fa-instagram" /> INSTAGRAM</a>
                                <a href="https://wa.me/+212637976257"><i className="fab fa-whatsapp" /> WHATSAPP</a>

                                </div>
                                }
                            </div>
 */}

                            <div name="currency" style={{ backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', paddingLeft: '8px' }}>
                                <Link to="/euro"><FontAwesomeIcon icon={faExchangeAlt} /> EUR 🇪🇺</Link>
                            </div>
                            <i id="darkLightMode" style={{ padding: '5px', marginLeft: '40px', cursor: 'pointer', color: 'white' }} className="fas fa-sun" onClick={this.changeMode} />

                            <a href="#" className="aj_btn"> <i className="fas fa-lock" aria-hidden="true" />
                                CART
                            </a>
                        </nav>
                    </div>
                </header>
                {isLoading ? <LoadingScreen /> : <>

                {/*-------------------------Mad------------------------*/}
                <div id="madDisplay" style={{ display: 'block' }}>
                    {/*Body slide show*/}
                    <div className="slideAlign">
                        <div className="slideshow-container">
                            <div className="mySlides fade">
                                <img className="imgSlide" src="the-last-of-us-part-ii_1578852229.jpg.webp" style={{ width: '100%' }} />
                                <div className="text"> </div>
                            </div>
                            <div className="mySlides fade">
                                <img className="imgSlide" src="Black Modern and Elegant Flash Sale Promotion Banner Store.png" style={{ width: '100%' }} />
                                <div className="text"> </div>
                            </div>
                            <div className="mySlides fade">
                                <img className="imgSlide" src="PicsArt_04-05-05.07.56.jpg" style={{ width: '100%' }} />
                                <div className="text"> </div>
                            </div>
                            <div className="mySlides fade">
                                <img className="imgSlide" src="horizon-forbidden-west-2020_1596989341.jpg.webp" style={{ width: '100%' }} />
                                <div className="text" />
                            </div>
                            <div className="mySlides fade">
                                <img className="imgSlide" src="red-dead-redemption-2-xbox-one-4k_1543620890.jpg.webp" style={{ width: '100%' }} />
                                <div className="text"> </div>
                            </div>
                            <a className="prev" onclick="plusSlides(-1)">❮</a>
                            <a className="next" onclick="plusSlides(1)">❯</a>
                        </div>
                        <br />
                        <div style={{ textAlign: 'center' }}>
                            <span className="dot" onclick="currentSlide(1)" />
                            <span className="dot" onclick="currentSlide(2)" />
                            <span className="dot" onclick="currentSlide(3)" />
                            <span className="dot" onclick="currentSlide(4)" />
                            <span className="dot" onclick="currentSlide(5)" />
                        </div>
                    </div>
                    {/*PROMOTION*/}
                    {showAlert && (
                        <div className="alert" onClick={this.closeAlert}>
                            <span className="closebtnAlert" >×</span>
                            <strong>PROMOTION ALERT !!</strong> <br /> LIMITED TIME DISCOUNT
                        </div>
                    )}
                    {/*PROMOTION MARQUEE*/}
                    <marquee scrollamount={3} loop={-1} behavior="alternate" style={{ color: 'white', margin: '100px 140px 0 100px', backgroundColor: 'rgb(212, 6, 6)', fontSize: '22px', borderRadius: '60px', padding: '10px 20px 10px 20px', fontWeight: 'bold', letterSpacing: '2px', wordSpacing: '3px' }}>
                        LIMITED TIME DISCOUNT <span style={{ color: 'black' }}>/</span> PROMOTION A DURÉE LIMITÉE </marquee>
                    {/*top up product*/}
                    <p className="titleProduct">OUR <span>TOP UP</span></p><br /> <br />
                    <section className="boxes">
                        <div className="boxShow">
                            <p><img src="20230402_211309.jpg" width="100%" alt="" /></p>
                            <h3 className="info-btn">BUY</h3>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>GTA 5 ( 100M MONEY ON YOUR ACCOUNT )</span><br /><br /> <hr /><br />

                                        You need to have at least 300k of money to start the Boost.<br />


                                        Money will be boosted as CASH+Deluxe CARS that you can sell and get full amount. Only CASH possible too but it will be longer delivery and more expensive service!<br />
                                        If you need LVL boost , just message us on chat G2G.<br /><br />
                                        <select className="select-style" id='gtaTopup'>
                                            <option value="-">YOUR PLATFORM</option>
                                            <option value={"0"}>PLAY STATION 4</option>
                                            <option value={"0"}>PLAY STATION 5</option>
                                            <option value={"0"}>XBOX ONE</option>
                                            <option value={"0"}>XBOX SERIES</option>
                                        </select> <br /><br />
                                        <div id="gtaTopupPrice" className="price">PRICE :</div><br />


                                        <button className='btn btn-primary' style={{ cursor: 'pointer', color: 'white' }} onClick={this.buyGtaTopup} >BUY NOW</button><br /><br />

                                        <span style={{ fontWeight: 'bold' }}>WHY US?</span><br />

                                        1. We are the TOP company on various websites selling game accounts with more than 8 years of experience.<br />

                                        2. We have sold and boosted over 150000+ accounts, with 99.9% positive reviews.<br />

                                        3. In our team only good professional players, who are ready to complete any order as quickly as possible.<br />

                                        4. We never use any prohibited programs or abuses, each order is executed manually by our players.<br />

                                        5. You can contact us for advice or with any question at any time, even years after you have become our client once.<br /><br />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="boxShow">
                            <p><img src="20230402_205304.jpg" width="100%" alt="" /></p>
                            <h3 className="info-btn">BUY</h3>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <select name id>
                                            <option value>1</option>
                                            <option value>2</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="boxShow">
                            <p><img src="20230402_211241.jpg" width="100%" alt="" /></p>
                            <h3 className="info-btn">BUY</h3>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <select name id>
                                            <option value>1</option>
                                            <option value>2</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="boxShow">
                            <p><img src="20230402_210908.jpg" width="100%" alt="" /></p>
                            <h3 className="info-btn">BUY</h3>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <select name id>
                                            <option value>1</option>
                                            <option value>2</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="boxShow">
                            <p><img src="20230402_211817.jpg" width="100%" alt="" /></p>
                            <h3 className="info-btn">BUY</h3>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <select name id>
                                            <option value>1</option>
                                            <option value>2</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="boxShow">
                            <p><img src="20230402_211641.jpg" width="100%" alt="" /></p>
                            <h3 className="info-btn">BUY</h3>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <select name id>
                                            <option value>1</option>
                                            <option value>2</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* PES      <div class="boxShow">
                <p><img src="20230402_212015.jpg " width="100%" alt=""></p>
                <h3 class="info-btn">BUY</h3>
                <div class="modal">
                    <div class="modal-content">
                        <span class="close-btn">&times;</span>
                        <p>
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>
        */}
                    </section>
                    {/*Body product*/}
                    <p className="titleProduct">OUR <span> BEST </span> SELLING</p>
                    <div className="container">
                        <div className="wrapper">
                            <img src="spotify.png" alt="" />
                            <div className="content">
                                <span>SPOTIFY Private</span>
                                <h6 className="SocialInfos">( ACC UPGRADE AVAILABLE )</h6>
                                <p>
                                    <select name id="SpotifyMonths" className="select-style">
                                        <option value="-">Select</option>
                                        <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                        <option value="20 MAD">1 Months </option>
                                        <option value="30 MAD">2 Months </option>
                                        <option value="40 MAD">3 Months </option>
                                        <option disabled value="0 MAD">---UPGRADE[UG]---</option>
                                        <option value="30 MAD">1 Months UG </option>
                                        <option value="40 MAD">2 Months UG</option>
                                        <option value="50 MAD">3 Months UG</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="spotify" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buySpotify}>BUY</button>
                                    {/*spotify*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>Upgrade [UG] on your account is Available </span> <br />
                                        ✅ Private Spotify Premium Subscription  <br />
                                        ✅ 🌍 Works Worldwide <br />
                                        ✅ Full Warranty and Support<br />
                                        ✅ Can Change Email and Password<br />
                                        ✅ Can be used on All devices – Android, Ios, Pc, Mac, Playstation, etc<br />
                                        ✅ No interruptions – Play the music you love, ad-free.<br />
                                        ✅ Offline playback – Save your data by listening offline.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="iptv.png" alt="" />
                            <div className="content">
                                <span>IPTV</span>
                                <h6 className="SocialInfos">( PRIVATE ACCOUNT )</h6>
                                <p>
                                    <select name id="iptvMonths" className="select-style">
                                        <option value="-">Select</option>
                                        <option value="150 MAD">6 Months</option>
                                        <option value="250 MAD">12 Months</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="iptvPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyIPTV}>BUY</button>
                                    {/*iptv*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        - 16000+ Live TV CHANNELS <br />

                                        - 60,000 VODs (Movies, Series, Anime, Shows) in all languages and from all around the world<br />

                                        - PPV Events<br />
                                        - Warranty <br />

                                        - LAG-FREE and Anti freeze system.<br />

                                        - Up to 4k Ultra HD quality<br />

                                        - All devices are supported </p><br />
                                    <span style={{ fontWeight: 'bold' }}>HOW TO USE ?</span><br />
                                    <span style={{ fontWeight: 'bold' }}>On TV Download :</span><br />
                                    - Iptv smarters pro Windows IPTV Player<br />
                                    <span style={{ fontWeight: 'bold' }}>On Apple Tv / iphone :</span><br />
                                    - iptv smarters pro<br />
                                    - Xtream iptv<br />
                                    - Leez tv<br />
                                    <span style={{ fontWeight: 'bold' }}>Android / Receiver Android :</span><br />
                                    - iptv smarters pro<br />
                                    <span style={{ fontWeight: 'bold' }}>Pc</span><br />
                                    - iptv smarters pro, you can download it from the website <br />
                                    https://www.iptvsmarters.com<br />
                                    Windows IPTV Player<br />
                                    <span style={{ fontWeight: 'bold' }}>--- More info, contact Us ---</span><br />



                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="netflix.png" alt="" />
                            <div className="content">
                                <span>NETFLIX</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="type" onChange={this.calculateNetflixPrice}>
                                        <option value="-">Select</option>
                                        <option value={10}>PREMIUM</option>
                                        <option value={0}>STANDARD</option>
                                    </select>
                                    <select name id="standard" className="select-style" onChange={this.calculateNetflixPrice}>
                                        <option value="-">Select</option>
                                        <option value={25}>1 Months </option>
                                        <option value={50}>2 Months</option>
                                        <option value={75}>3 Months</option>
                                    </select>
                                    <select name id="profile" className="select-style" onChange={this.calculateNetflixPrice}>
                                        <option value="-"> Select</option>
                                        <option value={0}>1 Profile</option>
                                        <option value={10}>2 Profiles</option>
                                        <option value={20}>3 Profiles</option>
                                        <option value={30}>4 Profiles</option>
                                        <option value={40}>5 Profiles</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="NetflixPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyNetflix}>BUY</button>
                                    {/*netflix*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        🟥 PREMIUM SUBSCRIPTION HAS A 4K Resolution<br />
                                        🟥  STANDARD SUBSCRIPTION HAS A FULL HD Resolution<br />
                                        ✅ Works on any device. <br />
                                        ✅ Contact us for any issue<br />
                                        ✅Safety Account Warranty 100%<br />
                                        🟥 No guarantee will be given if you change any information in the accounts.<br />
                                        --> WANNA MORE MONTHS ? CONTACT US VIA WHATSAPP 0637976257
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="discord.png" alt="" />
                            <div className="content">
                                <span>DISCORD</span>
                                <h6 className="SocialInfos">( IN YOUR ACCOUNT )</h6>
                                <p>
                                    <select name id="nitro" className="select-style">
                                        <option value="-">Select</option>
                                        <option value={0}>1 Months </option>
                                        <option value={60}>2 Months</option>
                                        <option value={75}>3 Months</option>
                                    </select>
                                    <select name id="typeNitro" className="select-style">
                                        <option value="-"> Select</option>
                                        <option value={60}>Classic</option>
                                        <option value={80}>Nitro</option>
                                    </select>
                                    <select name id="accountType" className="select-style">
                                        <option value="-"> Select</option>
                                        <option value={0}>Your account</option>
                                        <option value={0}>New account</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="DiscordPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyDiscord}>BUY</button>
                                    {/*discord*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>- 🌍WORKS WORLDWIDE🌍 <br />
                                        -We need your account information to do the process..  <span style={{ fontWeight: 'bold' }}>YOU CAN SEND US THESE INFORMATIONS VIA WHATSAPP +212 637976257</span><br />
                                        ⚡✔️ We guarantee you that this process is safe and NOT forbidden by Discord rules!✔️⚡<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="SHAHID.png" alt="" />
                            <div className="content">
                                <span>SHAHID</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="ShahidProfile">
                                        <option value="-">Select</option>
                                        <option value={30}>VIP</option>
                                        <option value={70}>VIP SPORT</option>
                                    </select>
                                    <select name id="shahidType">
                                        <option value="-">Select</option>
                                        <option value={0}>1 MONTHS</option>
                                        <option value={20}>2 MONTHS</option>
                                        <option value={50}>3 MONTHS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="shahidPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyShahid}>BUY</button>
                                    {/*shahid*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>🔥 Works on any device. <br />

                                        🔥 Safety Account Warranty 100% ( Contact us for any issue  )</p><br />
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="canva.png" alt="" />
                            <div className="content">
                                <span>CANVA</span>
                                <h6 className="SocialInfos">( IN YOUR ACCOUNT )</h6>
                                <p>
                                    <select name id="canvaMonths">
                                        <option value="-">Select</option>
                                        <option value={35}> 1 MONTHS</option>
                                        <option value={50}> 6 MONTHS</option>
                                        <option value={75}>12 MONTHS</option>
                                        <option value={140}>36 MONTHS</option>
                                        <option value={170}>LIFETIME (Edu)</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="canva" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyCanva}>BUY</button>
                                    {/*canva*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅Non-stop <br />
                                        ✅Auto renew<br />
                                        ✅upgrade your own account or give you a new one<br />
                                        ✅Private account (You can change the email and password)<br />
                                        🔥🔥 Full Warranty 🔥🔥<br />
                                        ✅If you need help or anything, you can contact us anytime, and we'll be happy to assist you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="applemusic.jpeg" alt="" />
                            <div className="content">
                                <span>APPLE MUSIC private</span>
                                <h6 className="SocialInfos">( NEW PRIVATE ACCOUNT )</h6>
                                <p>
                                    <select name id="AppleMonths" className="select-style">
                                        <option value="-">Select</option>
                                        <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                        <option value="25 MAD">1 Months </option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="apple" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyAppleMusic}>BUY</button>
                                    {/*apple musicva*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅ Apple music premium With Warranty. <br />
                                        ✅ it is a private account which means you can update your account password.<br />
                                        ✅ Our Product :
                                        After a successful purchase, we will create a brand new Apple music premium, and then we send it to you.<br />

                                        ✅ We offer Warranty which means any problem you face using the account during this period, we'll either fix the problem for you or replace the account. A pleasant customer experience is our aim. <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="deezer.jpeg" alt="" />
                            <div className="content">
                                <span>DEEZER Private</span>
                                <h6 className="SocialInfos">( NEW PRIVATE ACCOUNT )</h6>
                                <p>
                                    <select name id="DeezerMonths" className="select-style">
                                        <option value="-">Select</option>
                                        <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                        <option value="25 MAD">1 Months </option>
                                        <option value="50 MAD">3 Months </option>
                                        <option disabled value="0 MAD">---UPGRADE---</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="deezer" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyDeezer}>BUY</button>
                                    {/*deezer*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ✅Private account you can change the email and password <br />
                                        ✅We are Warranty <br />
                                        ✅listen to High-quality music with Deezer.<br />
                                        ✅You can listen to your favorites on many devices.<br />
                                        If you have any problem during 3 months please contact us and we will be happy to fix it </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="PRIMEVIDEO.JPEG" alt="" />
                            <div className="content">
                                <span>PRIME VIDEO</span>
                                <h6 className="SocialInfos">( NEW PRIVATE ACCOUNT )</h6>
                                <p>
                                    <select name id="PrimeMonths" className="select-style">
                                        <option value="-">Select</option>
                                        <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                        <option value="40 MAD">1 Months </option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="prime" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyPrime}>BUY</button>
                                    {/*prime*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ✅ Full access account, means you can change Email and Password<br />
                                        ✅ 6 profile total<br />
                                        ✅ Full Guaranteed <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="disney.jpeg" alt="" />
                            <div className="content">
                                <span>DISNEY</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="DisneyProfile">
                                        <option value="-">Select</option>
                                        <option value={0}>2 PROFILE</option>
                                        <option value={10}>3 PROFILE</option>
                                        <option value={15}>4 PROFILE</option>
                                        <option value={20}>5 PROFILE</option>
                                        <option value={25}>6 PROFILE</option>
                                    </select>
                                    <select name id="DisneyMonths">
                                        <option value="-">Select</option>
                                        <option value={50}>1 MONTHS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="disney" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyDisney}>BUY</button>
                                    {/*disney*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅ Disney+ account.<br />
                                        ✅ Product warranty.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="crunchy.jpeg" alt="" />
                            <div className="content">
                                <span>CRUNCHY ROLL</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="CrunchyMonths">
                                        <option value="-">Select</option>
                                        <option disabled value="-">--MEGA FUN--</option>
                                        <option value="45 MAD">1 MONTHS</option>
                                        <option value="55 MAD">1 MONTHS PV</option>
                                        <option value="190 MAD">12 MONTHS</option>
                                        <option disabled value="-">--PREMIUM--</option>
                                        <option value="35 MAD">1 MONTHS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="crunchy" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyCrunchy}>BUY</button>
                                    {/*crunchy*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅ Full warranty  <br />
                                        ✅ you don't need VPN to use the account<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="hbo.jpeg" alt="" />
                            <div className="content">
                                <span> HBO MAX</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="HboMonths">
                                        <option value="-">Select</option>
                                        <option disabled value="-">Not Available</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="hbo" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button style={{ cursor: 'not-allowed' }}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ✅ AD FREE <br />
                                        ✅ Full warranty subscription<br />
                                        ✅ If there is any problem please contact as via WhatsApp </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*social media services*/}
                    <p className="titleProduct">OUR <span>SOCIAL MEDIA</span> SERVICES </p>
                    <div className="container15">
                        <div className="wrapper">
                            <img src="youtube.png" alt="" />
                            <div className="content">
                                <span>YOUTUBE</span>
                                <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                <p>
                                    <select name id="youtubeService">
                                        <option value="-">Select</option>
                                        <option disabled value="50 MAD">---PREMIUM PRIVATE---</option>
                                        <option value="105 MAD">3 MONTHS PREMIUM </option>
                                        <option value="300 MAD">1 YEAR PREMIUM + MUSIC</option>
                                        <option disabled value="50 MAD">---LIKES---</option>
                                        <option value="50 MAD">1K LIKES</option>
                                        <option value="90 MAD">2K LIKES</option>
                                        <option value="130 MAD">3K LIKES</option>
                                        <option disabled value="50 MAD">---VIEWS---</option>
                                        <option value="50 MAD">1K [HQ] VIEWS</option>
                                        <option value="65 MAD">1K [HQ] REAL VIEWS</option>
                                        <option value="90 MAD">2K [HQ] VIEWS</option>
                                        <option value="120 MAD">2K [HQ] REAL VIEWS</option>
                                        <option disabled value="50 MAD">---FOLLOWERS---</option>
                                        <option value="190 MAD">500 [HQ] FOLLOWERS</option>
                                        <option value="350 MAD">1K [HQ] FOLLOWERS</option>
                                        <option disabled value="50 MAD">---WATCHTIME---</option>
                                        <option value="120 MAD">500 [HQ] WATCHTIME</option>
                                        <option value="230 MAD">1K [HQ] WATCHTIME</option>
                                        <option value="450 MAD">2K [HQ] WATCHTIME</option>
                                        <option value="890 MAD">4K [HQ] WATCHTIME</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="youtube" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyYoutube}>BUY</button>
                                    {/*youtube*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p><p> Our service is recommended because of our [HQ] Hight Quality services, Not like others seller <br />
                                        ->  Guarantee: 30 Days Refill

                                    </p></p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="snapchat.png" alt="" />
                            <div className="content">
                                <span>SNAPCHAT</span>
                                <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                <p>
                                    <select name id="snapchatService">
                                        <option value="-">Select</option>
                                        <option disabled value="50 MAD">---FOLLOWERS---</option>
                                        <option value="190 MAD">100 [HQ] REAL </option>
                                        <option value="590 MAD">500 [HQ] REAL </option>
                                        <option disabled value="50 MAD">--SNAPCHAT + --</option>
                                        <option value="15 MAD">1 MONTH SNAP+</option>
                                        <option value="30 MAD">2 MONTHS SNAP+</option>
                                        <option value="40 MAD">3 MONTHS SNAP+</option>
                                        <option value="85 MAD">1 YEAR SNAP+</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="snapchat" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buySnapchat}>BUY</button>
                                    {/*snap*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p> Our service is recommended because of our [HQ] Hight Quality followers, Not like others seller <br />
                                        ->  Guarantee: 30 Days Refill

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="tiktok.png" alt="" />
                            <div className="content">
                                <span>TIK-TOK</span> <br />
                                <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                <p>
                                    <select name id="tiktokService">
                                        <option value="-">Select</option>
                                        <option value="120 MAD">1K FOLLOWERS</option>
                                        <option value="75 MAD">1K LIKES</option>
                                        <option value="55 MAD">10K VIEWS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="tiktok" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyTiktok}>BUY</button>
                                    {/*TIKTOK*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="insta.png" alt="" />
                            <div className="content">
                                <span>INSTAGRAM</span>
                                <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                <p>
                                    <select name id="instagramService">
                                        <option value="-">Select</option>
                                        <option disabled value="-">-FOLLOWERS HQ-</option>
                                        <option value="30 MAD">1K FOLLOWERS </option>
                                        <option value="100 MAD">5K FOLLOWERS </option>
                                        <option value="180 MAD">10K FOLLOWERS </option>
                                        <option disabled value="-">-FOLLOWERS NO DROP-</option>
                                        <option value="35 MAD">1K FOLLOWERS[ND]</option>
                                        <option value="110 MAD">5K FOLLOWERS[ND]</option>
                                        <option value="190 MAD">10K FOLLOWERS[ND]</option>
                                        <option disabled value="-">-LIKES NO DROP-</option>
                                        <option value="15 MAD">1K LIKE </option>
                                        <option value="30 MAD">5K LIKES </option>
                                        <option value="50 MAD">10K LIKES </option>
                                        <option value="90 MAD">20K LIKES </option>
                                        <option disabled value="-">-COMMENTS-</option>
                                        <option value="15 MAD">10 COMMENTS </option>
                                        <option value="25 MAD">20 COMMENTS </option>
                                        <option value="35 MAD">30 COMMENTS </option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="instagram" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyInstagram}>BUY</button>
                                    {/*insta*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>[ND] MEANS That the followers w'ont drop, We give also 30Days Warranty on this offer <br />[HQ] MEANS that the followers are Hight Quality but we will give just 7Days warranty </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="facebook.png" alt="" />
                            <div className="content">
                                <span>FACEBOOK</span>
                                <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                <p>
                                    <select name id="facebookService">
                                        <option value="-">Select</option>
                                        <option value="90 MAD">1K FOLLOWERS</option>
                                        <option value="85 MAD">1K LIKES</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="facebook" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyFacebook}>BUY</button>
                                    {/*facebook*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="twitch.png" alt="" />
                            <div className="content">
                                <span>TWITCH</span>
                                <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                <p>
                                    <select name id="twitchService">
                                        <option value="-">Select</option>
                                        <option value="60 MAD">1K FOLLOWERS</option>
                                        <option disabled value="25 MAD">--TIER 1--</option>
                                        <option value="25 MAD">1 MONTHS</option>
                                        <option value="50 MAD">3 MONTHS</option>
                                        <option value="90 MAD">6 MONTHS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="twitch" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyTwitch}>BUY</button>
                                    {/*twitch*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* our streaming */}

                    <p className="titleProduct">OUR STREAMING <span>SERVICES</span></p>
                    <div className="container10">
                        <div className="wrapper">
                            <img src="nba.png" alt="" />
                            <div className="content">
                                <span>NBA LEAGUE PASS</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="nbaLeagueService">
                                        <option value="-">Select</option>
                                        <option value="45 MAD">1 MONTH</option>
                                        <option value="110 MAD">3 MONTHS</option>

                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="nbaLeaguePrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buynbaLeague}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅ NBA League Pass account with NBA TV<br />
                                        ✅ + Warranty. <br /> More info CONTACT US +212 637976257</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="hulu.png" alt="" />
                            <div className="content">
                                <span>HULU</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="huluService">
                                        <option value="-">Select</option>
                                        <option value="35 MAD">1 MONTH</option>
                                        <option value="95 MAD">3 MONTHS NO ADS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="huluPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyHulu}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ✅ Worldwide and All Devices <br />
                                        ✅ + Warranty

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="ufc.png" alt="" />
                            <div className="content">
                                <span>UFC FIGHT PASS</span>
                                <h6 className="SocialInfos">( + WARRANTY )</h6>
                                <p>
                                    <select name id="ufcFightService">
                                        <option value="-">Select</option>
                                        <option value="90 MAD">3 MONTHS</option>
                                        <option value="170 MAD">6 MONTHS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="ufcFightPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyUfcFight}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ✅ Works on Mobile Phones, PC, Tablets, Laptops, Smart TV's<br />
                                        ✅ + Warranty

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*other services*/}
                    <p className="titleProduct">OTHER <span>SERVICES</span></p>
                    <div className="container9">
                        <div className="wrapper">
                            <img src="8BALL.JPEG" alt="" />
                            <div className="content">
                                <span>8 BALL POOL</span>
                                <h6 className="SocialInfos">( PRIVATE ACCOUNT )</h6>
                                <p>
                                    <select name id="firstUsaService">
                                        <option value="-">Select</option>
                                        <option value="55 MAD">100M COIN+ALL TABLES </option>
                                        <option value="55 MAD">DIAMOND CUE</option>
                                        <option value="155 MAD">1B💸 +💎CUE+OUTBREAK </option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buy8ball}>BUY</button>
                                    {/*8BALL*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Note - Please Don't Send Coins in Mobile through Jakarta table. <br /> This Account is using Miniclip Login
                                        Device: Pc/Android/IOS<br />
--> Password of the account can be changed from miniclip.com Website <br />
                                        <span style={{ fontWeight: 'bold' }}>Details will be provided after purchasing, thank you.</span><br />
                                        We will give The warranty if you don't break the rules

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="crosscomms.jpeg" alt="" />
                            <div className="content">
                                <span>CROSS COMMS</span>
                                <h6 className="SocialInfos">( TOP UP IN YOUR ACCOUNT )</h6>
                                <p>
                                    <select name id="secondUsaService">
                                        <option value="-">Select</option>
                                        <option value="60 MAD">ON MY ACCOUNT</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="secondUsaPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyCrosscomms}>BUY</button>
                                    {/*CROSS COMMS*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>After buying, we will need your fortnite account to login and buy this pack </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="harley.jpeg" />
                            <div className="content">
                                <span>HARLEY QUINN <span style={{ fontSize: '14px' }}> [RARE]</span> </span> <br />
                                <h6 className="SocialInfos">( GIFT CARD [KEY] )</h6>
                                <p>
                                    <select name id="thirdUsaService">
                                        <option value="-">Select</option>
                                        <option value="130 MAD">ON MY ACCOUNT</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="thirdUsaPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyHarley}>BUY</button>
                                    {/*HARLEY QUEEN*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>After buying, we won't need your fortnite account to login  <br />This is a gift card code <br />
                                        <span style={{ fontWeight: 'bold' }}>How do I redeem a code on Fortnite ? </span><br />
                                        The whole process is simple. Log in to your account (https://www.epicgames.com/site/fr/home) and in the top right corner click redeem code. Enter your code and click redeem.
                                        <p />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="GRAPLING.JPEG" alt="" />
                            <div className="content">
                                <span>GRAPPLING CLAW</span>
                                <h6 className="SocialInfos">( GIFT CARD [KEY] )</h6>
                                <p>
                                    <select name id="GrapplingClaw1">
                                        <option value="-">Select</option>
                                        <option value="100 MAD">ON MY ACCOUNT</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="GrapplingClawPrice1" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyGrapplingClaw}>BUY</button>
                                    {/*GRAPPLING CLAW*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>After buying, we won't need your fortnite account to login  <br />This is a gift card code <br />
                                        <span style={{ fontWeight: 'bold' }}>How do I redeem a code on Fortnite ? </span><br />
                                        The whole process is simple. Log in to your account (https://www.epicgames.com/site/fr/home) and in the top right corner click redeem code. Enter your code and click redeem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="random.jpeg" alt="" />
                            <div className="content">
                                <span>RANDOM ACCOUNT </span>
                                <h6 className="SocialInfos">( PRIVATE + MAIL ACCESS )</h6>
                                <p>
                                    <select name id="GrapplingClaw2">
                                        <option value="-">Select</option>
                                        <option value="150 MAD">20 + SKINS</option>
                                        <option value="320 MAD">70 + SKINS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="GrapplingClawPrice2" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyRandomeFortniteAccount}>BUY</button>
                                    {/*RANDOM FORTNITE ACCOUNT */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✔️ These accounts 100% have 60+ skins and other random In-game Items <br />
                                        ✔️ Every account has been manually tested before being loaded into this shop <br />
                                        ⚡️A lot of accounts in this box have RARE SKINS <br />
                                        ⚡️A lot of accounts have 1000+ vb. You have a chance to get an account with 58240 vb!! <br />
                                        ✔️ WITH HIGH CHANCES TO GET:<br />
                                        ■ Black Knight <br />
                                        ■ Ghoul Trooper <br />
                                        ■ Renegade Raider <br />
                                        ■ Recon Expert <br />
                                        ■ Aerial Assault<br />
                                        ■ IKONIK<br />
                                        ■ Galaxy<br />
                                        ■ Skull Trooperv
                                        ■ And other rare skinsv
                                        Features:<br />
                                        ⚡️You will receive a login password from your account, as well as access to mail<br />
                                        ⚡️The credentials can be changed
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="vbucks.jpeg" alt="" />
                            <div className="content">
                                <span>13k V-BUCKS ACCOUNT</span>
                                <h6 className="SocialInfos">( PRIVATE + MAIL ACCESS )</h6>
                                <p>
                                    <select name id="GrapplingClaw3">
                                        <option value="-">Select</option>
                                        <option value="340 MAD">NEW ACCOUNT</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="GrapplingClawPrice3" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buy13kVnucks}>BUY</button>
                                    {/*13k vbucks fortnite */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Fortnite Account with V-Bucks, Can be Bound to Mobile Phones <br /> You Can Change Mail and Password, 100% Safe Guaranteed!
--> The V-Bucks in the account can be used on Android IOS PC.<br />
--> You can give skin to another account on any platform through the friend function.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*STEAM services*/}
                    <p className="titleProduct">OUR STEAM <span>SERVICES</span></p>
                    <div className="container10">
                        <div className="wrapper">
                            <img src="resident.jpeg" alt="" />
                            <div className="content">
                                <span> RESIDENT EVIL +2 GAMES </span>
                                <h6 className="SocialInfos">( FOR JUST OFFLINE PLAYING )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 90 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyResidentEvil4}>BUY</button>
                                    {/*residentEvil steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ACCOUNT WITH ONLY OFFLINE FUNCTIONALITY<br /> You dont't have the possibility to change the credentials <br /> We offer a lifetime Warranty if you dont't  break the rules </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="rdr2+gta5.jpg" alt="" />
                            <div className="content">
                                <span>GTA5 + RDR2 Pv Account</span>
                                <h6 className="SocialInfos">( FULL ACCESS + MAIL )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 150 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyGta5AndRdr2}>BUY</button>
                                    {/*gta 5 + RDR2 steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        GTA V + RDR2 Rockstar Games Account (Social Club) <br />
                                        ACCOUNT WITH ONLINE FUNCTIONALITY<br />
                                        🔥 We will provide you with RED DEAD REDEMPTION 2 (RDR2) AND GRAND THEFT AUTO V (GTA V) account with full mail access! 🔥
                                        ✅ YOU WILL HAVE THE POSSIBILITY TO CHANGE ACCOUNT TO PERSONAL EMAIL ✅<br />
                                        Features:<br />
                                        ✅ FIVEM Working<br />
                                        ✅ Full Mail Access<br />
                                        ✅ Online Functionality<br />
                                        ✅ Offline Story Mode Functionality<br />
                                        ✅ Guide to Installation if you're stuck at some point<br />
                                        ✅ Account is at very low price, get yours before it runs out
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="fh5.png" alt="" />
                            <div className="content">
                                <span>FH 5 Pv Account </span>
                                <h6 className="SocialInfos">( FULL ACCESS + MAIL )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 110 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyFh5}>BUY</button>
                                    {/*FH5 steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ✅ After the purchase, you will get the Account and Password, as well as the account password of the original mailbox <br />
                                        ✅ This is a Fresh Account with Full access and No Role Created (0 hours)<br /></p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="thelou.jpeg" alt="" />
                            <div className="content">
                                <span> THE LAST OF US </span>
                                <h6 className="SocialInfos">( FOR JUST OFFLINE PLAYING )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 80 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyLastOfUs}>BUY</button>
                                    {/*lastOfUs steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ACCOUNT WITH ONLY OFFLINE FUNCTIONALITY<br /> You dont't have the possibility to change the credentials <br /> We offer a lifetime Warranty if you dont't  break the rules</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="GOW2018.JPEG" alt="" />
                            <div className="content">
                                <span> GOD OF WAR </span>
                                <h6 className="SocialInfos">( FOR JUST OFFLINE PLAYING )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 80 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyGow2018}>BUY</button>
                                    {/*gow steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ACCOUNT WITH ONLY OFFLINE FUNCTIONALITY<br /> You dont't have the possibility to change the credentials <br /> We offer a lifetime Warranty if you dont't  break the rules</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="GTA5ALONE.JPEG" alt="" />
                            <div className="content">
                                <span>GTA 5 Pv Account</span>
                                <h6 className="SocialInfos">( FULL ACCESS + MAIL )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 100 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyGta5Alone}>BUY</button>
                                    {/*gta 5 steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ✅ After the purchase, you will get the Account and Password, as well as the account password of the original mailbox <br />
                                        ✅ This is a Fresh Account with Full access and No Role Created (0 hours)<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="hogwarts.jpeg" alt="" />
                            <div className="content">
                                <span> HOGWARTS LEGACY </span>
                                <h6 className="SocialInfos">( FOR JUST OFFLINE PLAYING )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 90 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyHogwart}>BUY</button>
                                    {/*HOGWARTS steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ACCOUNT WITH ONLY OFFLINE FUNCTIONALITY<br /> You dont't have the possibility to change the credentials <br /> We offer a lifetime Warranty if you dont't  break the rules</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="uncharted.jpeg" alt="" />
                            <div className="content">
                                <span> UNCHARTED LEGACY </span>
                                <h6 className="SocialInfos">( FOR JUST OFFLINE PLAYING )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 80 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyUncharted}>BUY</button>
                                    {/*UNCHARTED steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ACCOUNT WITH ONLY OFFLINE FUNCTIONALITY<br /> You dont't have the possibility to change the credentials <br /> We offer a lifetime Warranty if you dont't  break the rules</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="f1Manager+f1.jpg" alt="" />
                            <div className="content">
                                <span> F1 + F1 MANAGER </span>
                                <h6 className="SocialInfos">( FOR JUST OFFLINE PLAYING )</h6>
                                <p>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstUsaPrice" className="price">PRICE : 100 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyF1AndF1Manager}>BUY</button>
                                    {/*F1 + F1 MANAGER steam */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        ACCOUNT WITH ONLY OFFLINE FUNCTIONALITY<br /> You dont't have the possibility to change the credentials <br /> We offer a lifetime Warranty if you dont't  break the rules</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*morocco services*/}
                    <p className="titleProduct">OUR PS PLUS <span>SERVICES</span></p>
                    <div className="container10">
                        <div className="wrapper">
                            <img src="moroccoAccount.jpg" alt="" />
                            <div className="content">
                                <span>1 MONTHS PS+ ACCOUNT</span>
                                <h6 className="SocialInfos">( IN YOUR ACCOUNT ))</h6>
                                <p>
                                    <select name id="firstMoroccoService">
                                        <option value="-">Select</option>
                                        <option value="60 MAD">ESSENTIALS</option>
                                        <option value="80 MAD">EXTRA</option>
                                        <option value="100 MAD">DELUXE</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="firstMoroccoPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyPsPlus}>BUY</button>
                                    {/*PS PLUS musicva*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅ Ps+ Subscription on your account, After buying you will just need to send us via WhatsApp the email and password of your psn account <br /> More info CONTACT US +212 637976257</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="moroccoAccount2.jpg" alt="" />
                            <div className="content">
                                <span>3 MONTHS PS+ ACCOUNT</span>
                                <h6 className="SocialInfos">( IN YOUR ACCOUNT ))</h6>
                                <p>
                                    <select name id="secondMoroccoService">
                                        <option value="-">Select</option>
                                        <option value="120 MAD">ESSENTIALS</option>
                                        <option value="190 MAD">EXTRA</option>
                                        <option value="210 MAD">DELUXE</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="secondMoroccoPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyPsPlus2}>BUY</button>
                                    {/*PS PLUS */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅ Ps+ Subscription on your account, After buying you will just need to send us via WhatsApp the email and password of your psn account <br /> More info CONTACT US +212 637976257</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="moroccoAccount3.jpg" alt="" />
                            <div className="content">
                                <span>12 MONTHS PS+ ACCOUNT</span>
                                <h6 className="SocialInfos">( IN YOUR ACCOUNT ))</h6>
                                <p>
                                    <select name id="thirdMoroccoService">
                                        <option value="-">Select</option>
                                        <option value="250 MAD">ESSENTIALS</option>
                                        <option value="380 MAD">EXTRA</option>
                                        <option value="420 MAD">DELUXE</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="thirdMoroccoPrice" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyPsPlus3}>BUY</button>
                                    {/*PS PLUS */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>✅ Ps+ Subscription on your account, After buying you will just need to send us via WhatsApp the email and password of your psn account <br /> More info CONTACT US +212 637976257</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="titleProduct">OUR <span>PS4</span> /<span> PS5 GAMES</span> </p>
                    <div className="container">
                        <div className="wrapper2">
                            <img src="fifa23Games.png" alt="" />
                            <div className="content">
                                <span>FIFA 23</span>
                            </div>
                            <div className="row">
                                <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} name id="fifa23Plateforme">
                                    <option value="-">Select</option>
                                    <option value="230 MAD ">PS4 Primary</option>
                                    <option value="210 MAD">PS4 Secondary</option>
                                    <option value="285 MAD ">PS5 Primary</option>
                                    <option value="220 MAD ">PS5 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div id="fifaPrice" className="price">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyFifa23}>BUY</button>
                                    {/*FIFA 23*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about spotify product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper2">
                            <img src="bo3.png" alt="" />
                            <div className="content">
                                <span>BO3</span>
                            </div>
                            <div className="row">
                                <select name id="bo3Plateforme" style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }}>
                                    <option value="-">Select</option>
                                    <option value="245 MAD ">PS4 Primary</option>
                                    <option value="180 MAD ">PS4 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div id="bo3Price" className="price">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyBo3}>BUY</button>
                                    {/*BO3*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about netflix product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper2">
                            <img src="asseto.png" alt="" />
                            <div className="content">
                                <span>ASSETO CORSA</span>
                            </div>
                            <div className="row">
                                <select name id="assetoPlateforme" style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }}>
                                    <option value="-">Select</option>
                                    <option value="125 MAD ">PS4 Primary</option>
                                    <option value="90 MAD">PS4 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div id="assetoPrice" className="price">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyAsseto}>BUY</button>
                                    {/*ASSETO*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about discord product goes here...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4
                        className="containerText"
                        onClick={() => {
                            document.querySelector('.container2').style.display = 'flex';
                            document.querySelector('.containerText').style.display = 'none';
                            document.querySelector('.containerText2').style.display = 'block';
                        }}
                    >
                        SHOW MORE
                    </h4>
                    {/*Voir plus ps4/ games */}
                    <div className="container2">
                        <div className="wrapper2">
                            <img src="f1-22.png" alt="" />
                            <div className="content">
                                <span>F1 2022</span>
                            </div>
                            <div className="row">
                                <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} name id="f1Plateforme">
                                    <option value="-">Select</option>
                                    <option value="290 MAD ">PS4 Primary</option>
                                    <option value="235 MAD ">PS4 Secondary</option>
                                    <option value="300 MAD ">PS5 Primary</option>
                                    <option value="235 MAD ">PS5 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div id="f1Price" className="price">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyF1}>BUY</button>
                                    {/*F1*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about spotify product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper2">
                            <img src="gta5Games.png" alt="" />
                            <div className="content">
                                <span>GTA 5</span>
                            </div>
                            <div className="row">
                                <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} name id="gtaPlateforme">
                                    <option value="-">Select</option>
                                    <option value="200 MAD ">PS4 Primary</option>
                                    <option value="150 MAD ">PS4 Secondary</option>
                                    <option value="345 MAD ">PS5 Primary</option>
                                    <option value="235 MAD ">PS5 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div id="gtaPrice" className="price">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyGta5}>BUY</button>
                                    {/*GTA 5*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about netflix product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper2">
                            <img src="ragnarok.png" alt="" />
                            <div className="content">
                                <span>GOW RAGNAROK</span>
                            </div>
                            <div className="row">
                                <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} name id="ragnarokPlateforme">
                                    <option value="-">Select</option>
                                    <option value="455 MAD ">PS4 Primary</option>
                                    <option value="320 MAD ">PS4 Secondary</option>
                                    <option value="455 MAD ">PS5 Primary</option>
                                    <option value="320 MAD ">PS5 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div id="ragnarokPrice" className="price">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyRagnarok}>BUY</button>
                                    {/*RAGNAROK*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about discord product goes here...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="containerText2" onClick={() => {
                        document.querySelector('.container2').style.display = 'flex';
                        document.querySelector('.container3').style.display = 'flex';
                        document.querySelector('.containerText').style.display = 'none';
                        document.querySelector('.containerText2').style.display = 'none';
                    }}>
                        SHOW MORE
                    </h4>
                    {/*Voir plus */}
                    <div className="container3">
                        <div className="wrapper2">
                            <img src="milesmoral.png" alt="" />
                            <div className="content">
                                <span> MILES MORALES</span>
                            </div>
                            <div className="row">
                                <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} name id="spidermanPlateforme">
                                    <option value="-">Select</option>
                                    <option value="245 MAD ">PS4 Primary</option>
                                    <option value="210 MAD ">PS4 Secondary</option>
                                    <option value="255 MAD ">PS5 Primary</option>
                                    <option value={220}>PS5 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div className="price" id="spidermanPrice">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyMiles}>BUY</button>
                                    {/*MILES MORALS*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about spotify product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper2">
                            <img src="rdr2.png" alt="" />
                            <div className="content">
                                <span>RDR 2</span>
                            </div>
                            <div className="row">
                                <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} name id="rdrPlateforme">
                                    <option value="-">Select</option>
                                    <option value="355 MAD ">PS4 Primary</option>
                                    <option value="265 MAD ">PS4 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div className="price" id="rdrPrice">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyRdr2}>BUY</button>
                                    {/*RDR2*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about netflix product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper2">
                            <img src="fifa22.png" alt="" />
                            <div className="content">
                                <span>FIFA 22</span>
                            </div>
                            <div className="row">
                                <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} name id="fifa22Plateforme">
                                    <option value="-">Select</option>
                                    <option value="170 MAD ">PS4 Primary</option>
                                    <option value="135 MAD ">PS4 Secondary</option>
                                    <option value="180 MAD ">PS5 Primary</option>
                                    <option value="145 MAD ">PS5 Secondary</option>
                                </select>
                                <div className="buttons">
                                    <div className="price" id="fifa22Price">PRICE :</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={this.buyFifa22}>BUY</button>
                                    {/*FIFA 22*/}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about discord product goes here...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="titleProduct">OUR <span>GIFT CARDS </span>/<span> ACCOUNT</span> </p>
                    <div className="container4">
                        <div className="wrapper">
                            <img src="psn5euro.jpeg" alt="" />
                            <div className="content">
                                <span>PSN 5€ - France</span>
                            </div>
                            <div className="row">
                                <div className="price">PRICE : 70 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyPsn5euro}>BUY</button>
                                    {/*PSN5EU  */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        PSN GIFT CARD <br /> How to redeem it ? <br />  1- Go to PlayStation Store and click on your Avatar at the top of the screen.<br />
                                        2- Select Redeem Codes from the drop-down menu.<br />
                                        3- Carefully enter the code and select Redeem.<br />
                                        4- The credit or content is now applied to your account
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="psn10euro.jpeg" alt="" />
                            <div className="content">
                                <span>PSN 10€ - France</span>
                            </div>
                            <div className="row">
                                <div className="price">PRICE : 130 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyPsn10euro}>BUY</button>
                                    {/*PSN10EU  */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        PSN GIFT CARD <br /> How to redeem it ? <br />  1- Go to PlayStation Store and click on your Avatar at the top of the screen.<br />
                                        2- Select Redeem Codes from the drop-down menu.<br />
                                        3- Carefully enter the code and select Redeem.<br />
                                        4- The credit or content is now applied to your account
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="psn20euro.jpeg" alt="" />
                            <div className="content">
                                <span>PSN 20€ - France</span>
                            </div>
                            <div className="row">
                                <div className="price">PRICE : 250 MAD</div>
                                <div className="buttons">
                                    <button onClick={this.buyPsn20euro}>BUY</button>
                                    {/*PSN20EU  */}
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        PSN GIFT CARD <br /> How to redeem it ? <br />  1- Go to PlayStation Store and click on your Avatar at the top of the screen.<br />
                                        2- Select Redeem Codes from the drop-down menu.<br />
                                        3- Carefully enter the code and select Redeem.<br />
                                        4- The credit or content is now applied to your account
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="containerText3" onClick={() => { // Use onClick instead of onclick
                        document.querySelector('.container5').style.display = 'flex';
                        document.querySelector('.containerText2').style.display = 'none';
                        document.querySelector('.containerText3').style.display = 'none';
                        document.querySelector('.containerText4').style.display = 'block';
                    }}>
                        SHOW MORE
                    </h4>
                    {/*Voir plus gift cardes */}
                    <div className="container5">
                        <div className="wrapper">
                            <img src="PSplusAccount.jpeg" alt="" />
                            <div className="content">
                                <span>PSN ACCOUNT </span>
                                <p>
                                    <select name id="psnAccountService">
                                        <option value="-" >Select</option>
                                        <option disabled value={34}>Not available</option>

                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="psnAccount" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button style={{ cursor: 'not-allowed' }}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about netflix product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="psPlus.jpeg" alt="" />
                            <div className="content">
                                <span>PSN GIFT CARD</span>
                                <p>
                                    <select name id="psnService">
                                        <option value="-" >Select</option>
                                        <option value={4} disabled>Not available</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="psn" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button style={{ cursor: 'not-allowed' }}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        PSN GIFT CARD <br /> How to redeem it ? <br />  1- Go to PlayStation Store and click on your Avatar at the top of the screen.<br />
                                        2- Select Redeem Codes from the drop-down menu.<br />
                                        3- Carefully enter the code and select Redeem.<br />
                                        4- The credit or content is now applied to your account
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="valoCard.jpeg" alt="" />
                            <div className="content">
                                <span>VALORANT </span>
                                <p>
                                    <select name id="valoService">
                                        <option value="-">Select</option>
                                        <option value={160}>1000 PTS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="valo" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyValoService}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Valorant Redeem Card <br />
                                        How to redeem it ?<br />
                                        1- Log into the VALORANT game client.<br />
                                        2- Click on the VALORANT icon located to the right of the Store tab.<br />
                                        3- Select Prepaid Cards and Codes.<br />
                                        4- Input the code provided for your card.<br />
                                        5- Press Submit.<br />
                                        Enjoy your VALORANT Points!<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="containerText4" onClick={() => {
                        document.querySelector('.container6').style.display = 'flex';
                        document.querySelector('.containerText2').style.display = 'none';
                        document.querySelector('.containerText3').style.display = 'block';
                        document.querySelector('.containerText4').style.display = 'none';
                        document.querySelector('.containerText5').style.display = 'block';
                    }}>
                        SHOW MORE
                    </h4>
                    {/* 2EME Voir plus gift cardes */}
                    <div className="container6">
                        <div className="wrapper">
                            <img src="xboxGod3mois.jpeg" alt="" />
                            <div className="content">
                                <span>XBOX LIVE GOLD</span>
                                <p>
                                    <select name id="goldService">
                                        <option value="-">Select</option>
                                        <option value={34} disabled>1 MONTHS</option>
                                        <option value={250}>3 MONTHS</option>
                                        <option value={600}>12 MONTHS</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="gold" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyXboxLiveGold}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>How to redeem a code on Xbox Series X|S and Xbox One ? </span><br />
                                        1- Press the Xbox button to open the guide, and then select Store. <br />
                                        2- Press the View button to open the side menu, and then select Redeem.<br />
                                        3- Enter the 25-character code, select Next, and then follow the prompts.<br />

                                        <span style={{ fontWeight: 'bold' }}>How to redeem a code from a PC or mobile web browser ? </span><br />
                                        1- From a web browser, go to redeem.microsoft.com.<br />
                                        2- Enter the 25-character code, select Next, and then follow the prompts.<br />

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="itunes.jpeg" alt="" />
                            <div className="content">
                                <span>ITUNES</span>
                                <p>
                                    <select name id="itunesService">
                                        <option value="-">Select</option>


                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="itunes" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button style={{ cursor: 'not-allowed' }} onClick={this.buyItunes}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>Information about spotify product goes here...</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="Xbox-game-pass-gift-card.webp" alt="" />
                            <div className="content">
                                <span>XBOX GAME PASS </span>
                                <p>
                                    <select name id="gamepassService">
                                        <option value="-">Select</option>
                                        <option disabled value="-">--Xbox & Pc--</option>
                                        <option value={80}>2 Months</option>
                                        <option value={150}>4 Months</option>
                                        <option disabled value="-">--Only Pc--</option>
                                        <option value={65}>3 Months</option>
                                        <option disabled value="-">--Top Up--</option>
                                        <option value={320}>10 Months</option>



                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="gamepass" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyGamepassXbox}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>How to redeem a code on Xbox Series X|S and Xbox One ? </span><br />
                                        1- Press the Xbox button to open the guide, and then select Store. <br />
                                        2- Press the View button to open the side menu, and then select Redeem.<br />
                                        3- Enter the 25-character code, select Next, and then follow the prompts.<br />

                                        <span style={{ fontWeight: 'bold' }}>How to redeem a code from a PC or mobile web browser ? </span><br />
                                        1- From a web browser, go to redeem.microsoft.com.<br />
                                        2- Enter the 25-character code, select Next, and then follow the prompts.<br />

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="containerText5" onClick={() => {
                        document.querySelector('.container7').style.display = 'flex';
                        document.querySelector('.containerText2').style.display = 'none';
                        document.querySelector('.containerText3').style.display = 'none';
                        document.querySelector('.containerText4').style.display = 'none';
                        document.querySelector('.containerText5').style.display = 'none';
                    }}>
                        SHOW MORE
                    </h4>
                    {/* TROISIEME Voir plus gift cardes */}
                    <div className="container7">
                        <div className="wrapper">
                            <img src="steam.png" alt="" />
                            <div className="content">
                                <span>STEAM CARDS</span>
                                <p>
                                    <select name id="steamService">
                                        <option value="-">Select</option>
                                        <option value={170}>10 Euro</option>
                                        <option value={290}>20 Euro</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="steam" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buySteam}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p> <span style={{ fontWeight: 'bold' }}>How to redeem it ?</span> <br />
                                        1- LOGIN TO YOUR STEAM ACCOUNT.<br />
                                        2- CLICK ON YOUR ACCOUNT NAME, THEN CLICK ACCOUNT DETAILS.<br />
                                        3- CLICK ON “ADD FUNDS TO YOUR STEAM WALLET”. <br />
                                        4- CLICK “REDEEM A STEAM WALLET CODE”.<br />
                                        5- ENTER YOUR STEAM WALLET GIFT CARD SENT TO YOU FROM MYGIFTCARDSUPPLY.<br />
                                        6- ENTER YOUR A US ADDRESS. <br />
                                        CONGRATS!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="ROBLOX.JPEG" alt="" />
                            <div className="content">
                                <span>ROBLOX</span>
                                <p>
                                    <select name id="robloxService">
                                        <option value="-">Select</option>
                                        <option disabled value="-">-ROBUX + PREMIUM-</option>
                                        <option value="115 MAD">1k RBX + 1MONTHS </option>
                                        <option value="20 MAD">2k RBX + 1MONTHS </option>
                                        <option disabled value="-">--ONLY ROBUX--</option>
                                        <option value="120 MAD">800 RBX </option>
                                        <option value="160 MAD">1200 RBX </option>
                                        <option value="220 MAD">1700 RBX </option>
                                        <option value="250 MAD">2000 RBX </option>
                                        <option value="500 MAD">4500 RBX </option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="roblox" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyRoblox}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>How to redeem it ?</span> <br />

                                        STEP 1: Use a browser to access your Roblox account.<br />
                                        STEP 2: Navigate to the Code Redeem Page www.roblox.com /redeem.<br />
                                        STEP 3: Fill in the blanks with your code.<br />
                                        STEP 4: Click the Redeem button.<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <img src="windows.png" alt="" />
                            <div className="content">
                                <span>LIFETIME KEY </span>
                                <p>
                                    <select name id="officeService">
                                        <option value="-">Select</option>
                                        <option disabled value="-">--LIFETIME KEY--</option>
                                        <option value="90 MAD">WINDOWS 10 PRO</option>
                                        <option value="100 MAD">WINDOWS 11 PRO</option>
                                        <option value="120 MAD"> OFFICE</option>
                                    </select>
                                </p>
                            </div>
                            <div className="row">
                                <div id="office" className="price">PRICE :</div>
                                <div className="buttons">
                                    <button onClick={this.buyOffice}>BUY</button>
                                    <button className="info-btn">INFOS</button>
                                </div>
                            </div>
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-btn">×</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*benefits*/}
                    <p className="benefitQuestion">WHY <span> CHOOSE</span> US ? </p>
                    <div id="benefits">
                        <div style={{ marginRight: '100px' }}>
                            <label style={{ fontSize: '60px' }}><i className="fas fa-stopwatch" /></label>
                            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Fast Delivery </p>
                            <p style={{ fontSize: '14px' }}>Fastest delivery on epin websites. </p>
                        </div>
                        <div style={{ marginRight: '100px' }}>
                            <label style={{ fontSize: '60px' }}><i className="fas fa-headset" /></label>
                            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Live Support </p>
                            <p style={{ fontSize: '14px' }}>It is at your service between 10.00 in the morning and 02.00 in the night.
                            </p>
                        </div>
                        <div style={{ marginRight: '100px' }}>
                            <label style={{ fontSize: '60px' }}><i className="fas fa-recycle" /></label>
                            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>CD Key and Epin </p>
                            <p style={{ fontSize: '14px' }}>We are at your service with CD Key and E-Pİn deliveries. </p>
                        </div>
                        <div>
                            <label style={{ fontSize: '60px' }}><i className="far fa-thumbs-up" /></label>
                            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>100% Satisfaction </p>
                            <p style={{ fontSize: '14px' }}>100% Satisfaction Guarantee to Our Customers
                            </p>
                        </div>
                    </div>
                    {/*reviews*/}
                    <h3 style={{ textAlign: 'center', color: 'rgb(212, 3, 3)' }}>OUR REVIEWS</h3>
                    <h1 style={{ textAlign: 'center', color: 'rgb(139, 8, 8)' }}>TrustPilote</h1>
                </div>
                <Footer/>

                </>}
            </div >

        )
    }
}

export default Table;