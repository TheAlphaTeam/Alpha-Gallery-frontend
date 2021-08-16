import Head from 'next/head'
import Gallery from  '../components/home'
import Slider from  '../components/slider'
import {SliderData} from '../components/sliderData';
import Event from '../components/events'
import News from '../components/news'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div> 
                         
    <Slider slides={SliderData}/>
   
   {/* < MyGallery/> */}
    
    <Event/>
    <News/>
    {/* <Footer/> */}
    {/* <Feeds/> */}
    </div>
  )
}
