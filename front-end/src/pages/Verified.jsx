import { Icon } from '@iconify/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Verified = () => {

    const navigate = useNavigate();
    const isEmail = useSelector(state => state.isEmail);

    const validatedData = [
        {
            type: 'email',
            data: 'juanignaciocountry@gmail.com'
        },
        {
            type: 'número telefónico',
            data: '+54 9 1234 5678'
        }
    ];

    return (
        <div className='w-screen h-screen bg-neutral-900'>
            <Link to='/data-validation' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center items-center gap-10 p-6">
                <div className='text-center'>
                    <p className='text-xl font-semibold text-white p-3'>¡Genial! Validamos tu {isEmail? validatedData[0].type : validatedData[1].type}</p>
                    <p className='text-sm text-slate-300'>Usaremos este {isEmail? validatedData[0].type : validatedData[1].type} para recuperar tu cuenta de ser necesario y para mantener tu seguridad.</p>
                </div>
                <p className='flex font-semibold text-white'>
                    {isEmail? validatedData[0].data : validatedData[1].data}
                    <Icon icon="material-symbols:check-circle-outline-rounded" color="#f1f1f1" width="24" height="24" />
                </p>
                <button onClick={()=> navigate('/data-validation')} className='h-12 w-full flex justify-center items-center gap-3 bg-white text-sm font-bold text-black mt-12'>
                    Continuar 
                    <Icon icon="ph:arrow-right-bold" color="#212121" width="20" height="20" />
                </button>
            </div>
        </div>
    );
};

export default Verified;