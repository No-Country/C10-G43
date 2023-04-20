import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="w-screen h-screen bg-neutral-900 flex flex-col justify-center items-center gap-10 p-6">
            <div className='w-[152px] h-[152px] bg-neutral-700 rounded-full'></div>
            <div className='text-center'>
                <p className='text-xl font-semibold text-white p-3'>¡Te damos la bienvenida!</p>
                <p className='text-sm text-slate-300'>Inicia sesión o crea una cuenta para comenzar a administrar tu dinero.</p>
            </div>
            <div className='w-full flex flex-col gap-6'>
                <Link to='/login' className='h-14 bg-white flex justify-center items-center'>
                    <button className='text-sm font-semibold text-black'>Inicia sesión</button>
                </Link>
                <Link to='/register' className='h-14 flex justify-center items-center border-2 border-slate-300'>
                    <button className='text-sm font-semibold text-slate-300'>Crea tu cuenta</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;