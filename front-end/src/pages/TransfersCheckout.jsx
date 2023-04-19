import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

const TransfersCheckout = () => {
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <div className='w-full h-[5%] flex items-center'>
                <Link to='/data-validation/validate/all-verified' className=' flex items-center backdrop-blur pl-6'>
                    <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
                </Link>
                <h1 className='grow text-center'>Transferir dinero</h1>
            </div>
            <div className="w-screen h-[95%] flex flex-col justify-evenly p-6">
               <p>Transfieres a</p>
            </div>
        </div>
    );
};

export default TransfersCheckout;