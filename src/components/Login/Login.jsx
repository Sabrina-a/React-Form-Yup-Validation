import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import {Link , Outlet} from 'react-router-dom'; 



const schema = yup.object().shape({ 
    email:yup.string().email().required('Email is required'), 
    password:yup.string().min(4).max(15).required('Password is required'),
})

export default function Login(){
    const {register, handleSubmit ,...errors} = useForm({
        resolver:yupResolver(schema),
    });
    const navigate =useNavigate();

    const onSubmit =(data)=>{
        console.log(data);
        navigate('home');
    }
    // const handleLogin=()=>{
    //     navigate('home');
    // }
    return(
<>
<div className="Form">
    <div className="title">Login </div>
        <div className="inputs">
            <form onSubmit={handleSubmit(onSubmit)} >
          
                <input type='text' name="email" placeholder="Email" {...register("email")} />
              
        
                <input type='text' name='password' placeholder="Password" {...register("password")}  />
 

                
                <input type="submit" id="submit" value="Login"/>
            </form>
        </div>
</div>


<nav>
        <Link className='link remember' to="remember-password" >Remember Password</Link>


        <Link className='link register' to="register" >Register</Link>
    
        <Outlet/>
</nav>
</>
    )
}
