import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import { useForm } from 'react-hook-form';
import emptyavatar from './avatar.svg'
import { UserContext } from '../UserContext';


export const Login=({setLoggedIn})=> {
  const {user,loginUser}=useContext(UserContext)
  const {register, handleSubmit,formState: { errors },} = useForm();
  const [msg,setMsg]=useState('')

  
  const onSubmit = (data) =>{
    console.log(data);
    let url='/auth/login'
    sendData(url,data)
  } 

  const sendData=async (url,formdata)=>{
    try{
      const resp=await axios.post(url,formdata,{headers:{'Content-Type':'application/json'}})
      const data=await resp.data
      console.log('szerver oldalról:',data)
      const userData={
        userId:data.userId,
        userName:data.username,
        avatar:data.avatar,
        userStory:data.userStory
      }
      loginUser(userData)
      setLoggedIn(true)
    }catch(err){
        console.log(err.message)
        console.log(err.response.status)
        if(err.response.status==401){
          loginUser(user)
          setMsg(err.response.data.message)
        }else
          setMsg(err.message)
    }
  }

  return (
    <div className="register">
      <div className="position-absolute top-50 start-50 translate-middle">
        <h3 className="text-center">Bejelentkezés</h3>
       <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', { required: true })} className="form-control mb-1" placeholder="email"/>
        {errors.email && <p className="err">email cím megadása kötelelező</p>}
        <input type="password" {...register('password', { required: true })} className="form-control mb-1"  />
        {errors.password && <p className="err">hibás jelszó</p>}
        <input type="submit" className="btn btn-success form-control rounded"/>
    </form>
    <div>{msg}</div>
  </div>
    </div>
  )
}
