
import Header from '../components/header'
import Slider from '../components/slider'
import Event from '../components/events'
import {SliderData} from '../components/sliderData';
import News from '../components/news'
import Footer from '../components/footer'
import React from 'react';
import Head from 'next/head';


export default function GalleryHome(props){

  return(
    <div> 
       <Head>
          <title>Alpha Gallery - Home</title>
          <link rel="icon" href="/icon.ico" />
        </Head> 
      <Header token={props.token}/>
      <main>
      <Slider slides={SliderData}/>
      <Event />
      <News/>
      </main>
      <Footer/>
    </div>
  );
}

