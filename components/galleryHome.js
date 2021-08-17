import Header from './header'
import Slider from './slider'
import Event from './events'
import {SliderData} from './sliderData';
import News from './news'
import Footer from './footer'
import React from 'react';


export default function GalleryHome(props){


    return(
      <div>  
        <Header/>
        <main>
        <Slider slides={SliderData}/>
        <Event />
        <News/>
        </main>
        <Footer/>
      </div>
    );
  }
