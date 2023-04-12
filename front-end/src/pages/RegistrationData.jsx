import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

const RegistrationData = () => {

    const [ isHiddenPass, setIsHiddenPass ] = useState(true);
    const [ isHiddenConfirmPass, setIsHiddenConfirmPass ] = useState(true);

    const navigate = useNavigate();

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        alert('usuario registrado');
        navigate('/login')
    }

    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Link to='/data-validation/validate/all-verified' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-evenly p-6">
                <div className='text-center'>
                    <p className='text-xl font-bold text-white p-3'>Registra tus datos</p>
                    <p className='text-sm text-slate-300'>Para seguir, ingresá tus datos.</p>
                </div>
                <form className='w-full flex flex-col gap-3 text-slate-300' onSubmit={handleFormSubmit}>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="name" className='pb-1'>Nombre</label>
                        <input type='text' id='name' placeholder='Escribe aquí tu nombre' required='required' className='h-12 bg-neutral-700 font-semibold text-black pl-4'/>
                    </fieldset>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="last-name" className='pb-1'>Apellido</label>
                        <input type='text' id='last-name' placeholder='Escribe aquí tu apellido' required='required' className='h-12 bg-neutral-700 font-semibold text-black pl-4'/>
                    </fieldset>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="country">País de residencia</label>
                        <select name="" id="country" required='required' className='h-12 bg-neutral-700 border-transparent font-semibold text-white pl-4'>
                            <option value="">Seleccionar</option>
                            <option value="">Ecuador</option>
                        </select>
                    </fieldset>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="DNI" className='pb-1'>DNI</label>
                        <input type='text' id='DNI' placeholder='Escribe aquí tu DNI' required='required' className='h-12 bg-neutral-700 font-semibold text-black pl-4'/>
                    </fieldset>
                    <fieldset className='flex flex-col text-xs relative'>
                        <label htmlFor="password" className='pb-1'>Contraseña</label>
                        <input type={ isHiddenPass? 'password' : 'text' } id='password' placeholder='Escribe aquí tu contraseña' required='required' className='h-12 bg-neutral-700 font-semibold text-black pl-4'/>
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
                        <input type={ isHiddenConfirmPass? 'password' : 'text' } id='validate-password' placeholder='Vuelve a escribir tu contraseña' required='required' className='h-10 bg-neutral-700 font-semibold text-black pl-4'/>
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