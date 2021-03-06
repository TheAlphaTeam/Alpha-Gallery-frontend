import axios from "axios";
import { useEffect, useState } from 'react'
import LoginForm from '../components/login'
import HomePage  from "./home";
import Head from 'next/head';
import { useRouter } from 'next/router';


const baseUrl= 'https://alphagallery.herokuapp.com/'
const tokenUrl = baseUrl + 'api/token/'

export default function Home() {

  const [token, setToken] = useState('');
  const [credentials, setcredentials] = useState();
  const router = useRouter()

  async function getToken(credentials){
    const fetchedToken = await axios.post( tokenUrl, credentials);
    setToken(fetchedToken.data.access)
  }


  function loginHandler(credentials){
      getToken(credentials)
  }



  useEffect(()=>{
    if (!localStorage.getItem('token')){
      localStorage.setItem('token',token)
    }else{
      setcredentials({username:localStorage.getItem('username'), password:localStorage.getItem('password')})
    }
  },[token])


  
   
    

if (token || credentials){
  return (
    <>
    <HomePage/>
    </>

    )
  }
    
    if (!credentials && !token){
    return(
      <>
      <Head>
        <title>Alpha Gallery - LOGIN/SIGNUP</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <LoginForm loginHandler={loginHandler}  token={token}/>
     </>
    )
  }



}


