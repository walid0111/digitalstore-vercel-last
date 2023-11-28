import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const randomNumber = getRandomNumber(13, 57);

    useEffect(() => {
        const intervalId = setInterval(() => {
            notify();
        }, 14000);

        return () => clearInterval(intervalId);
    }, []);
    
    const randomMessages = [
        {
            text: <><strong>1 Client</strong> chra netflix private <strong>2 Min Ago</strong></>,
            type: 'success',
        },
        {
            text: <><strong>3 Clients</strong> chra Ea play 1 Month <strong>21h Ago</strong></>,
            type: 'success',
        },
        {
            text: <><strong>1 Client</strong> chra minecraft ps4 <strong>30 Min Ago</strong></>,
            type: 'success',
        },
        {
            text: <><strong>1 Client</strong> chra ps plus deluxe <strong>2h Ago</strong></>,
            type: 'success',
        },
        {
            text: <><strong>4 Client</strong> chraw disney 1 profile <strong>7h Ago</strong></>,
            type: 'success',
        },
        {
            text: <><strong>3 Clients</strong> chraw Ps Plus 1 Year <strong>1h Ago</strong></>,
            type: 'success',
        },
        {
            text: <><strong>2 Clients</strong> chraw Gta 5 ps4 <strong>1h ago</strong></>,
            type: 'success',
        },
        {
            text: <><strong>1 Client</strong> chra spotify upgrade <strong>0 Min ago</strong></>,
            type: 'success',
        },
        {
            text: `${randomNumber} are visiting the website`,
            type: 'info',
        },



        {
            text: <> <strong>2 Clients</strong> chraw Hulu subscription <strong>45 Min Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>4 Clients</strong> chraw Amazon Prime Video <strong>3h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Xbox Game Pass Ultimate <strong>15 Min Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>3 Clients</strong> chraw Apple Music family plan <strong>5h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw HBO Max account <strong>2h ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Adobe Creative Cloud <strong>1h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>5 Clients</strong> chraw PlayStation Now <strong>4h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw Office 365 subscription <strong>30 Min ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>3 Clients</strong> chra Nintendo Switch Online <strong>1h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw Spotify Family Plan <strong>2h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Google One subscription <strong>45 Min Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>4 Clients</strong> chraw Audible membership <strong>3h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Adobe Stock <strong>20 Min Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>3 Clients</strong> chraw Microsoft 365 <strong>1h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw Twitch Prime <strong>2h ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Hulu Live TV <strong>1h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>4 Clients</strong> chraw Dropbox Plus <strong>4h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw VPN Unlimited <strong>30 Min ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Slack workspace <strong>15 Min Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>3 Clients</strong> chraw LinkedIn Premium <strong>2h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw Adobe Acrobat Pro <strong>1h ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Norton 360 <strong>40 Min Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>4 Clients</strong> chraw Skillshare premium <strong>5h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>3 Clients</strong> chraw Tidal HiFi <strong>3h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw ExpressVPN <strong>2h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Quicken Deluxe <strong>1h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>5 Clients</strong> chraw 1Password subscription <strong>4h Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>2 Clients</strong> chraw Adobe Photoshop CC <strong>30 Min ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>1 Client</strong> chra Rosetta Stone language course <strong>20 Min Ago</strong> </>,
            type: 'success',
        },
        {
            text: <> <strong>3 Clients</strong> chraw Canva Pro <strong>2h Ago</strong> </>,
            type: 'success',
        },
        

        
        {
            text: `${randomNumber} are visiting the website`,
            type: 'info',
        },
        {
            text: `${randomNumber} are visiting the website`,
            type: 'info',
        },
        {
            text: `1 Client sift recharge invalide`,
            type: 'error',
        },
    ];

    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * randomMessages.length);
        return randomMessages[randomIndex];
    };

    const notify = () => {
        const { text, type } = getRandomMessage();
        switch (type) {
            case 'success':
                toast.success(text, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;

                case 'error':
                toast.error(text, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;
            
            case 'info':
                toast.info(text, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;
            // Ajoutez d'autres cas pour d'autres types de toasts si nécessaire
            default:
                toast.info(text, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
        }
    };

    return (
        <div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}
