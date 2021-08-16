
import Image from 'next/image'
import logoPic from '../public/logo.png'
import React from "react";
export default function Header (props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className={"flex flex-col flex-wrap items-center justify-between px-2 py-3 "}>


             <div className="my-3"> 
             <Image src={logoPic} alt="logo"  width={250} height={65} />
             </div>

        <div className="w-full  flex flex-wrap items-center justify-center">
          <div className="w-6/12 flex justify-evenly">
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              }
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              Home
            </a>
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              }
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              Profile
            </a>
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              }
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              Feed
            </a>
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              }
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              About
            </a>
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              }
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              Logout
            </a>

          
          
          </div>
        </div>
      </nav>
    </>
  );
}