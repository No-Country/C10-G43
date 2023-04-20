import React, { useState } from 'react';
import CodeBox from '../components/CodeBox';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmailValidated } from '../store/slices/emailValidated.slice';
import { setPhoneValidated } from '../store/slices/phoneValidated.slice';

const CodeConfirmation = () => {

    const isEmail = useSelector(state => state.isEmail);
    const navigate = useNavigate();
    const emailData = useSelector(state => state.emailData);
    const phoneData = useSelector(state => state.phoneData);
    const dispatch = useDispatch();

    const [ code, setCode ] = useState(['', '', '', '']);

    const handleCodeChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    }

    const submit = ()=>{
        navigate('/data-validation/validate/verified');
        if(isEmail){
            dispatch(setEmailValidated(true))
        }
        else{
            dispatch(setPhoneValidated(true))
        }
    }

    const dataForCode = [
        {
            perEmail: 'e-mail',
            email: emailData,
            change: 'Cambiar e-mail.'
        },
        {
            perSms: 'SMS',
            phone: phoneData,
            change: 'Cambiar número.'
        }
    ]
    return (
        <div className='w-screen h-screen bg-neutral-900'>
            <Link to='/data-validation/validate'className='w-full h-[5%] flex items-center pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center gap-14 p-6">
                <div className='text-center'>
                    <h1 className='text-xl font-bold p-3 text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text'>Ingresa el código que te enviamos por {isEmail? dataForCode[0].perEmail : dataForCode[1].perSms}</h1>
                    <p className='text-sm text-slate-300'>Lo enviamos a  
                        <span className='font-bold text-white'> {isEmail? dataForCode[0].email : dataForCode[1].phone}</span>.
                    </p>
                </div>
                <form onSubmit={submit}>
                    <fieldset className='flex justify-evenly'>
                        <CodeBox value={code[0]} onChange={(e) => handleCodeChange(0, e.target.value.substring(0, 1))} />
                        <CodeBox value={code[1]} onChange={(e) => handleCodeChange(1, e.target.value.substring(0, 1))} />
                        <CodeBox value={code[2]} onChange={(e) => handleCodeChange(2, e.target.value.substring(0, 1))} />
                        <CodeBox value={code[3]} onChange={(e) => handleCodeChange(3, e.target.value.substring(0, 1))} />
                    </fieldset>
                    <button type='submit' className='h-12 w-full mt-14 text-sm font-semibold text-white rounded bg-gradient-to-r from-blue-600 to-fuchsia-600'>Confirmar código</button>
                </form>
                <p className='text-sm text-slate-300'>¿No encuentras el correo?  
                    <Link to='/data-validation/validate' className='font-bold text-white'> {isEmail? dataForCode[0].change : dataForCode[1].change}</Link>
                </p>
            </div>
        </div>
    );
};

export default CodeConfirmation;