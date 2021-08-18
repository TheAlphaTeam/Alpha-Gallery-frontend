
import Image from 'next/image'
import { useEffect } from 'react';
import logoPic from '../public/logo.png'
import React from "react";
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router'

export default function Header (props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  

  return (
    <>
      <nav className={"flex flex-col flex-wrap items-center justify-between px-2 py-3 "}>


             <div className="flex flex-row justify-between w-full my-3"> 
              <div className='flex flex-row justify-center w-1/4'></div>
              <div  className='flex flex-row justify-center w-1/2'>
                  <Image src={logoPic} alt="logo"  width={250} height={65}   />

              </div>
              <div  className='flex flex-row justify-end w-1/4'>
                <button className='className="p-2 px-4 py-2 mb-3 ml-3 font-bold text-white bg-black rounded shadow outline-none active:bg-black hover:shadow-md focus:outline-none hover:bg-gray-700 lg:mr-1 lg:mb-0 hover:bg-gray-500"'>
                <a
                className={ 
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " text-md font-bold font-sans leading-relaxed    whitespace-nowrap  text-white "
                } href='/logout'>
                Logout
                </a>
                </button>
                
              </div>

             </div>

        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="flex w-6/12 justify-evenly">
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:text-black"
              }
              href="/"
            >
              Home
            </a>
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:text-black"
              }
              href="/profile"
            >
              Profile
            </a>
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:text-black"
              }
              href="/feed"
            >
              Feed
            </a>
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:text-black"
              }
              href="/about"
            >
              About
            </a>
          
          </div>
        </div>
      </nav>

      
      <hr className="mb-0 shadow-md"/>
    </>
  );
}