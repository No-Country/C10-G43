import { Icon } from '@iconify/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AllVerified = () => {
    
    const navigate = useNavigate();

    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Link to='/data-validation' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center items-center gap-10 p-6">
                <div className='text-center'>
                    <p className='text-xl font-semibold text-white p-3'>¡Perfecto! Validamos todos tus datos</p>
                    <p className='text-sm text-slate-300'>Solo queda terminar el registro.</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='flex font-semibold text-white'>
                        juanignaciocountry@gmail.com
                        <Icon icon="material-symbols:check-circle-outline-rounded" color="#f1f1f1" width="24" height="24" />
                    </p>
                    <p className='flex font-semibold text-white'>
                        +54 9 1234 5678
                        <Icon icon="material-symbols:check-circle-outline-rounded" color="#f1f1f1" width="24" height="24" />
                    </p>
                </div>
                <button onClick={()=> navigate('/registration')} className='h-12 w-full flex justify-center items-center gap-3 bg-white text-sm font-bold text-black mt-12'>
                    Continuar 
                    <Icon icon="ph:arrow-right-bold" color="#212121" width="20" height="20" />
                </button>
            </div>
        </div>
    );
};

export default AllVerified;