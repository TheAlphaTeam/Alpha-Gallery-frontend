
import Image from 'next/image'
import logoPic from '../public/logo.png'
import React from "react";
import Link from 'next/dist/client/link';

export default function Header (props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className={"flex flex-col flex-wrap items-center justify-between px-2 py-3 "}>


             <div className="my-3"> 
             <Image src={logoPic} alt="logo"  width={250} height={65} />
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
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:text-black"
              }
              href='/logout'
            >
              Logout
            </a>
            
            {/* <a className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap" 
              } > */}
            {/* <Link  href={{pathname:"/", query:{Lg:true}}} ><a className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap" 
              } >Logout</a></Link> */}
            
            

          
          
          </div>
        </div>
      </nav>

      <hr className="shadow-md mb-0"/>
    </>
  );
}