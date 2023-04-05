import React from 'react';
import ValidationButtons from '../components/ValidationButtons';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const DataValidation = () => {
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Link to='/register' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center items-center gap-10 p-6">
                <div className='text-center'>
                    <p className='text-xl font-semibold text-white p-3'>Tus datos</p>
                    <p className='text-sm text-slate-300'>Valida tu identidad para mantener la seguridad de tu cuenta intacta.</p>
                </div>
                <ValidationButtons/>
            </div>
        </div>
    );
};

export default DataValidation;