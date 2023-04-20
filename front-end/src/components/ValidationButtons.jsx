import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { setIsEmail } from '../store/slices/isEmail.slice';
import { useDispatch } from 'react-redux';

const ValidationButtons = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const buttonData = [
        {
            icon: "material-symbols:mail-outline-rounded",
            validate: "Valida tu e-mail",
            description: "Servirá para recuperar tu cuenta."
        },
        {
            icon: "mingcute:cellphone-line",
            validate: "Valida tu teléfono",
            description: "Lo usarás para entrar a tu cuenta."
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
                    <button 
                        key={index} 
                        className='h-14 w-full bg-neutral-700 flex items-center justify-between px-2 text-sm font-semibold text-white'
                        onClick={()=> navigateTo(data.validate)} 
                        aria-label={data.validate}
                    >
                        <div className='flex gap-2'>
                            <div className='w-10 h-10 bg-neutral-500 rounded-full flex justify-center items-center'>
                                <Icon icon={data.icon} color="#f1f1f1" width="24" height="24" />
                            </div>
                            <div className='text-start'>
                                <p className='text-sm font-semibold'>{data.validate}</p>
                                <p className='text-xs text-slate-300'>{data.description}</p>
                            </div>
                        </div>
                        <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24"/>
                    </button>
                ))
            }
        </div>
    );
};

export default ValidationButtons;