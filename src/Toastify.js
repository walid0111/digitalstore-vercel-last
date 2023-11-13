import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const randomNumber = getRandomNumber(13, 76);

    useEffect(() => {
        const intervalId = setInterval(() => {
            notify();
        }, 13000);

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
