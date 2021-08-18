import React from "react";
import Profilecomponent from "../components/profileComponent";
import Head from 'next/head';


export default function Profile(props){



      return(
      <>
      <Head>
        <title>Alpha Gallery - Profile</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
       <Profilecomponent/>
      </>
      )


}
