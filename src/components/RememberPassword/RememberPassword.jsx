import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const schema = yup.object().shape({
    email:yup.string().email().required('Email is required'), 
   
  })
export default function Login(){

    const { register,handleSubmit ,...errors} = useForm({
        resolver:yupResolver(schema),
    });

    const onSubmit =(data)=>{
        console.log(data);
    }
    return(
        <div className="Form">
    <div className="title">Remember Password </div>
        <div className="inputs">
            <form  onSubmit={handleSubmit(onSubmit)}>
          
                <input type='text' name="email" placeholder="Email"  {...register("email")}  />
                <p>{errors.email?.message}</p>
        
         
                <input type="submit" id="submit" value="Send"/>
            </form>
        </div>
   
</div>
    )
}
