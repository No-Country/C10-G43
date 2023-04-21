import React from 'react';
import icon from "../assets/icon.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from 'react-redux';

const DepositVoucher = () => {

    const amount = useSelector(state => state.amountDeposited);

    return (
        <div className="w-screen h-screen bg-neutral-900">
            <Link to="/homepage" className="w-full h-[5%] flex items-center pl-6">
                <Icon icon="ic:round-close" color="white" className="text-2xl" />
            </Link>
            <div className="w-full h-[95%] flex flex-col items-center justify-center gap-16 p-6">
                <div className='flex flex-col items-center'>
                    <img src={icon} alt="icon" className="w-20 h-20" />
                    <p className='pt-3 text-white'>¡Listo! Ya tenés tu dinero disponible.</p>
                </div>
                <p className='text-white text-3xl text-bold'>$ {amount}</p>
                <Link
                    className="w-full flex items-center justify-center h-14 rounded bg-gradient-to-r from-blue-600 to-fuchsia-600 p-0.5"
                    to="/homepage"
                    >
                    <button className="w-full h-full flex justify-center items-center gap-3 p-4 text bg-neutral-900">
                        <Icon icon="ph:arrow-right-bold" color="#FFFFFF" width="20" height="20" hFlip={true}/>
                        <h1 className="text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text">
                            Volver al inicio
                        </h1>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DepositVoucher;