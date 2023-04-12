import React from 'react';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Register = () => {
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Link to='/' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center items-center gap-32 p-6">
                <div className='text-center'>
                    <p className='text-xl font-semibold text-white p-3'>Crea una nueva cuenta</p>
                    <p className='text-sm text-slate-300'>Para hacerlo necesitamos validar tus datos, solo te tomará unos minutos.</p>
                </div>
                <div className='w-full flex flex-col gap-6'>
                    <Link to='/data-validation' className='h-12 bg-white flex justify-center items-center'>
                        <button className='text-base font-semibold text-black'>Crear cuenta personal</button>
                    </Link> 
                    <Link to='/data-validation' className='h-12 border-2 border-slate-500 flex justify-center items-center'>
                        <button className='text-base font-semibold text-slate-300'>Crear cuenta de negocios</button>
                    </Link>
                    <p className='text-sm text-slate-300 pt-5'>¿Ya te registraste?  
                        <Link to='/login' className='font-bold text-white'> Inicia sesión.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;