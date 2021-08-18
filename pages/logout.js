import Home from './index'
import axios from "axios";
import { useEffect, useState } from 'react'
import {  Route } from 'next/router'
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useRouter } from 'next/router'
import Load from "../components/loading"


export default function LogOut(props){


   const router = useRouter()
    
    useEffect(()=>{
        localStorage.setItem('username','');
        localStorage.setItem('password','')
        localStorage.setItem('token','')
        router.push('/')
    })

    return (
        <div className="pb-10 ">
            <Load/>
        </div>   
    )
}