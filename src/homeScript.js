import $ from 'jquery';

export default function setupMenu() {

    //nav script
    $(".menu-toggle-btn").on("click", function () {
        $(this).toggleClass("fa-times");
        $(".navigation-menu").toggleClass("active");
    });


    //Body Slide Show
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    //product price script


    // spotify script

    const select = document.getElementById("SpotifyMonths");
    const span = document.getElementById("spotify");
    select.addEventListener("change", function () {
        span.innerText = "PRICE : " + select.value;
    });

    //netflix script
    const standardSelect = document.getElementById('standard');
    const profileSelect = document.getElementById('profile');
    const accountTypSelect = document.getElementById('type');

    const netflixPriceSpan = document.getElementById('NetflixPrice');

    function calculateNetflixPrice() {
        const standardValue = parseInt(standardSelect.value);
        const profileValue = parseInt(profileSelect.value);
        const typeValue = parseInt(accountTypSelect.value);

        if (profileSelect.value != '-' && standardSelect.value != '-' && accountTypSelect.value != '-') {
            const totalPrice = standardValue + profileValue + typeValue;
            netflixPriceSpan.innerHTML = "PRICE : " + totalPrice + ' MAD';
        }
    }

    standardSelect.addEventListener('change', calculateNetflixPrice);
    profileSelect.addEventListener('change', calculateNetflixPrice);
    accountTypSelect.addEventListener('change', calculateNetflixPrice);
    // apple script

    const selectApple = document.getElementById("AppleMonths");
    const spanApple = document.getElementById("apple");
    selectApple.addEventListener("change", function () {
        spanApple.innerText = "PRICE : " + selectApple.value;
    });
    // prime script

    const selectPrime = document.getElementById("PrimeMonths");
    const spanPrime = document.getElementById("prime");
    selectPrime.addEventListener("change", function () {
        spanPrime.innerText = "PRICE : " + selectPrime.value;
    });
    // deezer script

    const selectDeezer = document.getElementById("DeezerMonths");
    const spanDeezer = document.getElementById("deezer");
    selectDeezer.addEventListener("change", function () {
        spanDeezer.innerText = "PRICE : " + selectDeezer.value;
    });

    // crunchy script

    const selectCrunchy = document.getElementById("CrunchyMonths");
    const spanCrunchy = document.getElementById("crunchy");
    selectCrunchy.addEventListener("change", function () {
        spanCrunchy.innerText = "PRICE : " + selectCrunchy.value;
    });
    // hbo script

    const selectHbo = document.getElementById("HboMonths");
    const spanHbo = document.getElementById("hbo");
    selectHbo.addEventListener("change", function () {
        spanHbo.innerText = "PRICE : " + selectHbo.value;
    });








    //disney script to show the price
    const DisneyProfile = document.getElementById('DisneyProfile');
    const DisneyMonths = document.getElementById('DisneyMonths');

    const DisneyPriceSpan = document.getElementById('disney');

    function calculateDisneyPrice() {
        const profileDisneyValue = parseInt(DisneyProfile.value);
        const typeDisneyValue = parseInt(DisneyMonths.value);

        if (DisneyProfile.value != '-' && DisneyMonths.value != '-') {
            const totalDisneyPrice = profileDisneyValue + typeDisneyValue;
            DisneyPriceSpan.innerHTML = "PRICE : " + totalDisneyPrice + ' MAD';
        }
    }

    DisneyProfile.addEventListener('change', calculateDisneyPrice);
    DisneyMonths.addEventListener('change', calculateDisneyPrice);





    //discord script
    const nitroSelect = document.getElementById('nitro');
    const typeNitroSelect = document.getElementById('typeNitro');
    const accountTypeSelect = document.getElementById('accountType');
    const DiscordPriceSpan = document.getElementById('DiscordPrice');

    function calculateDiscordPrice() {
        const nitroSelectValue = parseInt(nitroSelect.value);
        const typeNitroSelectValue = parseInt(typeNitroSelect.value);
        const accountTypeSelectValue = parseInt(accountTypeSelect.value);

        if (nitroSelect.value != '-' && typeNitroSelect.value != '-' && accountTypeSelect.value != '-') {
            const totalDiscordPrice = typeNitroSelectValue + nitroSelectValue + accountTypeSelectValue;
            DiscordPriceSpan.innerHTML = "PRICE : " + totalDiscordPrice + ' MAD';
        }
    }

    nitroSelect.addEventListener('change', calculateDiscordPrice);
    typeNitroSelect.addEventListener('change', calculateDiscordPrice);
    accountTypeSelect.addEventListener('change', calculateDiscordPrice);


    // iptv script

    const selectIptv = document.getElementById("iptvMonths");
    const spanIptv = document.getElementById("iptvPrice");
    selectIptv.addEventListener("change", function () {
        spanIptv.innerText = "PRICE : " + selectIptv.value;
    });


    //shahid script
    const shahidProfileSelect = document.getElementById('ShahidProfile');
    const shahidType = document.getElementById('shahidType');

    const shahidPriceSpan = document.getElementById('shahidPrice');

    function calculateShahidPrice() {
        const shahidProfileValue = parseInt(shahidProfileSelect.value);
        const shahidTypeValue = parseInt(shahidType.value);

        if (shahidProfileSelect.value != '-' && shahidType.value != '-') {
            const totalShahidPrice = shahidProfileValue + shahidTypeValue;
            shahidPriceSpan.innerHTML = "PRICE : " + totalShahidPrice;
        }
    }

    shahidProfileSelect.addEventListener('change', calculateShahidPrice);
    shahidType.addEventListener('change', calculateShahidPrice);

    // canva script

    const selectCanva = document.getElementById("canvaMonths");
    const spanCanva = document.getElementById("canva");
    selectCanva.addEventListener("change", function () {
        spanCanva.innerText = "PRICE : " + selectCanva.value;
    });


    // fifa23 script

    const selectFifa23 = document.getElementById("fifa23Plateforme");
    const spanFifa23 = document.getElementById("fifaPrice");
    selectFifa23.addEventListener("change", function () {
        spanFifa23.innerText = "PRICE : " + selectFifa23.value;
    });

    // bo3 script

    const selectBo3 = document.getElementById("bo3Plateforme");
    const spanBo3 = document.getElementById("bo3Price");
    selectBo3.addEventListener("change", function () {
        spanBo3.innerText = "PRICE : " + selectBo3.value;
    });

    // asseto script

    const selectAsseto = document.getElementById("assetoPlateforme");
    const spanAsseto = document.getElementById("assetoPrice");
    selectAsseto.addEventListener("change", function () {
        spanAsseto.innerText = "PRICE : " + selectAsseto.value;
    });

    // f1 script

    const selectF1 = document.getElementById("f1Plateforme");
    const spanF1 = document.getElementById("f1Price");
    selectF1.addEventListener("change", function () {
        spanF1.innerText = "PRICE : " + selectF1.value;
    });

    // gta5 script

    const selectGta = document.getElementById("gtaPlateforme");
    const spanGta = document.getElementById("gtaPrice");
    selectGta.addEventListener("change", function () {
        spanGta.innerText = "PRICE : " + selectGta.value;
    });

    // ragnarok script

    const selectRagnarok = document.getElementById("ragnarokPlateforme");
    const spanRagnarok = document.getElementById("ragnarokPrice");
    selectRagnarok.addEventListener("change", function () {
        spanRagnarok.innerText = "PRICE : " + selectRagnarok.value;
    });

    // spiderman script

    const selectSpiderman = document.getElementById("spidermanPlateforme");
    const spanSpiderman = document.getElementById("spidermanPrice");
    selectSpiderman.addEventListener("change", function () {
        spanSpiderman.innerText = "PRICE : " + selectSpiderman.value;
    });

    // rdr script

    const selectRdr = document.getElementById("rdrPlateforme");
    const spanRdr = document.getElementById("rdrPrice");
    selectRdr.addEventListener("change", function () {
        spanRdr.innerText = "PRICE : " + selectRdr.value;
    });

    // fifa22 script

    const selectFifa22 = document.getElementById("fifa22Plateforme");
    const spanFifa22 = document.getElementById("fifa22Price");
    selectFifa22.addEventListener("change", function () {
        spanFifa22.innerText = "PRICE : " + selectFifa22.value;
    });

    // youtube script

    const selectYoutube = document.getElementById("youtubeService");
    const spanYoutube = document.getElementById("youtube");
    selectYoutube.addEventListener("change", function () {
        spanYoutube.innerText = "PRICE : " + selectYoutube.value;
    });

    // snapchat script

    const selectSnapchat = document.getElementById("snapchatService");
    const spanSnapchat = document.getElementById("snapchat");
    selectSnapchat.addEventListener("change", function () {
        spanSnapchat.innerText = "PRICE : " + selectSnapchat.value;
    });

    // tiktok script

    const selectTiktok = document.getElementById("tiktokService");
    const spanTiktok = document.getElementById("tiktok");
    selectTiktok.addEventListener("change", function () {
        spanTiktok.innerText = "PRICE : " + selectTiktok.value;
    });

    // instagram script

    const selectInstagram = document.getElementById("instagramService");
    const spanInstagram = document.getElementById("instagram");
    selectInstagram.addEventListener("change", function () {
        spanInstagram.innerText = "PRICE : " + selectInstagram.value;
    });

    // Facebook script

    const selectFacebook = document.getElementById("facebookService");
    const spanFacebook = document.getElementById("facebook");
    selectFacebook.addEventListener("change", function () {
        spanFacebook.innerText = "PRICE : " + selectFacebook.value;
    });

    // Twitch script

    const selectTwitch = document.getElementById("twitchService");
    const spanTwitch = document.getElementById("twitch");
    selectTwitch.addEventListener("change", function () {
        spanTwitch.innerText = "PRICE : " + selectTwitch.value;
    });


    // first ps plus usa script

    const selectFirstUsa = document.getElementById("firstUsaService");
    const spanFirstUsa = document.getElementById("firstUsaPrice");
    selectFirstUsa.addEventListener("change", function () {
        spanFirstUsa.innerText = "PRICE : " + selectFirstUsa.value;
    });

    // second ps plus usa script

    const selectSecondUsa = document.getElementById("secondUsaService");
    const spanSecondUsa = document.getElementById("secondUsaPrice");
    selectSecondUsa.addEventListener("change", function () {
        spanSecondUsa.innerText = "PRICE : " + selectSecondUsa.value;
    });

    // third ps plus usa script

    const selectThirdUsa = document.getElementById("thirdUsaService");
    const spanThirdUsa = document.getElementById("thirdUsaPrice");
    selectThirdUsa.addEventListener("change", function () {
        spanThirdUsa.innerText = "PRICE : " + selectThirdUsa.value;
    });




    // first ps plus morocco script

    const selectFirstMorocco = document.getElementById("firstMoroccoService");
    const spanFirstMorocco = document.getElementById("firstMoroccoPrice");
    selectFirstMorocco.addEventListener("change", function () {
        spanFirstMorocco.innerText = "PRICE : " + selectFirstMorocco.value;
    });

    // second ps plus morocco script

    const selectSecondMorocco = document.getElementById("secondMoroccoService");
    const spanSecondMorocco = document.getElementById("secondMoroccoPrice");
    selectSecondMorocco.addEventListener("change", function () {
        spanSecondMorocco.innerText = "PRICE : " + selectSecondMorocco.value;
    });

    // third ps plus morocco script

    const selectThirdMorocco = document.getElementById("thirdMoroccoService");
    const spanThirdMorocco = document.getElementById("thirdMoroccoPrice");
    selectThirdMorocco.addEventListener("change", function () {
        spanThirdMorocco.innerText = "PRICE : " + selectThirdMorocco.value;
    });
    // hulu script

    const selectHulu = document.getElementById("huluService");
    const spanHulu = document.getElementById("huluPrice");
    selectHulu.addEventListener("change", function () {
        spanHulu.innerText = "PRICE : " + selectHulu.value;
    });
    // nba league script

    const selectNbaLeague = document.getElementById("nbaLeagueService");
    const spanNbaLeague = document.getElementById("nbaLeaguePrice");
    selectNbaLeague.addEventListener("change", function () {
        spanNbaLeague.innerText = "PRICE : " + selectNbaLeague.value;
    });


    // gta5  top up

    const selectGtaTopup = document.getElementById("gtaTopup");
    const spanGtaPopup = document.getElementById("gtaTopupPrice");
    selectGtaTopup.addEventListener("change", function () {
        spanGtaPopup.innerText = "PRICE : " + selectGtaTopup.value;
    });
    // ufc fight script

    const selectUfcFight = document.getElementById("ufcFightService");
    const spanUfcFight = document.getElementById("ufcFightPrice");
    selectUfcFight.addEventListener("change", function () {
        spanUfcFight.innerText = "PRICE : " + selectUfcFight.value;
    });
    // itunes script

    const selectItunes = document.getElementById("itunesService");
    const spanItunes = document.getElementById("itunes");
    selectItunes.addEventListener("change", function () {
        spanItunes.innerText = "PRICE : " + selectItunes.value + " MAD";
    });

    // psn gift card script

    const selectPsn = document.getElementById("psnService");
    const spanPsn = document.getElementById("psn");
    selectPsn.addEventListener("change", function () {
        spanPsn.innerText = "PRICE : " + selectPsn.value;
    });

    // psn account script

    const selectPsnAccount = document.getElementById("psnAccountService");
    const spanPsnAccount = document.getElementById("psnAccount");
    selectPsnAccount.addEventListener("change", function () {
        spanPsnAccount.innerText = "PRICE : " + selectPsnAccount.value + " MAD";
    });

    // valorant script

    const selectValo = document.getElementById("valoService");
    const spanValo = document.getElementById("valo");
    selectValo.addEventListener("change", function () {
        spanValo.innerText = "PRICE : " + selectValo.value + " MAD";
    });

    // gamepass script

    const selectGamepass = document.getElementById("gamepassService");
    const spanGamepass = document.getElementById("gamepass");
    selectGamepass.addEventListener("change", function () {
        spanGamepass.innerText = "PRICE : " + selectGamepass.value + " MAD";
    });

    // xbox live script

    const selectgold = document.getElementById("goldService");
    const spangold = document.getElementById("gold");
    selectgold.addEventListener("change", function () {
        spangold.innerText = "PRICE : " + selectgold.value + " MAD";
    });

    // steam script

    const selectSteam = document.getElementById("steamService");
    const spanSteam = document.getElementById("steam");
    selectSteam.addEventListener("change", function () {
        spanSteam.innerText = "PRICE : " + selectSteam.value + " MAD";
    });

    // roblox script

    const selectRoblox = document.getElementById("robloxService");
    const spanRoblox = document.getElementById("roblox");
    selectRoblox.addEventListener("change", function () {
        spanRoblox.innerText = "PRICE : " + selectRoblox.value;
    });

    // office script

    const selectOffice = document.getElementById("officeService");
    const spanOffice = document.getElementById("office");
    selectOffice.addEventListener("change", function () {
        spanOffice.innerText = "PRICE : " + selectOffice.value;
    });


    // grapplingClaw1 script

    const GrapplingClaw = document.getElementById("GrapplingClaw1");
    const spanClaw1 = document.getElementById("GrapplingClawPrice1");
    GrapplingClaw.addEventListener("change", function () {
        spanClaw1.innerText = "PRICE : " + GrapplingClaw.value;
    });



    // grapplingClaw2 script

    const GrapplingClaw2 = document.getElementById("GrapplingClaw2");
    const spanClaw2 = document.getElementById("GrapplingClawPrice2");
    GrapplingClaw2.addEventListener("change", function () {
        spanClaw2.innerText = "PRICE : " + GrapplingClaw2.value;
    });

    // grapplingClaw3 script

    const GrapplingClaw3 = document.getElementById("GrapplingClaw3");
    const spanClaw3 = document.getElementById("GrapplingClawPrice3");
    GrapplingClaw3.addEventListener("change", function () {
        spanClaw3.innerText = "PRICE : " + GrapplingClaw3.value;
    });

    // freefire script

    const freefire = document.getElementById("freefireSelect");
    const spanFreefire = document.getElementById("freefireprice");
    freefire.addEventListener("change", function () {
        spanFreefire.innerText = "PRICE : " + freefire.value;
    });
    // brawlstar script

    const brawlstar = document.getElementById("brawlstarselect");
    const spanBrawlStar = document.getElementById("brawlstarprice");
    brawlstar.addEventListener("change", function () {
        spanBrawlStar.innerText = "PRICE : " + brawlstar.value;
    });
    // efootball script

    const efootball = document.getElementById("efootballSelect");
    const spanEfootball = document.getElementById("efootballprice");
    efootball.addEventListener("change", function () {
        spanEfootball.innerText = "PRICE : " + efootball.value;
    });
    /* menu qui apparait script
     */

    // menu.js

    // menu.js

    // Récupération des éléments HTML nécessaires
    const infoButtons = document.querySelectorAll('.info-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Ajout d'un gestionnaire d'événement au clic pour chaque bouton "infos"
    infoButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });

    // Ajout d'un gestionnaire d'événement au clic pour chaque bouton "fermer"
    closeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'none';
        });
    });
}




