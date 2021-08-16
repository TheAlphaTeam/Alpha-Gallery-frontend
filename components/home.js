
import Header from '../components/header'
import Slider from '../components/slider'
import Event from '../components/events'
import News from '../components/news'
import Footer from '../components/footer'
import Head from '../components/head'

export default function Gallery(props){
    return(
      <div>  
    <Head/>
       <main>
       <Header/>
       <Slider/>
       <Event/>
       <News/>
     </main>
     <Footer/>
 </div>
    );
  }
