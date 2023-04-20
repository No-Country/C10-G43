import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

const SendCode = () => {

    const navigate = useNavigate();
    const isEmail = useSelector(state => state.isEmail);

    const sendCodeForValidate = () =>{
        alert(isEmail? 'validando email...' : 'validando número telefónico...');
        navigate('code');
    }

    const dataToSend = [
        {
            insert: 'e-mail',
            send: 'correo',

        },
        {
            insert: 'télefono',
            send: 'SMS'
        }
    ];

    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Link to='/data-validation' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center gap-14 p-6">
                <div className='text-center'>
                    <p className='text-xl font-bold text-white p-3'>Ingresa tu {isEmail? dataToSend[0].insert :  dataToSend[1].insert}</p>
                    <p className='text-sm text-slate-300'>Te enviaremos un {isEmail? dataToSend[0].send : dataToSend[1].send} para confirmarlo.</p>
                </div>
                <form className='w-full flex flex-col gap-3 text-slate-300' onSubmit={sendCodeForValidate}>
                    <input type={isEmail? 'email' : 'number'} placeholder={isEmail? 'Escribe aquí tu e-mail' : 'Escribe aquí tu número'} required='required' className='h-12 text-xs bg-neutral-700 border-2 border-slate-500 font-semibold text-black pl-4'/>
                    <button className='h-12 bg-white text-sm font-semibold text-black mt-12'>Enviar confirmación</button>
                </form>
            </div>
        </div>
    );
};

export default SendCode;