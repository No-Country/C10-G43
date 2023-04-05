import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Login = () => {

    const [ isHidden, setIsHidden ] = useState(true);

    const navigate = useNavigate();

    const login = () => {
        alert('Ingresando...')
        navigate('/homepage')
    };

    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Link to='/' className='w-full h-[5%] flex items-center backdrop-blur pl-6'>
                <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true}/>
            </Link>
            <div className="w-screen h-[95%] flex flex-col justify-center gap-16 p-6">
                <div className='text-center'>
                    <p className='text-xl font-bold text-white p-3'>¡Hola de nuevo!</p>
                    <p className='text-sm text-slate-300'>Para seguir, ingresá tus datos.</p>
                </div>
                <form className='w-full flex flex-col gap-3 text-slate-300' onSubmit={login}>
                    <fieldset className='flex flex-col text-xs'>
                        <label htmlFor="email" className='pb-1'>Correo electronico</label>
                        <input type='email' id='email' placeholder='Escribe aquí tu e-mail' required='required' className='h-12 bg-neutral-700 font-semibold text-black pl-4'/>
                    </fieldset>
                    <fieldset className='flex flex-col text-xs relative'>
                        <label htmlFor="password" className='pb-1'>Contraseña</label>
                        <input type={ isHidden? 'password' : 'text' } id='password' placeholder='Escribe aquí tu contraseña' required='required' className='h-12 bg-neutral-700 font-semibold text-black pl-4'/>
                        <div className='absolute right-3 bottom-3'>
                            {
                                isHidden?
                                    <Icon onClick={()=> setIsHidden(!isHidden)} icon="ic:outline-remove-red-eye" color="#f1f1f1" width="24" height="24"/>
                                :
                                    <Icon onClick={()=> setIsHidden(!isHidden)} icon="mdi:eye-off-outline" color="#f1f1f1" width="24" height="24" />
                            }
                        </div>
                    </fieldset>
                    <Link to='#' className='text-sm font-semibold text-white pt-3'> ¿Has olvidado la contraseña?</Link>
                    <button className='h-12 bg-white text-sm font-semibold text-black mt-6'>Ingresar</button>
                </form>
                <p className='text-sm text-slate-300'>¿Aún no te registraste?  
                    <Link to='/register' className='font-bold text-white'> Crea tu cuenta.</Link>
                </p>
                
            </div>
        </div>
    );
};

export default Login;