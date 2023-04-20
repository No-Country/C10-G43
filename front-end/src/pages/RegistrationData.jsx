import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import config from "../utils/config";
import Notiflix from "notiflix";

const RegistrationData = () => {

    const [ isHiddenPass, setIsHiddenPass ] = useState(true);
    const [ isHiddenConfirmPass, setIsHiddenConfirmPass ] = useState(true);
    const [ isPassEqual, setIsPassEqual ] = useState('border-violet-500');
    
    const emailData = useSelector(state => state.emailData);
    const phoneData = useSelector(state => state.phoneData);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const { API_BASE_URL } = config;

    Notiflix.Notify.init({
        timeout: 2000,
        clickToClose: true,
        showOnlyTheLastOne: true,
      });

    const submit = (data) =>{

        if(data.password === data.confirmPassword){
            axios.post(`${API_BASE_URL}/users/register`, {...data, email: emailData, phoneNumber: phoneData})
                .then(() => {
                    setIsPassEqual('border-violet-500');
                    Notiflix.Notify.success("Usuario creado exitosamente");
                    navigate('/login');
                })
                .catch(error => {
                    Notiflix.Notify.failure(error.response.data.message);
                });
            
        }
        else{
            alert('Las contraseñas deben coincidir');
            setIsPassEqual('border-pink-950 ');
        }

    }

    return (
        <div className='w-screen h-screen bg-neutral-900'>
            <Link to='/data-validation/validate/all-verified' className='w-full h-[5%] flex items-center pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-evenly p-6">
                <div className='text-center'>
                    <p className='text-xl font-bold p-3 text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text'>Registra tus datos</p>
                    <p className='text-sm text-slate-300'>Para seguir, ingresá tus datos.</p>
                </div>
                <form className='w-full flex flex-col gap-3 text-slate-300' onSubmit={handleSubmit(submit)}>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="name" className='pb-1'>Nombre</label>
                        <input 
                            className='h-12 font-semibold pl-4 rounded bg-transparent font-semibold text-white border-2 border-violet-500'
                            type='text' 
                            id='name' 
                            placeholder='Escribe aquí tu nombre' 
                            required='required' 
                            {...register('firstName')}
                        />
                    </fieldset>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="last-name" className='pb-1'>Apellido</label>
                        <input 
                            className='h-12 font-semibold pl-4 rounded bg-transparent font-semibold text-white border-2 border-violet-500'
                            type='text' 
                            id='last-name' 
                            placeholder='Escribe aquí tu apellido' 
                            required='required'
                            {...register('lastName')}
                        />
                    </fieldset>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="DNI" className='pb-1'>DNI</label>
                        <input 
                            className='h-12 font-semibold pl-4 rounded bg-transparent font-semibold text-white border-2 border-violet-500'
                            type='text' 
                            id='DNI' 
                            placeholder='Escribe aquí tu DNI' 
                            required='required' 
                            {...register('identificationNumber')}
                        />
                    </fieldset>
                    <fieldset className='flex flex-col text-xs relative'>
                        <label htmlFor="password" className='pb-1'>Contraseña</label>
                        <input 
                            className='h-12 font-semibold pl-4 rounded bg-transparent font-semibold text-white border-2 border-violet-500'
                            type={ isHiddenPass? 'password' : 'text' } 
                            id='password' 
                            placeholder='Escribe aquí tu contraseña' 
                            required='required' 
                            {...register('password')}
                        />
                        <div className='absolute right-3 bottom-3'>
                            {
                                isHiddenPass?
                                    <Icon onClick={()=> setIsHiddenPass(!isHiddenPass)} icon="ic:outline-remove-red-eye" color="#f1f1f1" width="24" height="24"/>
                                :
                                    <Icon onClick={()=> setIsHiddenPass(!isHiddenPass)} icon="mdi:eye-off-outline" color="#f1f1f1" width="24" height="24" />
                            }
                        </div>
                    </fieldset>
                    <fieldset className='flex flex-col text-xs relative'>
                        <label htmlFor="validate-password" className='pb-1'>Confirmar contraseña</label>
                        <input 
                            className={`h-12 ${isPassEqual} font-semibold pl-4 rounded bg-transparent font-semibold text-white border-2`}
                            type={ isHiddenConfirmPass? 'password' : 'text' } 
                            id='validate-password' 
                            placeholder='Vuelve a escribir tu contraseña' 
                            required='required' 
                            {...register('confirmPassword')}
                        />
                        <div className='absolute right-3 bottom-3'>
                            {
                                isHiddenConfirmPass?
                                    <Icon onClick={()=> setIsHiddenConfirmPass(!isHiddenConfirmPass)} icon="ic:outline-remove-red-eye" color="#f1f1f1" width="24" height="24"/>
                                :
                                    <Icon onClick={()=> setIsHiddenConfirmPass(!isHiddenConfirmPass)} icon="mdi:eye-off-outline" color="#f1f1f1" width="24" height="24" />
                            }
                        </div>
                    </fieldset>
                    <button className='h-12 bg-white text-sm font-semibold text-white mt-6 rounded bg-gradient-to-r from-blue-600 to-fuchsia-600'>Ingresar</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationData;