import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegistrationData = () => {

    const [ isHiddenPass, setIsHiddenPass ] = useState(true);
    const [ isHiddenConfirmPass, setIsHiddenConfirmPass ] = useState(true);
    const [ isPassEqual, setIsPassEqual ] = useState('border-0');

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const submit = (data) =>{

        if(data.password === data.confirmPassword){
            axios.post('http://localhost:9000/api/users/register', data)
                .then(() => {
                    setIsPassEqual('border-0');
                    alert('usuario registrado');
                    navigate('/login');
                })
                .catch(error => {
                    alert(error.response.data.message)
                    console.log(error.response)
                });
            
        }
        else{
            alert('Las contraseñas deben coincidir');
            setIsPassEqual('border-2');
        }

    }

    return (
        <div className='w-screen h-screen bg-neutral-900'>
            <Link to='/data-validation/validate/all-verified' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-evenly p-6">
                <div className='text-center'>
                    <p className='text-xl font-bold text-white p-3'>Registra tus datos</p>
                    <p className='text-sm text-slate-300'>Para seguir, ingresá tus datos.</p>
                </div>
                <form className='w-full flex flex-col gap-3 text-slate-300' onSubmit={handleSubmit(submit)}>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="name" className='pb-1'>Nombre</label>
                        <input 
                            className='h-12 bg-neutral-700 font-semibold text-black pl-4'
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
                            className='h-12 bg-neutral-700 font-semibold text-black pl-4'
                            type='text' 
                            id='last-name' 
                            placeholder='Escribe aquí tu apellido' 
                            required='required'
                            {...register('lastName')}
                        />
                    </fieldset>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="email" className='pb-1'>Correo</label>
                        <input 
                            className='h-12 bg-neutral-700 font-semibold text-black pl-4'
                            type='email' 
                            id='email' 
                            placeholder='Escribe aquí tu correo' 
                            required='required'
                            {...register('email')}
                        />
                    </fieldset>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="DNI" className='pb-1'>DNI</label>
                        <input 
                            className='h-12 bg-neutral-700 font-semibold text-black pl-4'
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
                            className='h-12 bg-neutral-700 font-semibold text-black pl-4'
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
                            className={`h-12 ${isPassEqual} border-pink-950 bg-neutral-700 font-semibold text-black pl-4`}
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
                    <button className='h-12 bg-white text-sm font-semibold text-black mt-6'>Ingresar</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationData;