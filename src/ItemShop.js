import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Typewriter from "./typeWritter";
import Loading from "./LoadingScreen";

const FortniteItemShop = () => {
    const [loading, setLoading] = useState(false);
    const [daily, setDaily] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [specialFeatured, setSpecialFeatured] = useState([]);

    useEffect(() => {
        fetch('https://fortnite-api.com/v2/shop/br')
            .then((res) => res.json())
            .then((data) => {
                setFeatured(data.data.featured.entries);
                setDaily(data.data.daily.entries);
                setSpecialFeatured(data.data.specialFeatured.entries);
                setLoading(false)
            });


    }, []);


    if (loading) {
        return <div style={{ backgroundColor: 'black' }}><Loading /></div>;
    }

    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <h1
                style={{
                    padding: '20px',
                    width: '100%',
                    fontFamily: '',
                    fontWeight: 'bold',
                    fontSize: '48px',
                    marginBottom: '29px',
                    textAlign: 'center',
                    animation: 'glow 1s ease-in-out infinite alternate',
                }}
            >
                FORTNITE GIFT
            </h1>
            <div
                style={{
                    padding: '10px',
                    width: '100%',
                    fontFamily: '',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    marginBottom: '29px',
                    textAlign: 'center',
                    animation: 'glow 1s ease-in-out infinite alternate',
                    color: 'orange',
                }}
            >
                <p>
                    Ajouter hada 3ndk f les amis Epic :{' '}
                </p>{' '}
                <br />{' '}
                <Typewriter text="DigitalStore_09        " delay={150} />
            </div>

            <h1
                style={{
                    backgroundColor: 'green',
                    borderRadius: '12px',
                    padding: '2px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    margin: '20px',
                    textAlign: 'center',
                }}
            >
                DAILY ITEMS
            </h1>
            {/* daily */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {daily.map((item) => {
                    let vbucks = item.finalPrice;
                    let itemName = item.items[0].name;
                    let itemImg = item.items[0].images.icon;
                    let total = '';

                    switch (vbucks) {
                        case 200:
                            total = '10 DH';
                            break;
                        case 300:
                            total = '15 DH';
                            break;
                        case 400:
                            total = '20 DH';
                            break;
                        case 500:
                            total = '20 DH';
                            break;
                        case 700:
                            total = '30 DH';
                            break;
                        case 800:
                            total = '30 DH';
                            break;
                        case 1000:
                            total = '40 DH';
                            break;
                        case 1200:
                            total = '40 DH';
                            break;
                        case 1300:
                            total = '45 DH';
                            break;
                        case 1400:
                            total = '50 DH';
                            break;
                        case 1500:
                            total = '50 DH';
                            break;
                        case 1600:
                            total = '55 DH';
                            break;
                        case 1700:
                            total = '60 DH';
                            break;
                        case 1800:
                            total = '60 DH';
                            break;
                        case 2000:
                            total = '65 DH';
                            break;
                        case 2200:
                            total = '75 DH';
                            break;
                        case 2300:
                            total = '80 DH';
                            break;
                        case 2300:
                            total = '85 DH';
                            break;
                        case 2500:
                            total = '95 DH';
                            break;
                        case 2700:
                            total = '100 DH';
                            break;
                        case 2800:
                            total = '105 DH';
                            break;
                        default:
                            total = '';
                            break;
                    }

                    const message = `Salam *Digital Store* khasni \n *--- GIFT FORNITE ---* \n\n *⇾ IMAGE :* \n ${itemImg}\n *⇾ ITEM :* ${itemName} \n *⇾ V-Bucks :* ${vbucks} \n *⇾ TOTAL :* ${total}   `;
                    const encodedMessage = encodeURIComponent(message);
                    const url = `https://wa.me/+212637976257?text=${encodedMessage}`;

                    return (
                        <div
                            key={item.offerId}
                            style={{
                                width: '150px',
                                margin: '10px',
                                border: 'solid 1px white',
                                padding: '5px',
                                textAlign: 'center',
                                borderRadius: '12px',
                            }}
                        >
                            <img
                                src={item.items[0].images.icon}
                                alt={item.items[0].name}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: 'solid 1px white',
                                    borderRadius: '12px',
                                    marginBottom: '12px',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: 'green',
                                    borderRadius: '12px',
                                    padding: '2px',
                                    width: '100%',
                                    fontWeight: 'bold',
                                    marginBottom: '3px',
                                }}
                                onClick={() => {
                                    window.location.href = url;
                                }}
                            >
                                BGHIT HADI
                            </button>
                            <p style={{ color: 'orange', padding: '10px' }}>{total}</p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '5px',
                                }}
                            >
                                <h3>{item.finalPrice}</h3>
                                <img
                                    style={{ width: '15%', paddingLeft: '2px' }}
                                    src="https://img.icons8.com/color/452/v-bucks.png"
                                    alt="V-Bucks"
                                />
                            </div>
                            <h3>{item.items[0].name}</h3>
                        </div>
                    );
                })}
            </div>

            {/* featured */}
            <h1
                style={{
                    backgroundColor: 'green',
                    borderRadius: '12px',
                    padding: '2px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    margin: '19px',
                    textAlign: 'center',
                }}
            >
                FEATURED ITEMS
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {featured.map((item) => {
                    let vbucks = item.finalPrice;
                    let itemName = item.items[0].name;
                    let itemImg = item.items[0].images.icon;
                    let total = '';

                    switch (vbucks) {
                        case 200:
                            total = '10 DH';
                            break;
                        case 300:
                            total = '15 DH';
                            break;
                        case 400:
                            total = '20 DH';
                            break;
                        case 500:
                            total = '20 DH';
                            break;
                        case 700:
                            total = '30 DH';
                            break;
                        case 800:
                            total = '30 DH';
                            break;
                        case 1000:
                            total = '40 DH';
                            break;
                        case 1200:
                            total = '40 DH';
                            break;
                        case 1300:
                            total = '45 DH';
                            break;
                        case 1400:
                            total = '50 DH';
                            break;
                        case 1500:
                            total = '50 DH';
                            break;
                        case 1600:
                            total = '55 DH';
                            break;
                        case 1700:
                            total = '60 DH';
                            break;
                        case 1800:
                            total = '60 DH';
                            break;
                        case 2000:
                            total = '65 DH';
                            break;
                        case 2200:
                            total = '75 DH';
                            break;
                        case 2300:
                            total = '80 DH';
                            break;
                        case 2300:
                            total = '85 DH';
                            break;
                        case 2500:
                            total = '95 DH';
                            break;
                        case 2700:
                            total = '100 DH';
                            break;
                        case 2800:
                            total = '105 DH';
                            break;
                        default:
                            total = '';
                            break;
                    }

                    const message = `Salam *Digital Store* khasni \n *--- GIFT FORNITE ---* \n\n *⇾ IMAGE :* \n ${itemImg}\n *⇾ ITEM :* ${itemName} \n *⇾ V-Bucks :* ${vbucks} \n *⇾ TOTAL :* ${total}   `;
                    const encodedMessage = encodeURIComponent(message);
                    const url = `https://wa.me/+212637976257?text=${encodedMessage}`;

                    return (
                        <div
                            key={item.offerId}
                            style={{
                                width: '150px',
                                margin: '10px',
                                border: 'solid 1px white',
                                padding: '5px',
                                textAlign: 'center',
                                borderRadius: '12px',
                            }}
                        >
                            <img
                                src={item.items[0].images.icon}
                                alt={item.items[0].name}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: 'solid 1px white',
                                    borderRadius: '12px',
                                    marginBottom: '12px',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: 'green',
                                    borderRadius: '12px',
                                    padding: '2px',
                                    width: '100%',
                                    fontWeight: 'bold',
                                    marginBottom: '3px',
                                }}
                                onClick={() => {
                                    window.location.href = url;
                                }}
                            >
                                BGHIT HADI
                            </button>
                            <p style={{ color: 'orange', padding: '10px' }}>{total}</p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '5px',
                                }}
                            >
                                <h3>{item.finalPrice}</h3>
                                <img
                                    style={{ width: '15%', paddingLeft: '2px' }}
                                    src="https://img.icons8.com/color/452/v-bucks.png"
                                    alt="V-Bucks"
                                />
                            </div>
                            <h3>{item.items[0].name}</h3>
                        </div>
                    );
                })}
            </div>

            {/* special featured */}
            <h1
                style={{
                    backgroundColor: 'green',
                    borderRadius: '12px',
                    padding: '2px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    margin: '19px',
                    textAlign: 'center',
                }}
            >
                SPECIAL FEATURED ITEMS
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {specialFeatured.map((item) => {
                    let vbucks = item.finalPrice;
                    let itemName = item.items[0].name;
                    let itemImg = item.items[0].images.icon;
                    let total = '';

                    switch (vbucks) {
                        case 200:
                            total = '10 DH';
                            break;
                        case 300:
                            total = '15 DH';
                            break;
                        case 400:
                            total = '20 DH';
                            break;
                        case 500:
                            total = '20 DH';
                            break;
                        case 700:
                            total = '30 DH';
                            break;
                        case 800:
                            total = '30 DH';
                            break;
                        case 1000:
                            total = '40 DH';
                            break;
                        case 1200:
                            total = '40 DH';
                            break;
                        case 1300:
                            total = '45 DH';
                            break;
                        case 1400:
                            total = '50 DH';
                            break;
                        case 1500:
                            total = '50 DH';
                            break;
                        case 1600:
                            total = '55 DH';
                            break;
                        case 1700:
                            total = '60 DH';
                            break;
                        case 1800:
                            total = '60 DH';
                            break;
                        case 2000:
                            total = '65 DH';
                            break;
                        case 2200:
                            total = '75 DH';
                            break;
                        case 2300:
                            total = '80 DH';
                            break;
                        case 2300:
                            total = '85 DH';
                            break;
                        case 2500:
                            total = '95 DH';
                            break;
                        case 2700:
                            total = '100 DH';
                            break;
                        case 2800:
                            total = '105 DH';
                            break;
                        default:
                            total = '';
                            break;
                    }

                    const message = `Salam *Digital Store* khasni \n *--- GIFT FORNITE ---* \n\n *⇾ IMAGE :* \n ${itemImg}\n *⇾ ITEM :* ${itemName} \n *⇾ V-Bucks :* ${vbucks} \n *⇾ TOTAL :* ${total}   `;
                    const encodedMessage = encodeURIComponent(message);
                    const url = `https://wa.me/+212637976257?text=${encodedMessage}`;

                    return (
                        <div
                            key={item.offerId}
                            style={{
                                width: '150px',
                                margin: '10px',
                                border: 'solid 1px white',
                                padding: '5px',
                                textAlign: 'center',
                                borderRadius: '12px',
                            }}
                        >
                            <img
                                src={item.items[0].images.icon}
                                alt={item.items[0].name}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: 'solid 1px white',
                                    borderRadius: '12px',
                                    marginBottom: '12px',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: 'green',
                                    borderRadius: '12px',
                                    padding: '2px',
                                    width: '100%',
                                    fontWeight: 'bold',
                                    marginBottom: '3px',
                                }}
                                onClick={() => {
                                    window.location.href = url;
                                }}
                            >
                                BGHIT HADI
                            </button>
                            <p style={{ color: 'orange', padding: '10px' }}>{total}</p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '5px',
                                }}
                            >
                                <h3>{item.finalPrice}</h3>
                                <img
                                    style={{ width: '15%', paddingLeft: '2px' }}
                                    src="https://img.icons8.com/color/452/v-bucks.png"
                                    alt="V-Bucks"
                                />
                            </div>
                            <h3>{item.items[0].name}</h3>
                        </div>
                    );
                })}
            </div>

            <Footer />
        </div>
    );
};

export default FortniteItemShop;
