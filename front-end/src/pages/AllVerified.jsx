import { Icon } from '@iconify/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AllVerified = () => {
    
    const navigate = useNavigate();
    const emailData = useSelector(state => state.emailData);
    const phoneData = useSelector(state => state.phoneData);

    return (
        <div className='w-screen h-screen bg-neutral-900'>
            <Link to='/data-validation' className='w-full h-[5%] flex items-center pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center items-center gap-10 p-6">
                <div className='text-center'>
                    <p className='text-xl font-semibold p-3 text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text'>¡Perfecto! Validamos todos tus datos</p>
                    <p className='text-sm text-slate-300'>Solo queda terminar el registro.</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='flex font-semibold text-white'>
                        {emailData}
                        <Icon className='ml-2' icon="material-symbols:check-circle-outline-rounded" color="rgb(91 33 182)" width="24" height="24" />
                    </p>
                    <p className='flex font-semibold text-white'>
                        {phoneData}
                        <Icon className='ml-2' icon="material-symbols:check-circle-outline-rounded" color="rgb(91 33 182)" width="24" height="24" />
                    </p>
                </div>
                <button onClick={()=> navigate('/registration')} className='h-12 w-full flex justify-center items-center gap-3 text-sm font-bold mt-12 text-white rounded bg-gradient-to-r from-blue-600 to-fuchsia-600'>
                    Continuar 
                    <Icon icon="ph:arrow-right-bold" color="#FFFFFF" width="20" height="20" />
                </button>
            </div>
        </div>
    );
};

export default AllVerified;