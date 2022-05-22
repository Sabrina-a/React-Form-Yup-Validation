import React, { useEffect } from "react";
import '../../App.js';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName:yup.string().required('First Name should be required'),
    lastName:yup.string().required('Last Name should be required'),
    email:yup.string().email().required('Email is required'),
    age:yup.number().positive().integer().required('Age is required'),
    password:yup.string().min(4).max(15).required('Password is required'),
    confirmPassword:yup.string().oneOf([yup.ref('password'),null]).required('Password should match')
})

function Form(){
    const {register, handleSubmit ,...errors} = useForm({
        resolver:yupResolver(schema),
    });
    // useEffect(()=>{
    //     // console.log(errors)
    //     // console.log(register);
    //     console.log(errors.lastName?.message)

    // },[])
    const onSubmit =(data)=>{
        console.log(data);
    }
    return(
        <div className="Form">
            <div className="title">Sign Up </div>
                <div className="inputs">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' name="firstName" placeholder="First Name" {...register('firstName')}  />
                        <p>{errors.firstName?.type ==="required" && "First Name is Required"}</p>
                        <input type='text' name="lastName" placeholder="Last Name" {...register('lastName')} />
                        <p>{errors.lastName?.message}</p>
                        <input type='text' name="email" placeholder="Email" {...register('email')}  />
                        <p>{errors.email?.message}</p>
                        <input type='text' name="age" placeholder="Age" {...register('age')} />
                        <p>{errors.age?.message}</p>
                        <input type='text' name='password' placeholder="Password"  {...register('password')} />
                        <p>{errors.password?.message}</p>
                        <input type='text' name='confirmPassword' placeholder="Confirm Password" {...register('confirmPassword')} />
                        <p>{errors.confirmPassword&& "Should match password"}</p>
                        
                        <input type="submit" id="submit"/>
                    </form>
                </div>
           
        </div>
    )
}
export default Form;