import GalleryHome from '../components/home'
import Head from 'next/head'
import axios from "axios";
import { useEffect, useState } from 'react'
import LoginForm from '../components/login'

const baseUrl= 'https://alphagallery.herokuapp.com/'
const tokenUrl = baseUrl + 'api/token/'

export default function Home() {

  const [token, setToken] = useState('');
  const [storedToken, setStoredToken] = useState('')
  const [storedUser, setStoredUser] = useState('')
  const [storedpass, setStoredPass] = useState('')


async function getToken(credentials){
  const fetchedToken = await axios.post( tokenUrl, credentials);
  setToken(fetchedToken.data.access)
}


function loginHandler(credentials){
    getToken(credentials)
    console.log('fun',token)
}



useEffect(()=>{
  setStoredPass(localStorage.getItem('password'))
  setStoredUser(localStorage.getItem('username'))
  setStoredToken(localStorage.getItem('token'))
})
   
useEffect(()=>{
  if (!localStorage.getItem('token')){
    localStorage.setItem('token',token)
  }
})

 

  if (token || storedToken ){
    return (
      
         <GalleryHome storedToken ={storedToken} storedUser={storedUser} storedpass={storedpass} /> 
      
    )
  }
  if (!storedToken && !token){
    return(
  <LoginForm loginHandler={loginHandler}  token={token}/>
    )
  }
}

