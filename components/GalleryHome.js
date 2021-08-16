
import Header from './header'
import Slider from './slider'
import Event from './events'
import {SliderData} from '../components/sliderData';
import News from './news'
import Footer from './footer'

export default function GalleryHome(props){
    return(
      <div>  
       <main>
       <Header/>
       <Slider slides={SliderData}/>
       <Event storedToken={props.storedToken}/>
       {/* <Feed storedToken={props.storedToken}/> */}
       <News/>
     </main>
     <Footer/>
 </div>
    );
  }
