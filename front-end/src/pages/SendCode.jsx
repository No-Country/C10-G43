import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmailData } from '../store/slices/emailData.slice';
import { setPhoneData } from '../store/slices/phoneData.slice';

const SendCode = () => {

    const [ inputValue, setInputValue ] = useState('')
    const navigate = useNavigate();
    const isEmail = useSelector(state => state.isEmail);
    const dispatch = useDispatch();

    const sendCodeForValidate = () =>{
        navigate('code');
        isEmail ? dispatch(setEmailData(inputValue)) : dispatch(setPhoneData(inputValue));
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
        <div className='w-screen h-screen bg-neutral-900'>
            <Link to='/data-validation' className='w-full h-[5%] flex items-center pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center gap-14 p-6">
                <div className='text-center'>
                    <p className='text-xl font-bold p-3 text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text'>Ingresa tu {isEmail? dataToSend[0].insert :  dataToSend[1].insert}</p>
                    <p className='text-sm text-slate-300'>Te enviaremos un {isEmail? dataToSend[0].send : dataToSend[1].send} para confirmarlo.</p>
                </div>
                <form className='w-full flex flex-col gap-3 text-slate-300' onSubmit={sendCodeForValidate}>
                    <input 
                        className='h-12 text-xs bg-transparent rounded border-2 border-slate-500 font-semibold pl-4 text-white border-2 border-violet-500'
                        type={isEmail? 'email' : 'number'} 
                        placeholder={isEmail? 'Escribe aquí tu e-mail' : 'Escribe aquí tu número'} 
                        required='required'
                        value={inputValue} 
                        onChange={(event)=> setInputValue(event.target.value)}
                    />    
                    <button className='h-12 text-sm font-semibold text-white mt-12 rounded bg-gradient-to-r from-blue-600 to-fuchsia-600 p-0.5'>Enviar confirmación</button>
                </form>
            </div>
        </div>
    );
};

export default SendCode;