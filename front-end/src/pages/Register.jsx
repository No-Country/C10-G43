import React from 'react';

const Register = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-evenly items-center p-6">
            <div className='w-24 h-24 bg-stone-300 rounded-full'></div>
            <div className='text-center'>
                <p className='text-lg font-semibold text-gray-600 p-3'>Para crear tu cuenta necesitamos validar tus datos</p>
                <p className='text-sm text-slate-500'>Solo te tomará unos minutos</p>
            </div>
            <div className='w-full flex flex-col gap-6'>
                <button className='h-14 text-sm bg-zinc-700 font-semibold text-white'>Crear cuenta personal</button>
                <button className='h-14 text-sm border-2 border-slate-500 font-semibold text-gray-600'>Crear cuenta de negocios</button>
                <p className='text-sm text-slate-500'>¿Ya tienes una cuenta? <a href="#" className='text-slate-600'>Inicia sesión.</a></p>
            </div>
        </div>
    );
};

export default Register;