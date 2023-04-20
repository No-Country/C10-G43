import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { setIsEmail } from '../store/slices/isEmail.slice';
import { useSelector, useDispatch } from 'react-redux';

const ValidationButtons = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailValidated = useSelector(state => state.emailValidated);
    const phoneValidated = useSelector(state => state.phoneValidated); 
    
    const buttonData = [
        {
            icon: "material-symbols:mail-outline-rounded",
            validate: "Valida tu e-mail",
            description: "Servirá para recuperar tu cuenta.",
            isValidated: emailValidated
        },
        {
            icon: "mingcute:cellphone-line",
            validate: "Valida tu teléfono",
            description: "Lo usarás para entrar a tu cuenta.",
            isValidated: phoneValidated
        }
    ];

    const navigateTo = (validate) => {
        navigate('validate');
        dispatch(setIsEmail(validate === "Valida tu e-mail" ? true : false));
      };
      
    return (
        <div className='w-full flex flex-col gap-3'>
            {
                buttonData.map((data, index)=> (
                    <div 
                        className='rounded bg-gradient-to-r from-blue-600 to-fuchsia-600 p-0.5'
                        key={index} 
                    >
                        <button 
                            className='h-14 w-full bg-neutral-900 flex items-center justify-between px-2 text-sm font-semibold text-white'
                            onClick={()=> navigateTo(data.validate)} 
                            aria-label={data.validate}
                            disabled={data.isValidated}
                        >
                            <div className='flex gap-2'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r from-blue-600 to-fuchsia-600 p-0.5'>
                                    <Icon className='w-full h-full bg-neutral-900 rounded-full p-2' icon={data.icon} color="#f1f1f1" width="24" height="24" />
                                </div>
                                <div className='text-start'>
                                    <p className='text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text'>{data.validate}</p>
                                    <p className='text-xs text-slate-300'>{data.description}</p>
                                </div>
                            </div>
                            {
                                data.isValidated || data.isValidated ?
                                    <Icon className='ml-2' icon="material-symbols:check-circle-outline-rounded" color="rgb(91 33 182)" width="24" height="24" />
                                :
                                    <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24"/>
                            }
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default ValidationButtons;