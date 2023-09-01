
import React, { Component, useRef, useEffect } from 'react';
import "./Home.css"
import setupMenu from './homeScript';
import Footer from './Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from './LoadingScreen';
import Trustpilot from './Trustilot';
import Paypal from './Paypal';
import 'tailwindcss/tailwind.css';
import Swal from 'sweetalert2';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Design from "./components/Design";
import Particles from 'react-tsparticles';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";



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
            isLoading: true,
            slideIndex: 1,
            pcDropdownOpen: false,
            psDropdownOpen: false,
            othersDropdownOpen: false,
            xboxDropdownOpen: false,
            hours: 0,
            minutes: 0,
            seconds: 0

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
                const script = document.createElement("script");
                script.async = true;
                script.type = "text/javascript";
                script.src = "https://embed.tawk.to/648a2360cc26a871b02293eb/1h2tpkdrr";
                script.charset = "UTF-8";
                script.setAttribute("crossorigin", "*");
                document.getElementsByTagName("head")[0].appendChild(script);




                Swal.fire({
                    /* text:'( wla jib carte 50Dh ra khdama oghadi n7tafdo lik blfr9 dial taman la commande jaya )!',*/
                    text: `UPDATE ORANGE 🍊, ghadi ykhsk tmchi 3nd l7anot otgolih isift le montant libghiti lhad nmra Orange 0660074477 ( solde 3adi bla maydir njma 👍)! ( wla jib carte 50Dh ra khdama oghadi n7tafdo lik blfr9 dial taman la commande jaya ✅ )!`, 

/*                     title:'ORANGE UPDATE  : Paiement Express/Rapide wla Les Cartes 50Dh / 100Dh ra khdamin',
 */                    imageHeight: 390, // Set the desired height for the image
                    imageWidth: '90%', // Set the desired width for the image
                    confirmButtonText: `J'accepte`,

                }).then((result) => { // Added missing `(` before `(result)`
                    if (result.isConfirmed) {

                        Swal.fire({
                            title: 'PROMOTION !!',
                            text: 'Up to 65% Off',
                            icon: 'warning',
                            confirmButtonText: 'Ok',
                        })
                    }
                });



            }, 10000);


        });

        this.showSlides(this.state.slideIndex);
        this.interval = setInterval(() => {
            this.plusSlides(1);
        }, 6000);

        this.interval = setInterval(() => {
            const now = new Date();
            const remainingTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 0) - now;

            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            this.setState({ hours, minutes, seconds });

            if (remainingTime === 0) {
                clearInterval(this.interval);
            }
        }, 1000);




    }
    //slide show
    componentWillUnmount() {
        clearInterval(this.interval);

    }

    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex + n);
    };

    currentSlide = (n) => {
        this.showSlides(n);
    };

    showSlides = (n) => {
        const slides = document.getElementsByClassName('mySlides');
        const dots = document.getElementsByClassName('dot');

        if (slides.length === 0 || dots.length === 0) {
            return;
        }

        if (n > slides.length) {
            n = 1;
        } else if (n < 1) {
            n = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }

        slides[n - 1].style.display = 'block';
        dots[n - 1].className += ' active';

        this.setState({ slideIndex: n });
    };
    handleLinkClick(event, targetClass) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const target = document.querySelector(targetClass);
        if (target) {
            const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: topOffset - 200,
                behavior: 'smooth'
            });
            this.setState({
                pcDropdownOpen: false,
                psDropdownOpen: false,
                othersDropdownOpen: false,
                xboxDropdownOpen: false
            });

        }
    }

    //close alert promotion tel
    closeAlert() {
        this.setState({ showAlert: false });
    }
    //---
    changeMode() {
        const body = document.querySelector('#madDisplay');

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

    //buy steam
    buySteam() {
        if (document.querySelector('#steamService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#steamService').value;
            const months = document.querySelector('#steamService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- STEAM GIFT CARDS ---* \n\n *⇾ CARDS :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price} $   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy cv design
    buyCvDesign() {
        if (document.querySelector('#cvdesignService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#cvdesignService').value;
            const months = document.querySelector('#cvdesignService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- CV DESIGN ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ TOTAL :* ${price} $   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //buy adobe
    buyAdobe() {
        if (document.querySelector('#adobeService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#adobeService').value;
            const months = document.querySelector('#adobeService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- ADOBE CREATIVE CLOUD ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ TOTAL :* ${price} $   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
     //buy gpt
     buyGpt() {
        if (document.querySelector('#gptService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#gptService').value;
            const months = document.querySelector('#gptService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- CHAT GPT ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ TOTAL :* ${price} $   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    buyApex() {
        if (document.querySelector('#apexService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#apexService').value;
            const months = document.querySelector('#apexService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- APEX LEGENDS ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ TOTAL :* ${price} $   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    buyAvakin() {
        if (document.querySelector('#avakinService').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#avakinService').value;
            const months = document.querySelector('#avakinService option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- AVAKIN LIFE ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ TOTAL :* ${price} $   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
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
    //NETFLIX private

    buyPrivateNetflix() {

        const standardPrivateSelect = document.getElementById('standardPrivate');
        const profilePrivateSelect = document.getElementById('profilePrivate');
        const accountPrivateTypSelect = document.getElementById('typePrivate');
        const totalPrivatePrice = document.getElementById('NetflixPrivatePrice').textContent;
        if (profilePrivateSelect.value != '-' && standardPrivateSelect.value != '-' && accountPrivateTypSelect.value != '-') {

            const message = `Salam *Digital Store* bghit \n *---NETFLIX PRIVATE---* \n\n *⇾ SUBSCRIPTION :* ${accountPrivateTypSelect.options[accountPrivateTypSelect.selectedIndex].text} \n *⇾  MONTHS :* ${standardPrivateSelect.options[standardPrivateSelect.selectedIndex].text} \n *⇾ PROFILES :* ${profilePrivateSelect.options[profilePrivateSelect.selectedIndex].text} \n *⇾ TOTAL* ${totalPrivatePrice}`;

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
    //buy fifa23 xbox
    buyFifa23xbox() {

        const message = `Salam *Digital Store* bghit \n *--- FIFA 23 XBOX ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 250 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy minecraft xbox
    buyMinecraftxbox() {

        const message = `Salam *Digital Store* bghit \n *--- MINECRAFT XBOX ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 100 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }
    //buy gta5 xbox
    buyGta5xbox() {

        const message = `Salam *Digital Store* bghit \n *--- GTA 5 XBOX ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 150 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }


    //buy desired ps game
    buyPsGameDesired() {
        const games = document.getElementById('input-text-ps').value;
        if (games == '') {
            alert('Error : Please write a game name before ordering..');
        }
        else {
            const message = `Salam *Digital Store* bghit \n *--- ${games} ---* \n *⇾ QUANTITY :* 1  \n *⇾ PLATEFORM :* PLAYSTATION   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy desired ps game
    buyXboxGameDesired() {
        const games = document.getElementById('input-text-xbox').value;
        if (games == '') {
            alert('Error : Please write a game name before ordering..');
        }
        else {
            const message = `Salam *Digital Store* bghit \n *--- ${games} ---* \n *⇾ QUANTITY :* 1  \n *⇾ PLATEFORM :* XBOX   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
 //buy desired game
 buyGameDesired() {
    const games = document.getElementById('input-text-shopping').value;
    if (games == '') {
        alert('Error : Please write a game name before ordering..');
    }
    else {
        const message = `Salam *Digital Store* bghit \n *--- ${games} ---* \n *⇾ QUANTITY :* 1  \n *⇾ PLATEFORM :*    `;
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

        const message = `Salam *Digital Store* bghit \n *--- CARTE PSN 10 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 150 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buy 20euro psn
    buyPsn20euro() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE PSN 20 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 260 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buy psn 5 xbox
    buyXbox5euro() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE XBOX 5 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 70 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buy 10 euro xbox
    buyXbox10euro() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE XBOX 10 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 150 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buy 20euro xbox
    buyXbox20euro() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE XBOX 20 EURO ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 260 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buyea1Month
    buyea1Month() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE EA Play - 1 Month ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* Not Available   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buyea6Months
    buyea6Months() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE EA Play - 6 Months ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 240 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buyea12Months
    buyea12Months() {

        const message = `Salam *Digital Store* bghit \n *--- CARTE EA Play - 12 Months ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 290 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }


    //buyea1Month
    buyea1Monthps() {

        const message = `Salam *Digital Store* bghit \n *---  EA Play - 1 Month ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 150   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buyea6Months
    buyea6Monthsps() {

        const message = `Salam *Digital Store* bghit \n *---  EA Play - 6 Months ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 250 MAD   `;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
        window.location.href = url;
    }

    //buyea12Months
    buyea12Monthsps() {

        const message = `Salam *Digital Store* bghit \n *---  EA Play - 12 Months ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* 290 MAD   `;
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
            const message = `Salam *Digital Store* khasni \n *--- ROBLOX SERVICE ---* \n\n *⇾ SERVICE :* ${months}  \n *⇾ QUANTITY :* 1 \n *⇾ TOTAL :* ${price}    `;
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
    //buy free fire account
    buyfreefire() {
        if (document.querySelector('#freefireSelect').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#freefireSelect').value;
            const months = document.querySelector('#freefireSelect option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- FREE FIRE ACCOUNT + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ BUDGET :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //shop free fire 
    buyfreefireTopup() {
        if (document.querySelector('#ffTopup').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#ffTopup').value;
            const months = document.querySelector('#ffTopup option:checked').text;
            const message = `Salam *Digital Store* khasni \n *--- FREE FIRE Shopping Service> ---* \n \n *⇾ Offre :* ${months} \n *⇾ Prix :* ${price} MAD  `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy brawlstar
    buyBrawlstar() {
        if (document.querySelector('#brawlstarselect').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#brawlstarselect').value;
            const months = document.querySelector('#brawlstarselect option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- BRAWL STAR ACCOUNT + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ BUDGET :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }
    //buy EFOOTBALL
    buyEfootball() {
        if (document.querySelector('#efootballSelect').value == '-') {
            alert('Error : Please select an option before clicking buy..');
        } else {
            const price = document.querySelector('#efootballSelect').value;
            const months = document.querySelector('#efootballSelect option:checked').text;
            const message = `Salam *Digital Store* bghit \n *--- E-FOOTBALL ACCOUNT LI FL SITE + MAIL ACCESS ---* \n\n *⇾ QUANTITY :* 1  \n *⇾ TOTAL :* ${price}   `;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
            window.location.href = url;
        }
    }

    //dropdown search items
    toggleDropdown = (dropdownName) => {
        this.setState((prevState) => ({
            [dropdownName]: !prevState[dropdownName],
            pcDropdownOpen: dropdownName === 'pcDropdownOpen' ? !prevState[dropdownName] : false,
            psDropdownOpen: dropdownName === 'psDropdownOpen' ? !prevState[dropdownName] : false,
            othersDropdownOpen: dropdownName === 'othersDropdownOpen' ? !prevState[dropdownName] : false,
            xboxDropdownOpen: dropdownName === 'xboxDropdownOpen' ? !prevState[dropdownName] : false
        }));
    };




    render() {
        const { hours, minutes, seconds } = this.state;

        const { isLoading } = this.state;

        //alert promotion tel
        const { showAlert } = this.state;
        //fin alert
        const { pcDropdownOpen, psDropdownOpen, othersDropdownOpen, xboxDropdownOpen } = this.state;


        return (

            <div className='bodyClass'>

                <script src="./homeScript"></script>
                <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>


                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="trustpilot-one-time-domain-verification-id" content="672a6854-e560-4596-b310-7f409f718210" />
                    <title>Document</title>
                    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" charset="utf-8"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
                </head>


                <header className='headerClass'>
                    <div className="inner-width">
                        <Link to="/home"><h1 className="logo" style={{ fontFamily: 'Roboto' }}> <i className="fa fa-shopping-cart" style={{ color: '#008507' }} />
                            <span style={{ color: '#008507' }}> D</span>igital <span style={{ color: '#008507' }}>S</span>tore
                        </h1></Link>
                        <i id='menu-toggle-btn-2' className="menu-toggle-btn fas fa-bars" onClick={this.toggleMenu2} />
                        <nav id='navigation-menu-2' className="navigation-menu">
                            {/*<a href="#"><i class="fas fa-home home"></i> Home</a>*/}
                            <div className="dropdown">
                                <a className="info-btn" style={{ cursor: 'pointer' }}><i className="fas fa-gift" /> GIVEAWAY</a>
                                <div className="modal">
                                    <div className="modal-content" style={{ textAlign: 'center' }}>
                                        <span className="close-btn">×</span>
                                        <h2 style={{ textAlign: 'center', fontWeight: 'bold', margin: '5px', borderBottom: '1px' }}>SPECIAL GIVEAWAY </h2>
                                        <p style={{ color: 'green', margin: '4px' }}>AT : 18/07/2023</p>
                                        <p style={{ color: 'red', margin: '4px' }}>PS PLUS DELUX 9 DAYS </p>
                                        <p>EMAIL : digitalstoredelux0012@gmail.com <br />
                                            PASS : digitalstore2022 <br />
                                            BACKUP CODES :  RGgTlI / hBttPQ
                                        </p>
                                        <p style={{ color: 'red', margin: '12px' }}>PLEASE CHANGE THE CREDENTIALS AND DISABLE 2FA AFTER GETTING LOGGED IN THE ACCOUNT</p> <br />
                                        <p style={{ color: 'red', margin: '4px', fontWeight: 'bold' }}>------ STAY TUNED FOR ANOTHER GIVEAWAY ------</p>


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
                            <Link to="/client"><i className="fas fa-star" /> REVIEWS </Link>
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

                            <a href className="aj_btn"> <i className="fas fa-lock" aria-hidden="true" />
                                CART
                            </a>
                        </nav>
                    </div>
                </header>

                {isLoading ? <LoadingScreen /> : <>
                    <Particles
                        id="tsparticles"
                        options={{
                            // Configuration des options des particules
                            particles: {
                                number: {
                                    value: 80,
                                },
                                // ... autres options de configuration
                            },
                        }}
                    />
                    <div className="w-full h-screen absolute">
                        <Design />
                    </div>

                    {/*-------------------------Mad------------------------*/}
                    <div style={{ display: 'block', position: 'relative' }}>


                        {/*Body slide show*/}
                        <div className="slideAlign">
                            <div className="slideshow-container">
                                {/* <div className="mySlides fade">
                                    <img className="imgSlide" src="the-last-of-us-part-ii_1578852229.jpg.webp" style={{ width: '100%' }} />
                                    <div className="text"></div>
                                </div> */}

                                <div className="mySlides fade">
                                    <img className="imgSlide" src="FlashSaleSlide.png" style={{ width: '100%' }} />
                                    <div className="text"></div>
                                </div>
                                {/* <div className="mySlides fade">
                                    <img className="imgSlide" src="psPlusSlide2.jpg" style={{ width: '100%' }} />
                                    <div className="text"></div>
                                </div> */}

                                <a className="prev" onClick={() => this.plusSlides(-1)}>❮</a>
                                <a className="next" onClick={() => this.plusSlides(1)}>❯</a>
                            </div>

                            <div style={{ textAlign: 'center', display: 'none' }}>
                                <span className="dot" onClick={() => this.currentSlide(1)}></span>
                                <span className="dot" onClick={() => this.currentSlide(2)}></span>
                                <span className="dot" onClick={() => this.currentSlide(3)}></span>
                                <span className="dot" onClick={() => this.currentSlide(4)}></span>
                                <span className="dot" onClick={() => this.currentSlide(5)}></span>
                            </div>
                        </div>

                        <div id="madDisplay" >


                            {/*PROMOTION*/}
                            {/* {showAlert && (
                                <div className="alert" onClick={this.closeAlert}>
                                    <span className="closebtnAlert" >×</span>
                                    <strong>PROMOTION ALERT !</strong> <br /> UP TO 65% OFF
                                </div>
                            )} */}
                            {/*PROMOTION MARQUEE*/}
                            <marquee scrollamount={4} loop={-1} behavior="alternate" style={{ color: 'white', margin: '100px 140px 0 100px', backgroundColor: 'rgb(212, 6, 6)', fontSize: '22px', borderRadius: '60px', padding: '10px 20px 10px 20px', fontWeight: 'bold', letterSpacing: '2px', wordSpacing: '3px' }}>
                                LIMITED TIME DISCOUNT <span style={{ color: 'black' }}>/</span> PROMOTION A DURÉE LIMITÉE </marquee>
                            {/*top up product*/}

                            <p className="titleProduct bestSellings" >FIND YOUR<span> ITEM </span> EASILY </p>
                            <div className="flex justify-center">
                                <div className="relative group">
                                    <button
                                        className="flex items-center px-4 py-2 font-semibold text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-900 focus:text-green-600"
                                        onClick={() => this.toggleDropdown('pcDropdownOpen')}
                                    >
                                        PC
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                                        </svg>
                                    </button>
                                    {pcDropdownOpen && (
                                        <div className="relative z-10 mt-2 space-y-2 bg-black rounded-md shadow-lg">
                                            <a href=".steam" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".steam")}>
                                                Steam
                                            </a>
                                            <a href=".giftCardsAndAccount" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".giftCardsAndAccount")}>
                                                Windows Key
                                            </a>


                                        </div>
                                    )}
                                </div>

                                <div className="relative group">
                                    <button
                                        className="flex items-center px-4 py-2 font-semibold text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-900 focus:text-green-600"
                                        onClick={() => this.toggleDropdown('psDropdownOpen')}
                                    >
                                        PlayStation
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                                        </svg>
                                    </button>
                                    {psDropdownOpen && (
                                        <div className="relative z-10 mt-2 space-y-2 bg-black rounded-md shadow-lg">
                                            <a href=".psPlusSlide" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".psPlusSlide")}>
                                                PSN Account
                                            </a>
                                            <a href=".giftCardsAndAccount" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".giftCardsAndAccount")}>
                                                PS Cards
                                            </a>
                                            <a href=".psGames" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".psGames")}>
                                                Games Account
                                            </a>

                                        </div>
                                    )}
                                </div>

                                <div className="relative group">
                                    <button
                                        className="flex items-center px-4 py-2 font-semibold text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-900 focus:text-green-600"
                                        onClick={() => this.toggleDropdown('xboxDropdownOpen')}
                                    >
                                        Xbox
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                                        </svg>
                                    </button>
                                    {xboxDropdownOpen && (
                                        <div className="relative z-10 mt-2 space-y-2 bg-black rounded-md shadow-lg">
                                            <a href=".giftCardsAndAccount" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".giftCardsAndAccount")}>
                                                GamePass
                                            </a>
                                            <a href=".giftCardsAndAccount" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".giftCardsAndAccount")}>
                                                Xbox Gold
                                            </a>

                                        </div>
                                    )}
                                </div>

                                <div className="relative group">
                                    <button
                                        className="flex items-center px-4 py-2 font-semibold text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-900 focus:text-green-600"
                                        onClick={() => this.toggleDropdown('othersDropdownOpen')}
                                    >
                                        Others
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                                        </svg>
                                    </button>
                                    {othersDropdownOpen && (
                                        <div className="relative z-10 mt-2 space-y-2 bg-black rounded-md shadow-lg">


                                            <a href=".socialMediaServices" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".socialMediaServices")}>
                                                Social Media
                                            </a>
                                            <a href=".streamingService" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".streamingService")}>
                                                NBA / HULU / UFC
                                            </a>
                                            <a href=".otherService" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".otherService")}>
                                                Mobile Account
                                            </a>
                                            <a href=".otherService" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".otherService")}>
                                                8BALL Pool
                                            </a>
                                            <a href=".otherService" className="block px-4 py-2 text-white hover:text-green-600" onClick={(event) => this.handleLinkClick(event, ".otherService")}>
                                                Fortnite Gift Cards
                                            </a>


                                        </div>
                                    )}
                                </div>
                            </div>




                            <p className="titleProduct topUp">OUR <span>TOP UP</span></p><br /> <br />
                            <section className="boxes" >
                                <div className="boxShow">
                                    <p><img src="20230402_211309.jpg" width="100%" alt="" /></p>
                                    <h3 className="info-btn">SHOW</h3>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                <span style={{ fontWeight: 'bold' }}>GTA 5 ( 100M MONEY ON YOUR ACCOUNT )</span><br /><br /> <hr /><br />

                                                You need to have at least 300k of money to start the Boost.<br />


                                                Money will be boosted as CASH+Deluxe CARS that you can sell and get full amount. Only CASH possible too but it will be longer delivery and more expensive service!<br />
                                                If you need LVL boost , just message us on via WhatsApp. +212 637 97 62 57<br /><br />
                                                <select className="select-style" id='gtaTopup'>
                                                    <option disabled value="-">YOUR PLATFORM</option>
                                                    <option disabled value={"0"}>PLAY STATION 4</option>
                                                    <option disabled value={"0"}>PLAY STATION 5</option>
                                                    <option disabled value={"0"}>XBOX ONE</option>
                                                    <option disabled value={"0"}>XBOX SERIES</option>
                                                </select> <br /><br />
                                                <div id="gtaTopupPrice" className="price">PRICE : (service not available)</div><br />


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
                                    <p><img src="paypalTopup.jpg" width="100%" alt="" /></p>
                                    <h3 className="info-btn">SHOW</h3>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                <Paypal />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxShow">
                                    <p><img src="20230402_211641.jpg" width="100%" alt="" /></p>
                                    <h3 className="info-btn">SHOW</h3>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                <span style={{ fontWeight: 'bold' }}>FreeFire Shop </span><br /><br /> <hr /><br />

                                                <select className="select-style" id='ffTopup' style={{ border: 'solid 1px' }}>
                                                    <option value="-">Choose</option>
                                                    <option value={"20"}>100 💎</option>
                                                    <option value={"50"}>310 💎</option>
                                                    <option value={"75"}>520 💎</option>
                                                    <option value={"150"}> 1060</option>
                                                </select> <br /><br />
                                                <div id="ffTopupPrice" className="price">PRICE : </div><br />


                                                <button className='btn btn-primary' style={{ cursor: 'pointer', color: 'white' }} onClick={this.buyfreefireTopup} >BUY NOW</button><br /><br />

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxShow">
                                    <p><img src="20230402_211241.jpg" width="100%" alt="" /></p>
                                    <h3 className="info-btn">SHOW</h3>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                Available soon...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxShow">
                                    <p><img src="20230402_210908.jpg" width="100%" alt="" /></p>
                                    <h3 className="info-btn">SHOW</h3>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                Available soon...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxShow">
                                    <p><img src="20230402_211817.jpg" width="100%" alt="" /></p>
                                    <h3 className="info-btn">SHOW</h3>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                Available soon...
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



                            <div id="benefits2"  >
                                <div >
                                    <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#008507' }}>+1000 </p>
                                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Products Sold </p>
                                </div>
                                <div >
                                    <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#008507' }}>+700 </p>
                                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Customers
                                    </p>
                                </div>
                                <div >
                                    <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#008507' }}>4.8 <i className="fas fa-star" /></p>
                                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Trusted </p>
                                </div>

                            </div>
                            {/*Body product*/}
                            <p className="titleProduct bestSellings">OUR <span> BEST </span> SELLING</p>
                            <div className="container15">
                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="SpotifyBanners.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <span>SPOTIFY PRIVATE</span>
                                        <h6 className="SocialInfos blinkOffer">Offer ends in{' '}
                                            <span >
                                                {hours.toString().padStart(2, '0')}H:
                                                {minutes.toString().padStart(2, '0')}:
                                                {seconds.toString().padStart(2, '0')}
                                            </span>
                                        </h6>                                         <p>

                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY

                                            </button>
                                            {/*spotify*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>

                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Spotify Premium Private</h5>
                                                                <p className="card-text">Upgrade your music experience with Spotify Premium. Enjoy ad-free, offline listening, and more!</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="SpotifyMonths" style={{ border: '1px solid black', margin: '10px', borderRadius: '8px' }} className="form-select mb-3">
                                                                    <option value="-">Choose</option>
                                                                    <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                                                    <option value="20 MAD">1 Month NEW</option>
                                                                    <option value="30 MAD">2 Months NEW</option>
                                                                    <option value="50 MAD">4 Months NEW</option>
                                                                    <option disabled value="0 MAD">---UPGRADE (COMPTE DIALK)---</option>
                                                                    <option value="30 MAD">1 Month UPGRADE</option>
                                                                    <option value="40 MAD">2 Months UPGRADE</option>
                                                                    <option value="65 MAD">4 Months UPGRADE</option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="spotify" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buySpotify} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                <span style={{ fontWeight: 'bold' }}>Upgrade on your account is Available ( Sift lina ghi mail / pass f WhatsApp ohna ntklfo ) </span> <br />
                                                ✅ Private Spotify Premium Subscription  <br />
                                                ✅ 🌍 Works Worldwide <br />
                                                ✅ You can Download <br />
                                                ✅ Full Warranty and Support<br />
                                                ✅ You can Change Email and Password<br />
                                                ✅ Can be used on All devices – Android, Ios, Pc, Mac, Playstation, etc<br />
                                                ✅ No interruptions – Play the music you love, ad-free.<br />
                                                ✅ Offline playback – Save your data by listening offline.</p>
                                        </div>
                                    </div>
                                </div>




                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="crunchyBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>CRUNCHY ROLL</span>
                                        <h6 className="SocialInfos blinkOffer">Offer ends in{' '}
                                            <span >
                                                {hours.toString().padStart(2, '0')}H:
                                                {minutes.toString().padStart(2, '0')}:
                                                {seconds.toString().padStart(2, '0')}
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>

                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Spotify Premium</h5>
                                                                <p className="card-text">Embark on an anime adventure with Crunchyroll! Immerse yourself in a vast library of the latest and greatest anime series and movies.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="CrunchyMonths">
                                                                    <option value="-">Choose</option>
                                                                    <option disabled value="-">--MEGA FUN--</option>
                                                                    <option value="45 MAD">1 MONTH SHARED</option>
                                                                    <option value="55 MAD">1 MONTH PRIVATE</option>
                                                                    <option value="190 MAD">12 MONTHS</option>
                                                                    <option disabled value="-">--PREMIUM--</option>
                                                                    <option value="35 MAD">1 MONTH</option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="crunchy" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyCrunchy} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p> ✅ Full warranty  <br />
                                                ✅ you don't need VPN to use the account<br />
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="netflixPrivateBannerTop.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">

                                        <span> NETFLIX PRIVATE</span>
                                        <h6 className="SocialInfos blinkOffer">Offer ends in{' '}
                                            <span >
                                                {hours.toString().padStart(2, '0')}H:
                                                {minutes.toString().padStart(2, '0')}:
                                                {seconds.toString().padStart(2, '0')}
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>

                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Netflix Private Subscription</h5>
                                                                <p className="card-text">Experience unparalleled streaming with Netflix Premium. Enjoy an impressive collection of movies, series, and documentaries without any ads. Watch your favorite shows through seamless streaming or download them for offline viewing. Immerse yourself in a vast catalog of high-quality content, all without any interruptions. Subscribe to Netflix Premium for a complete immersion into the world of entertainment.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="typePrivate" className='select-style notThisSelect' onChange={this.calculateNetflixPrivatePrice}>
                                                                    <option value="-">Choose</option>
                                                                    <option value={55}>PREMIUM</option>
                                                                    <option disabled value={0}>STANDARD</option>
                                                                </select>
                                                                <select name id="standardPrivate" className="select-style notThisSelect" onChange={this.calculateNetflixPrivatePrice}>
                                                                    <option value="-">Choose</option>
                                                                    <option value={0}>1 Month </option>
                                                                    <option disabled value={0}>2 Months </option>
                                                                    <option disabled value={0}>3 Months </option>

                                                                </select>
                                                                <select name id="profilePrivate" className="select-style notThisSelect" onChange={this.calculateNetflixPrivatePrice}>
                                                                    <option value="-"> Choose</option>
                                                                    <option value={0}>1 Profile</option>
                                                                    <option value={20}>2 Profiles</option>
                                                                    <option disabled value={0}>3 Profiles</option>
                                                                    <option disabled value={0}>4 Profiles</option>
                                                                    <option disabled value={0}>5 Profiles</option>

                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="NetflixPrivatePrice" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyPrivateNetflix} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                🟥 PREMIUM SUBSCRIPTION HAS A 4K Resolution<br />
                                                ✅ Works on any device. <br />
                                                ✅ You can Download and Add to My List. <br />
                                                ✅ You can change profile Name / Language / PIN. <br />
                                                ✅ there is no streaming break ( the password change will be done after the end of your subscription )<br />
                                                ✅ Contact us for any issue<br />
                                                ✅ Safety Account Warranty 100%<br />
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="netflixBannerShared.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>4.9</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>NETFLIX SHARED</span>
                                        <h6 className="SocialInfos blinkOffer">Offer ends in{' '}
                                            <span >
                                                {hours.toString().padStart(2, '0')}H:
                                                {minutes.toString().padStart(2, '0')}:
                                                {seconds.toString().padStart(2, '0')}
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*netflix*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Netflix Shared Subscription</h5>
                                                                <p className="card-text">Experience unparalleled streaming with Netflix Premium. Enjoy an impressive collection of movies, series, and documentaries without any ads. Watch your favorite shows through seamless streaming or download them for offline viewing. Immerse yourself in a vast catalog of high-quality content, all without any interruptions. Subscribe to Netflix Premium for a complete immersion into the world of entertainment.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="type" className='select-style notThisSelect' onChange={this.calculateNetflixPrice}>
                                                                    <option value="-">Choose</option>
                                                                    <option value={10}>PREMIUM</option>
                                                                    <option value={0} disabled>STANDARD</option>
                                                                </select>
                                                                <select name id="standard" className="select-style notThisSelect" onChange={this.calculateNetflixPrice}>
                                                                    <option value="-">Choose</option>
                                                                    <option value={25}>1 Month </option>
                                                                    <option value={50}>2 Months</option>
                                                                    <option value={75}>3 Months</option>
                                                                </select>
                                                                <select name id="profile" className="select-style notThisSelect" onChange={this.calculateNetflixPrice}>
                                                                    <option value="-"> Choose</option>
                                                                    <option value={0}>1 Profile</option>
                                                                    <option value={10}>2 Profiles</option>
                                                                    <option disabled value={0}>3 Profiles</option>
                                                                    <option disabled value={0}>4 Profiles</option>
                                                                    <option disabled value={0}>5 Profiles</option>

                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="NetflixPrice" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyNetflix} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                🟥 PREMIUM SUBSCRIPTION HAS A 4K Resolution<br />
                                                🟥 STANDARD SUBSCRIPTION HAS A FULL HD Resolution<br />

                                                ✅ Works on any device. <br />
                                                ✅ Contact us for any issue<br />
                                                ✅ Safety Account Warranty 100%<br />

                                                🟥 There are some rules for the account, you will get it after you buy
                                                🟥 No warranty will be given if you change any information in the accounts.<br />
                                        --> NEED MORE MONTHS OR PROFILES ? CONTACT US VIA WHATSAPP 0637976257
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="discordBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>DISCORD</span>
                                        <h6 className="SocialInfos">( IN YOUR ACCOUNT )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*discord*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Discord Nitro</h5>
                                                                <p className="card-text">Elevate your Discord experience with Discord Nitro! Unlock a world of premium features and exclusive perks. Enjoy animated avatars and custom tags to stand out in servers. Get access to a vast library of high-quality emojis and more...</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="nitro" className="select-style notThisSelect">
                                                                    <option value="-">Choose</option>
                                                                    <option value={0}>1 Month </option>

                                                                </select>
                                                                <select name id="typeNitro" className="select-style notThisSelect">
                                                                    <option value="-"> Choose</option>
                                                                    <option value={45}>Classic</option>
                                                                    <option value={80}>Nitro</option>
                                                                </select>
                                                                <select name id="accountType" className="select-style notThisSelect" style={{ display: 'none' }}>
                                                                    <option value="-"> Choose</option>
                                                                    <option selected value={0}>My account</option>
                                                                    <option value={0}>New account</option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="DiscordPrice" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyDiscord} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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


                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="shahidBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>SHAHID</span>
                                        <h6 className="SocialInfos">( + WARRANTY )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*shahid*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Shahid Subscription</h5>
                                                                <p className="card-text">Elevate your entertainment with Chahid! Dive into a world of premium Arabic content, featuring a vast collection of movies, series, and shows. Experience ad-free streaming and discover a rich selection of exclusive programs</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name className='notThisSelect' id="ShahidProfile">
                                                                    <option value="-">Choose</option>
                                                                    <option value={30 }>VIP</option>
                                                                    <option value={70 }>VIP SPORT</option>
                                                                </select>
                                                                <select name className='notThisSelect' id="shahidType">
                                                                    <option value="-">Choose</option>
                                                                    <option value={0}>1 MONTH</option>
                                                                  
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="shahidPrice" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE: </div> MAD
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyShahid} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="canvaBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>CANVA</span>
                                        <h6 className="SocialInfos">( IN YOUR ACCOUNT )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*canva*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>

                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Canva Account</h5>
                                                                <p className="card-text">Unleash your creativity with Canva! Whether you're a seasoned designer or a beginner, Canva offers an intuitive platform to create stunning graphics, presentations, social media posts, and more.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="canvaMonths">
                                                                    <option value="-">Choose</option>
                                                                    <option value={'35 MAD'}> 1 MONTH</option>
                                                                    <option value={'50 MAD'}> 6 MONTHS</option>
                                                                    <option value={'75 MAD'}>12 MONTHS</option>
                                                                    <option value={'140 MAD'}>36 MONTHS</option>
                                                                    <option value={'170 MAD'}>LIFETIME (Edu)</option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="canva" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyCanva} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="appleMusicBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>APPLE MUSIC </span>
                                        <h6 className="SocialInfos">( NEW PRIVATE ACCOUNT )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*apple musicva*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Apple Music Private</h5>
                                                                <p className="card-text">Elevate your music experience with Apple Music! Dive into a vast world of songs, albums, and playlists curated just for you. Enjoy ad-free, high-quality music streaming, and discover new artists and genres tailored to your preferences.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="AppleMonths" className="select-style">
                                                                    <option value="-">Choose</option>
                                                                    <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                                                    <option value="25 MAD">1 Month </option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="apple" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyAppleMusic} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                <div className="wrapper" style={{ position: 'relative' }}>

                                    <img src="deezerBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>DEEZER PRIVATE</span>
                                        <h6 className="SocialInfos">( NEW PRIVATE ACCOUNT )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*deezer*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Deezer Private</h5>
                                                                <p className="card-text">Enhance your music journey with Deezer! Immerse yourself in a world of endless tunes, podcasts, and audio content. Enjoy ad-free, high-quality streaming that lets you discover new artists and genres with ease.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="DeezerMonths" className="select-style">
                                                                    <option value="-">Choose</option>
                                                                    <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                                                    <option value="25 MAD">1 Month </option>
                                                                    <option value="50 MAD">3 Months </option>
                                                                    <option disabled value="0 MAD">---UPGRADE---</option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="deezer" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyDeezer} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="primevideoBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>PRIME VIDEO</span>
                                        <h6 className="SocialInfos">( NEW PRIVATE ACCOUNT )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*prime*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Prime Video</h5>
                                                                <p className="card-text">Experience unparalleled streaming with Netflix Premium. Enjoy an impressive collection of movies, series, and documentaries without any ads. Watch your favorite shows through seamless streaming or download them for offline viewing. Immerse yourself in a vast catalog of high-quality content, all without any interruptions. Subscribe to Netflix Premium for a complete immersion into the world of entertainment.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="PrimeMonths" className="select-style">
                                                                    <option value="-">Choose</option>
                                                                    <option disabled value="0 MAD">---NEW ACCOUNT---</option>
                                                                    <option value="40 MAD">1 Month </option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="prime" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyPrime} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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



                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="disneyBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>DISNEY</span>
                                        <h6 className="SocialInfos">( + WARRANTY )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*disney*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>Disney +</h5>
                                                                <p className="card-text">Disney+ has something for every generation to enjoy. Dive into an extensive library of timeless content from Disney, Pixar, Marvel, Star Wars, and National Geographic.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select className='notThisSelect' id="DisneyProfile">
                                                                    <option value="-">Choose</option>

                                                                    <option value={0}>1 Profiles</option>
                                                                    <option value={10}>3 Profiles</option>
                                                                    <option value={15}>4 Profiles</option>
                                                                    <option value={25}>5 Profiles</option>
                                                                    <option value={35}>Compte kaml (Privé)</option>
                                                                </select>
                                                                <select className='notThisSelect' id="DisneyMonths">
                                                                    <option value="-">Choose</option>
                                                                    <option value={30}>1 Month</option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="disney" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyDisney} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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


                                <div className="wrapper" style={{ position: 'relative' }}>
                                    <img src="iptvBanner.jpeg" alt="" />
                                    <div className="content" style={{ position: 'absolute', top: '10px', right: '5px' }}>
                                        <div style={{ backgroundColor: 'black', borderRadius: '8px', padding: '5px', display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z"></path><path d="M7.62109 12.2614L12.2175 15.0355L10.9977 9.80698L15.0586 6.28905L9.71103 5.83536L7.62109 0.904297L5.53116 5.83536L0.183594 6.28905L4.24447 9.80698L3.02472 15.0355L7.62109 12.2614Z" fill="url(#paint0_linear_3667_3571)"></path><defs><linearGradient id="paint0_linear_3667_3571" x1="7.62109" y1="0.904297" x2="7.62109" y2="15.0355" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F19"></stop><stop offset="1" stop-color="#FF3F19"></stop></linearGradient></defs>
                                            </svg>
                                            <span style={{ color: '#FF3F19', marginLeft: '3px', fontSize: '12px' }}>5.0</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>IPTV</span>
                                        <h6 className="SocialInfos">( PRIVATE ACCOUNT )</h6>

                                    </div>
                                    <div className="row">
                                        <div className="buttons">
                                            <button className="info-btn">BUY</button>
                                            {/*iptv*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <div className="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <h5 className="card-title" style={{ fontWeight: 'bold', margin: '6px' }}>IPTV Subscription</h5>
                                                                <p className="card-text">Experience limitless entertainment with IPTV! Discover a world of live TV channels, movies, series, and on-demand content from around the globe. Enjoy crystal-clear quality and seamless streaming on any device, from smart TVs to smartphones.</p>
                                                            </div>
                                                            <hr />
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <p className="card-text" style={{ fontWeight: 'bold' }}>Choose your offer</p>
                                                                <select name id="iptvMonths" className="select-style">
                                                                    <option value="-">Choose</option>
                                                                    <option value="150 MAD">6 Months</option>
                                                                    <option value="250 MAD">12 Months</option>
                                                                </select>
                                                            </div>
                                                            <div style={{ width: '100%', padding: '10px' }}>
                                                                <div id="iptvPrice" style={{ fontWeight: 'bold', margin: '5px' }}>PRICE:</div>
                                                                <div style={{ fontWeight: '200' }}>WARRANTY IS UNCLUEDED</div>
                                                                <button onClick={this.buyIPTV} className="btn btn-success" style={{ borderRadius: '8px', color: 'white', margin: '5px' }}>BUY NOW!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

                            </div>

                            {/*social media services*/}
                            <p className="titleProduct socialMediaServices">OUR <span>SOCIAL MEDIA</span> SERVICES </p>
                            <div className="container15">
                                <div className="wrapper">
                                    <img src="youtubeBanner.jpeg" alt="" />
                                    <div className="content">
                                        <span>YOUTUBE</span>
                                        <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                        <p>
                                            <select name id="youtubeService">
                                                <option value="-">Choose</option>
                                                <option disabled value="50 MAD">--PRIVATE ACC--</option>
                                                <option value="105 MAD">3 MONTHS PREMIUM </option>
                                                <option value="300 MAD">1 YEAR PREM+MUSIC </option>
                                                <option disabled value="50 MAD">---LIKES---</option>
                                                <option value="50 MAD">1K LIKES</option>
                                                <option value="90 MAD">2K LIKES</option>
                                                <option value="130 MAD">3K LIKES</option>
                                                <option disabled value="50 MAD">--VIEWS--</option>
                                                <option value="50 MAD">1K [HQ] VIEWS</option>
                                                <option value="65 MAD">1K [HQ] REAL VIEWS</option>
                                                <option value="90 MAD">2K [HQ] VIEWS</option>
                                                <option value="120 MAD">2K [HQ] REAL VIEWS</option>
                                                <option disabled value="50 MAD">--FOLLOWERS--</option>
                                                <option value="190 MAD">500 [HQ] FOLLOWERS</option>
                                                <option value="350 MAD">1K [HQ] FOLLOWERS</option>
                                                <option disabled value="50 MAD">--WATCHTIME--</option>
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
                                    <img src="snapchatBanner.jpeg" alt="" />
                                    <div className="content">
                                        <span>SNAPCHAT</span>
                                        <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                        <p>
                                            <select name id="snapchatService">
                                                <option value="-">Choose</option>
                                                <option disabled value="50 MAD">---FOLLOWERS---</option>
                                                <option value="190 MAD">100 [Hight Quality] REAL </option>
                                                <option value="590 MAD">500 [Hight Quality] REAL </option>
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
                                    <img src="tiktokBanner.jpeg" alt="" />
                                    <div className="content">
                                        <span>TIK-TOK</span> <br />
                                        <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                        <p>
                                            <select name id="tiktokService">
                                                <option value="-">Choose</option>
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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="istagramBanner.jpeg" alt="" />
                                    <div className="content">
                                        <span>INSTAGRAM</span>
                                        <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                        <p>
                                            <select name id="instagramService">
                                                <option value="-">Choose</option>
                                                <option disabled value="-">-FOLLOWERS Hight Quality-</option>
                                                <option value="30 MAD">1K FOLLOWERS </option>
                                                <option value="100 MAD">5K FOLLOWERS </option>
                                                <option value="180 MAD">10K FOLLOWERS </option>
                                                <option disabled value="-">-FOLLOWERS NO DROP-</option>
                                                <option value="35 MAD">1K FOLLOWERS</option>
                                                <option value="110 MAD">5K FOLLOWERS</option>
                                                <option value="190 MAD">10K FOLLOWERS</option>
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
                                    <img src="facebookBanner.jpeg" alt="" />
                                    <div className="content">
                                        <span>FACEBOOK</span>
                                        <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                        <p>
                                            <select name id="facebookService">
                                                <option value="-">Choose</option>
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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="tiwtchBanner.jpeg" alt="" />
                                    <div className="content">
                                        <span>TWITCH</span>
                                        <h6 className="SocialInfos">( 100% SAFE + WARRANTY )</h6>
                                        <p>
                                            <select name id="twitchService">
                                                <option value="-">Choose</option>
                                                <option value="60 MAD">1K FOLLOWERS</option>
                                                <option disabled value="25 MAD">--TIER 1--</option>
                                                <option value="25 MAD">1 MONTH</option>
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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* our streaming */}

                            <p className="titleProduct streamingService">OUR STREAMING <span>SERVICES</span></p>
                            <div className="container10">
                                <div className="wrapper">
                                    <img src="leaguepass.jpeg" alt="" />
                                    <div className="content">
                                        <span>NBA LEAGUE PASS</span>
                                        <h6 className="SocialInfos">( + WARRANTY )</h6>
                                        <p>
                                            <select name id="nbaLeagueService">
                                                <option value="-">Choose</option>
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
                                    <img src="hulu.jpeg" alt="" />
                                    <div className="content">
                                        <span>HULU</span>
                                        <h6 className="SocialInfos">( + WARRANTY )</h6>
                                        <p>
                                            <select name id="huluService">
                                                <option value="-">Choose</option>
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
                                    <img src="ufcfight.jpeg" alt="" />
                                    <div className="content">
                                        <span>UFC FIGHT PASS</span>
                                        <h6 className="SocialInfos">( + WARRANTY )</h6>
                                        <p>
                                            <select name id="ufcFightService">
                                                <option value="-">Choose</option>
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
                            <p className="titleProduct otherService">OTHER <span>SERVICES</span></p>
                            <div className="container9">
                                <div className="wrapper">
                                    <img src="8BALL.JPEG" alt="" />
                                    <div className="content">
                                        <span>8 BALL POOL</span>
                                        <h6 className="SocialInfos">( PRIVATE ACCOUNT )</h6>
                                        <p>
                                            <select name id="firstUsaService">
                                                <option value="-">Choose</option>
                                                <option value="55 MAD">100M +ALL TABLES </option>
                                                <option value="55 MAD">DIAMOND CUE</option>
                                                <option value="155 MAD">1B💸 + diamond CUE💎 + OUTBREAK </option>
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
                                    <img src="travisSkin.jpeg" alt="" />
                                    <div className="content">
                                        <span>TRAVIS SCOTT </span>
                                        <h6 className="SocialInfos">( PRIVATE ACCOUNT )</h6>
                                        <p>
                                            <select name id="secondUsaService">
                                                <option value="-">Choose</option>
                                                <option value="580 MAD">TRAVIS + TRILLOGY + 46 SKINS</option>
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
                                            <p>1 Account is available with a reasonable price </p>
                                            <p>This is a Full access Account. means you can change email and password </p> <br/>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="intrepidSkin.jpeg" />
                                    <div className="content">
                                        <span>INTREPID PACK </span> <br />
                                        <h6 className="SocialInfos">( GIFT CARD [KEY] )</h6>
                                        <p>
                                            <select name id="thirdUsaService">
                                                <option value="-">Choose</option>
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
                                                <option value="-">Choose</option>
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
                                                <option value="-">Choose</option>
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
                                        <span>13k V-BUCKS</span>
                                        <h6 className="SocialInfos">( PRIVATE + MAIL ACCESS )</h6>
                                        <p>
                                            <select name id="GrapplingClaw3">
                                                <option value="-">Choose</option>
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

                                <div className="wrapper">
                                    <img src="freefire.jpeg" alt="" />
                                    <div className="content">
                                        <span>FREE FIRE</span>
                                        <h6 className="SocialInfos">( PRIVATE + MAIL ACCESS )</h6>
                                        <p>
                                            <select name id="freefireSelect">
                                                <option value="-">Budget </option>
                                                <option value="65 MAD">65 DH</option>
                                                <option value="80 MAD">80 DH</option>
                                                <option value="95 MAD">95 DH</option>
                                                <option value="110 MAD">110 DH</option>
                                                <option value="125 MAD">125 DH</option>
                                                <option value="140 MAD">140 DH</option>
                                                <option value="155 MAD">155 DH</option>
                                                <option value="170 MAD">170 DH</option>
                                                <option value="185 MAD">185 DH</option>
                                                <option value="200 MAD">200 DH</option>                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="freefireprice" className="price">PRICE : </div>
                                        <div className="buttons">
                                            <button onClick={this.buy13kVnucks}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>Click buy for more infos</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <img src="efootaball.jpeg" alt="" />
                                    <div className="content">
                                        <span>E-FOOTBALL 2023</span>
                                        <h6 className="SocialInfos">( PRIVATE + MAIL ACCESS )</h6>
                                        <p>
                                            <select name id="efootballSelect">
                                                <option value="-">Choose</option>
                                                <option value="90 MAD">THIS ACCOUNT</option>
                                                <option value="A Discuter">Other ACCOUNT</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="efootballprice" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buyEfootball}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>Click buy for more infos</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <img src="brawlstar19k.jpeg" alt="" />
                                    <div className="content">
                                        <span>BRAWL STARS</span>
                                        <h6 className="SocialInfos">( PRIVATE + MAIL ACCESS )</h6>
                                        <p>
                                            <select name id="brawlstarselect">
                                                <option value="-">Choose</option>
                                                <option value="A Discuter"> NEED ACCOUNT</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="brawlstarprice" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buy13kVnucks}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p> photos are available,  there are 10000 gold in the account and 1000 jewels</p>
                                        </div>
                                    </div>
                                </div>
                            </div><p className="titleProduct "> SHOPPING <span>SERVICE </span> </p>

<div className="input-block" style={{ margin: '5px' }}>
    <input type="text" name="input-text" id="input-text-shopping" required spellCheck="false" placeholder='Smit lgame libghiti tshopi fiha'/* onChange={this.handleInputChange} */ />
    <div style={{ color: 'red', fontWeight: 'bold', marginTop: '8px' }}> {this.state.message}</div>
    <div className="button-containerr">
        <button type="submit" onClick={this.buyGameDesired}>
            <FontAwesomeIcon icon={faSearch} /> SHOPI LIA 
        </button>
        <button type="reset" onClick={() => document.getElementById('input-text-shopping').value = ''}>
            <FontAwesomeIcon icon={faTimes} /> RESET
        </button>

    </div>
</div>
                            <p className="titleProduct steam">OUR PC <span>GAMES</span></p>

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
                            <p className="titleProduct psPlusSlide">OUR <span>PS PLUS SERVICES </span>(Achat f compte dialk)</p>
                            <div className="container10 " id='container10'>
                                <div className="wrapper">
                                    <img src="psPlus1Months.jpeg" alt="" />
                                    <div className="content">
                                        <span>1 MONTH </span>
                                        <h6 className="SocialInfos blinkOffer">Offer ends in{' '}
                                            <span >
                                                {hours.toString().padStart(2, '0')}H:
                                                {minutes.toString().padStart(2, '0')}:
                                                {seconds.toString().padStart(2, '0')}
                                            </span>
                                        </h6>                                         <p>
                                            <select name id="firstMoroccoService">
                                                <option value="-">Choose</option>
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
                                    <img src="psPlus3Months.jpeg" alt="" />
                                    <div className="content">
                                        <span>3 MONTHS </span>
                                        <h6 className="SocialInfos blinkOffer">Offer ends in{' '}
                                            <span >
                                                {hours.toString().padStart(2, '0')}H:
                                                {minutes.toString().padStart(2, '0')}:
                                                {seconds.toString().padStart(2, '0')}
                                            </span>
                                        </h6>                                         <p>
                                            <select name id="secondMoroccoService">
                                                <option value="-">Choose</option>
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
                                    <img src="psPlus12Months.jpeg" alt="" />
                                    <div className="content">
                                        <span>12 MONTHS </span>
                                        <h6 className="SocialInfos blinkOffer">Offer ends in{' '}
                                            <span >
                                                {hours.toString().padStart(2, '0')}H:
                                                {minutes.toString().padStart(2, '0')}:
                                                {seconds.toString().padStart(2, '0')}
                                            </span>
                                        </h6>                                         <p>
                                            <select name id="thirdMoroccoService">
                                                <option value="-">Choose</option>
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
                            <p className="titleProduct psGames">OUR <span>PS4</span> /<span> PS5 GAMES</span> </p>
                            <div className="container" style={{ display: 'none' }}>
                                <div className="wrapper2">
                                    <img src="fifa23Games.png" alt="" />
                                    <div className="content">
                                        <span>FIFA 23</span>
                                    </div>
                                    <div className="row">
                                        <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} id="fifa23Plateforme">
                                            <option value="-">Choose</option>
                                            <option value="170 MAD ">PS4 Compte kaml (t9dr tbdl lih mail / pass)</option>
                                            <option value="200 MAD ">PS5 Compte kaml (t9dr tbdl lih mail / pass)</option>

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
                                            <p>There is no Description for this product</p>
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
                                            <option value="-">Choose</option>
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
                                            <p>There is no Description for this product</p>
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
                                            <option value="-">Choose</option>
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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 style={{ fontWeight: 'bold', display: 'none' }}
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
                                        <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} id="f1Plateforme">
                                            <option value="-">Choose</option>
                                            <option value="290 MAD " disabled>PS4 Primary</option>
                                            <option value="160 MAD ">PS4 Secondary</option>
                                            <option value="300 MAD" disabled>PS5 Primary</option>
                                            <option value="180 MAD ">PS5 Secondary</option>
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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper2">
                                    <img src="gta5Games.png" alt="" />
                                    <div className="content">
                                        <span>GTA 5</span>
                                    </div>
                                    <div className="row">
                                        <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} id="gtaPlateforme">
                                            <option value="-">Choose</option>
                                            <option value="220 MAD ">PS4 Compte kaml (t9dr tbdl mail / pass)</option>

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
                                            <p>Compte kaml t9dr tbdl Email / Pass</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper2">
                                    <img src="ragnarok.png" alt="" />
                                    <div className="content">
                                        <span>GOW RAGNAROK</span>
                                    </div>
                                    <div className="row">
                                        <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} id="ragnarokPlateforme">
                                            <option value="-">Out of stock</option>

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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 style={{ fontWeight: 'bold' }} className="containerText2" onClick={() => {
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
                                        <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} id="spidermanPlateforme">
                                            <option value="-">Out of stock</option>

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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper2">
                                    <img src="rdr2.png" alt="" />
                                    <div className="content">
                                        <span>RDR 2</span>
                                    </div>
                                    <div className="row">
                                        <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} id="rdrPlateforme">
                                            <option value="-">Out of stock</option>

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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper2">
                                    <img src="fifa23Banner.jpeg" alt="" />
                                    <div className="content">
                                        <span>FIFA 23</span>
                                    </div>
                                    <div className="row">
                                        <select style={{ borderRadius: '12px', padding: '1px', color: '#000000', fontWeight: 'bold', fontSize: '11px' }} id="fifa22Plateforme">
                                            <option value="-">Choose</option>
                                            <option value="170 MAD ">PS4 Compte kaml (t9dr tbdl mail / pass)</option>
                                            <option value="200 MAD ">PS5 Compte kaml (t9dr tbdl mail / pass)</option>
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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="titleProduct ">YOUR DESIRED <span>PS GAME </span> </p>

                            <div className="input-block" style={{ margin: '5px' }}>
                                <input type="text" name="input-text" id="input-text-ps" required spellCheck="false" placeholder='Smit lgame likhasak'/* onChange={this.handleInputChange} */ />
                                <div style={{ color: 'red', fontWeight: 'bold', marginTop: '8px' }}> {this.state.message}</div>
                                <div className="button-containerr">
                                    <button type="submit" onClick={this.buyPsGameDesired}>
                                        <FontAwesomeIcon icon={faSearch} /> ORDER THIS
                                    </button>
                                    <button type="reset" onClick={() => document.getElementById('input-text-ps').value = ''}>
                                        <FontAwesomeIcon icon={faTimes} /> RESET
                                    </button>

                                </div>
                            </div>

                            <p className="titleProduct giftCardsAndAccount">OUR <span>PSN GIFT CARDS </span> </p>
                            <div className="container4">
                                <div className="wrapper">
                                    <img src="psn5euro.jpeg" alt="" />
                                    <div className="content">
                                        <span>PSN 5€ - France</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 80 MAD</div>
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
                                        <div className="price">PRICE : 150 MAD</div>
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
                                        <div className="price">PRICE : 260 MAD</div>
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

                                <div className="wrapper">
                                    <img src="eaplayPlaystation.jpeg" alt="" />
                                    <div className="content">
                                        <span>EA Play - 1 Month</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 60 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyea1Monthps}>BUY</button>
                                            {/*PSN5EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Power on your PlayStation console and ensure it's connected to the internet. <br />
                                                2. Go to the PlayStation Store and select your Avatar at the top of the screen. <br />
                                                3. Choose "Redeem Codes" from the drop-down menu. <br />
                                                4. Enter the provided code carefully and select "Redeem". <br />
                                                5. The credit or content associated with the code will be applied to your account. <br />
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="eaplayPlaystation.jpeg" alt="" />
                                    <div className="content">
                                        <span>EA Play - 6 Months</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 150 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyea6Monthsps}>BUY</button>
                                            {/*PSN10EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Power on your PlayStation console and ensure it's connected to the internet. <br />
                                                2. Go to the PlayStation Store and select your Avatar at the top of the screen. <br />
                                                3. Choose "Redeem Codes" from the drop-down menu. <br />
                                                4. Enter the provided code carefully and select "Redeem". <br />
                                                5. The credit or content associated with the code will be applied to your account. <br />
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="eaplayPlaystation.jpeg" alt="" />
                                    <div className="content">
                                        <span>EA Play - 12 Months</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 250 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyea12Monthsps}>BUY</button>
                                            {/*PSN20EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Power on your PlayStation console and ensure it's connected to the internet. <br />
                                                2. Go to the PlayStation Store and select your Avatar at the top of the screen. <br />
                                                3. Choose "Redeem Codes" from the drop-down menu. <br />
                                                4. Enter the provided code carefully and select "Redeem". <br />
                                                5. The credit or content associated with the code will be applied to your account. <br />
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <p className="titleProduct giftCardsAndAccount">OUR <span>XBOX GIFT CARDS </span> </p>
                            <div className="container4">
                                <div className="wrapper">
                                    <img src="xbox5eur.jpeg" alt="" />
                                    <div className="content">
                                        <span>XBOX 5€ - Europe</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 80 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyXbox5euro}>BUY</button>
                                            {/*PSN5EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Power on your Xbox console and ensure it's connected to the internet. <br />
                                                2. Access the Xbox Store from the console's menu. <br />
                                                3. Select "Use a Code" from the Xbox Store options. <br />
                                                4. Carefully enter the 25-digit code provided to you. <br />
                                                5. Confirm the code and select "Redeem" to process it. <br />
                                                6. The value of the gift card is added to your Xbox account balance. <br />
                                                7. Use this balance to purchase games, content, and more from the Xbox Store. <br />
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="xbox10eur.jpeg" alt="" />
                                    <div className="content">
                                        <span>XBOX 10€ - Europe</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 150 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyXbox10euro}>BUY</button>
                                            {/*PSN10EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Power on your Xbox console and ensure it's connected to the internet. <br />
                                                2. Access the Xbox Store from the console's menu. <br />
                                                3. Select "Use a Code" from the Xbox Store options. <br />
                                                4. Carefully enter the 25-digit code provided to you. <br />
                                                5. Confirm the code and select "Redeem" to process it. <br />
                                                6. The value of the gift card is added to your Xbox account balance. <br />
                                                7. Use this balance to purchase games, content, and more from the Xbox Store. <br />
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="xbox20eur.jpeg" alt="" />
                                    <div className="content">
                                        <span>XBOX 20€ - Europe</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 260 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyXbox20euro}>BUY</button>
                                            {/*PSN20EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Power on your Xbox console and ensure it's connected to the internet. <br />
                                                2. Access the Xbox Store from the console's menu. <br />
                                                3. Select "Use a Code" from the Xbox Store options. <br />
                                                4. Carefully enter the 25-digit code provided to you. <br />
                                                5. Confirm the code and select "Redeem" to process it. <br />
                                                6. The value of the gift card is added to your Xbox account balance. <br />
                                                7. Use this balance to purchase games, content, and more from the Xbox Store. <br />
                                            </p>

                                        </div>
                                    </div>
                                </div>


                                <div className="wrapper">
                                    <img src="eaplay1Month.jpeg" alt="" />
                                    <div className="content">
                                        <span>EA Play - 1 Month</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : Out of stock</div>
                                        <div className="buttons">
                                            <button onClick={this.buyea1Month}>BUY</button>
                                            {/*PSN5EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Turn on your Xbox console and ensure it's connected to the internet. <br />
                                                2. Go to the Xbox Store from the console's menu.<br />
                                                3. Select "Use a Code" from the Xbox Store options.<br />
                                                4. Enter the 25-digit code provided to you carefully.<br />
                                                5. Confirm the code and select "Redeem" to process it.<br />
                                                6. Access and download EA Play games from the EA Play section in the Xbox Store.<br />
                                                7. Alternatively, use the EA Play Hub app to access and play EA Play games.<br />
                                                Enjoy playing the games as long as your EA Play subscription is active.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="eaplay6Months.jpeg" alt="" />
                                    <div className="content">
                                        <span>EA Play - 6 Months</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 240 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyea6Months}>BUY</button>
                                            {/*PSN10EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Turn on your Xbox console and ensure it's connected to the internet. <br />
                                                2. Go to the Xbox Store from the console's menu.<br />
                                                3. Select "Use a Code" from the Xbox Store options.<br />
                                                4. Enter the 25-digit code provided to you carefully.<br />
                                                5. Confirm the code and select "Redeem" to process it.<br />
                                                6. Access and download EA Play games from the EA Play section in the Xbox Store.<br />
                                                7. Alternatively, use the EA Play Hub app to access and play EA Play games.<br />
                                                Enjoy playing the games as long as your EA Play subscription is active.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <img src="eaplay12Months.jpeg" alt="" />
                                    <div className="content">
                                        <span>EA Play - 12 Months</span>
                                    </div>
                                    <div className="row">
                                        <div className="price">PRICE : 290 MAD</div>
                                        <div className="buttons">
                                            <button onClick={this.buyea12Months}>BUY</button>
                                            {/*PSN20EU  */}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>
                                                1. Turn on your Xbox console and ensure it's connected to the internet. <br />
                                                2. Go to the Xbox Store from the console's menu.<br />
                                                3. Select "Use a Code" from the Xbox Store options.<br />
                                                4. Enter the 25-digit code provided to you carefully.<br />
                                                5. Confirm the code and select "Redeem" to process it.<br />
                                                6. Access and download EA Play games from the EA Play section in the Xbox Store.<br />
                                                7. Alternatively, use the EA Play Hub app to access and play EA Play games.<br />
                                                Enjoy playing the games as long as your EA Play subscription is active.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="titleProduct ">XBOX <span>GAMES </span> </p>

                            <div className="container2">
                                <div className="wrapper2">
                                    <img src="fifa23Banner.jpeg" alt="" />
                                    <div className="content">
                                        <span>FIFA 23</span>
                                    </div>
                                    <div className="row">

                                        <div className="buttons">
                                            <div id="f1Price" className="price">PRICE : 250</div>
                                        </div>
                                        <div className="buttons">
                                            <button onClick={this.buyFifa23xbox}>BUY</button>
                                            {/*F1*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper2">
                                    <img src="gta5Games.png" alt="" />
                                    <div className="content">
                                        <span>GTA 5</span>
                                    </div>
                                    <div className="row">

                                        <div className="buttons">
                                            <div id="gtaPrice" className="price">PRICE : 150</div>
                                        </div>
                                        <div className="buttons">
                                            <button onClick={this.buyGta5xbox}>BUY</button>
                                            {/*GTA 5*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>Compte kaml t9dr tbdl Email / Pass</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper2">
                                    <img src="minecraft.jpeg" alt="" />
                                    <div className="content">
                                        <span>MINECRAFT</span>
                                    </div>
                                    <div className="row">

                                        <div className="buttons">
                                            <div id="ragnarokPrice" className="price">PRICE : 100</div>
                                        </div>
                                        <div className="buttons">
                                            <button onClick={this.buyMinecraftxbox}>BUY</button>
                                            {/*RAGNAROK*/}
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="titleProduct ">YOUR DESIRED <span>XBOX GAME </span> </p>

                            <div className="input-block" style={{ margin: '5px' }}>
                                <input type="text" name="input-text" id="input-text-xbox" required spellCheck="false" placeholder='Smit lgame likhasak'/* onChange={this.handleInputChange} */ />
                                <div style={{ color: 'red', fontWeight: 'bold', marginTop: '8px' }}> {this.state.message}</div>
                                <div className="button-containerr">
                                    <button type="submit" onClick={this.buyXboxGameDesired}>
                                        <FontAwesomeIcon icon={faSearch} /> ORDER THIS
                                    </button>
                                    <button type="reset" onClick={() => document.getElementById('input-text-xbox').value = ''}>
                                        <FontAwesomeIcon icon={faTimes} /> RESET
                                    </button>

                                </div>
                            </div>

                            <p className="titleProduct giftCardsAndAccount">XBOX <span>SERVICES </span> </p>
                            <div className="container10">
                                <div className="wrapper">
                                    <img src="xboxlivegold.jpeg" alt="" />
                                    <div className="content">
                                        <span>XBOX LIVE GOLD</span>
                                        <p>
                                            <select name id="goldService">
                                                <option value="-">Choose</option>
                                                <option value={34} disabled>1 MONTH</option>
                                                <option value={'200 MAD'}>3 MONTHS</option>
                                                <option value={'450 MAD'}>12 MONTHS</option>
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
                                    <img src="gamepass.jpeg" alt="" />
                                    <div className="content">
                                        <span>XBOX GAME PASS </span>
                                        <p>
                                            <select name id="gamepassService">
                                                <option value="-">Choose</option>
                                                <option disabled value="-">--Xbox & Pc--</option>
                                                <option disabled value={'80 '}>2 Months</option>
                                                <option disabled value="-">--Only Pc--</option>
                                                <option value={'150 MAD'}>3 Months</option>
                                                <option disabled value="-">--Only Console--</option>
                                                <option value={'250 MAD'}>3 Months</option>
                                                


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



                            <p className="titleProduct giftCardsAndAccount">OTHER <span>SERVICES </span> </p>
                            <div className="container10">

                                <div className="wrapper">
                                    <img src="valorant.jpeg" alt="" />
                                    <div className="content">
                                        <span>VALORANT </span>
                                        <p>
                                            <select name id="valoService">
                                                <option value="-">Choose</option>
                                                <option value={'170 MAD'}>1000 PTS Europe</option>
                                                <option value={'80 MAD'}>1000 PTS Turkey</option>
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

                                <div className="wrapper">
                                    <img src="office.jpeg" alt="" />
                                    <div className="content">
                                        <span>OFFICE </span>
                                        <p>
                                            <select name id="officeService">
                                                <option value="-">Choose</option>
                                                <option disabled value="-">-- PRIVATE ACCOUNT --</option>
                                              
                                                <option value="100 MAD"> OFFICE 2019 LIFETIME</option>
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
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <img src="windows.jpeg" alt="" />
                                    <div className="content">
                                        <span>WINDOWS KEY </span>
                                        <p>
                                            <select name id="windowsService">
                                                <option value="-">Choose</option>
                                                <option disabled value="-">--LIFETIME KEY--</option>
                                                <option value="80 MAD">WINDOWS 10 </option>
                                                <option value="100 MAD">WINDOWS 11 </option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="windows" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buyWindows}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p>There is no Description for this product</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="wrapper">
                                    <img src="steam.jpeg" alt="" />
                                    <div className="content">
                                        <span>STEAM CARDS</span>
                                        <p>
                                            <select name id="steamService">
                                                <option value="-">Choose</option>
                                                <option value={'160 MAD'}>10 Euro</option>
                                                <option value={'260 MAD'}>20 Euro</option>
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
                                    <img src="cvDesign.jpeg" alt="" />
                                    <div className="content">
                                        <span>CV Design</span>
                                        <p>
                                            <select name id="cvdesignService">
                                                <option value="-">Choose</option>
                                                <option value={'35 MAD'}>1 CV</option>
                                                <option value={'50 MAD'}>2 CV</option>
                                                <option value={'70 MAD'}>1 CV + LETTRE DE MOTIVATION</option>
                                                <option value={'30 MAD'}>LETTRE DE MOTIVATION</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="cvdesign" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buyCvDesign}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                            <p> <span style={{ fontWeight: 'bold' }}>How it works ?</span> <br />
                                                1- ALL THI STEPS ARE AFTER BUYING.<br />
                                                2- WE WILL SEND YOU SOME DESIGN TO CHOOSE YOUR DESIRED.<br />
                                                3- YOU WILL GIVE US THE WHOLE INFORMATION YOU WANT ON YOUR CV.<br />
                                                4- WHEN IT IS DONE, WE WILL SEND IT TO YOU IMMEDIATELY TO GIVE AN OPINION. <br />
                                               
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <img src="adobeCreative.jpeg" alt="" />
                                    <div className="content">
                                        <span>ADOBE CREATIVE </span>
                                        <p>
                                            <select name id="adobeService">
                                                <option value="-">Choose</option>
                                                <option value={'80 MAD'}>1 MOIS</option>
                                                <option value={'180 MAD'}>3 MOIS</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="adobe" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buyAdobe}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                                                                        <p>There is no Description for this product</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <img src="chatGpt.jpeg" alt="" />
                                    <div className="content">
                                        <span>CHAT GPT</span>
                                        <p>
                                            <select name id="gptService">
                                                <option value="-">Choose</option>
                                                <option value={'25 MAD'}>GPT DEVELOPPER MODE</option>
                                                <option value={'50 MAD'}>GPT PLUS </option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="gpt" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buyGpt}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                                                                        <p>The developper mode will allow GPT to answer all type of questions without any restriction (Like giving an opinion or saying a bad words) </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <img src="apex.jpeg" alt="" />
                                    <div className="content">
                                        <span>APEX LEGENDS</span>
                                        <p>
                                            <select name id="apexService">
                                                <option value="-">Choose</option>
                                                <option value={'A DISCUTER'}> HEIRLOOM</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="apex" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buyApex}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                                                                        <p>There is no Description for this product</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <img src="avakinLife.jpeg" alt="" />
                                    <div className="content">
                                        <span>AVAKIN LIFE</span>
                                        <p>
                                            <select name id="avakinService">
                                                <option value="-">Choose</option>
                                                <option value={'250 MAD'}>60 000 AVACOINS</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div id="avakin" className="price">PRICE :</div>
                                        <div className="buttons">
                                            <button onClick={this.buyAvakin}>BUY</button>
                                            <button className="info-btn">INFOS</button>
                                        </div>
                                    </div>
                                    <div className="modal">
                                        <div className="modal-content">
                                            <span className="close-btn">×</span>
                                                                                        <p>There is no Description for this product</p>

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
                            <p className="benefitQuestion">OUR <span> SATISFIED</span> CUSTOMERS </p><br />


                            <p style={{ backgroundColor: 'black', paddingTop: '20px' }}> < Trustpilot /></p>

                        </div>

                        <Footer />

                    </div>
                </>}

            </div >



        )
    }
}

export default Table;