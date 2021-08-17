import GalleryHome from '../components/galleryHome';
import Head from 'next/head';


export default function HomePage(props){
    return(
      <>  
        <Head>
          <title>Alpha Gallery - Home</title>
          <link rel="icon" href="/icon.ico" />
        </Head>
        <GalleryHome/>
    </>
    ); 
  }