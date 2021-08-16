
import Head from 'next/head'
import axios from "axios";
import { useEffect, useState } from 'react'
import LoginForm from '../components/login'
import GalleryHome from '../components/GalleryHome';
 import Header from '../components/header'

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
      // <Header/>
      <GalleryHome storedToken={storedToken} />

    )
  }
  
  if (!storedToken && !token){
    return(
  <LoginForm loginHandler={loginHandler}  token={token}/>
    )
  }
}

