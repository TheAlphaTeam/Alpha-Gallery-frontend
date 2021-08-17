import Home from './index'
import axios from "axios";
import { useEffect, useState } from 'react'
import LoginForm from '../components/login'
import HomePage  from "./home";
import { route } from 'next/dist/server/router';
import Link from 'next/dist/client/link';
import React from 'react'
import {  Route } from 'next/router'



export default function LogOut(props){
  
    useEffect(()=>{
        localStorage.setItem('username','');
        localStorage.setItem('password','')
        localStorage.setItem('token','')
    })

    return(
        <Home/>
    );
}