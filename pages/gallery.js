import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useRouter } from 'next/router';
import axios from 'axios';
import Load from "../components/loading"
import Header from "../components/header";
import Footer from "../components/footer";
import Head from 'next/head';

export default function View() {
  const [token, setToken] = React.useState('');
  const [credentials, setcredentials] = React.useState({username:'alpha', password:'alpha'});
  const [eventdata, setEventdata] = React.useState();
  const router = useRouter();

  async function getToken(credentials){
    const fetchedToken = await axios.post(`https://alphagallery.herokuapp.com/api/token/`, credentials);
    setToken(fetchedToken.data.access);
  }

  async function getEventsData(id){
    const config = {headers: {'Authorization': 'Bearer ' + token}};
    const edata = await axios.get(`https://alphagallery.herokuapp.com/api/v1/a-gallery/events/${id}/`, config);
    setEventdata(edata.data);
    console.log(edata);
 }
 React.useEffect( async () => {
 
  await getToken(credentials);

}, []);
 
if (router.query.id){
  var eventid = parseInt(router.query.id);
  console.log(eventid);
}

React.useEffect( async () => {
    if (token){
      await getEventsData(eventid);
    }
  }, [token]);
var images =[]
  if(eventdata){
  images = [
    {
      original: eventdata.image1 ,
      // thumbnail: 'https://www.metmuseum.org/-/media/images/art/collection-landing-page/your-collection/metpublications.jpg?as=1&la=en&mh=224&mw=372',
    },
    {
      original:eventdata.image2 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image3 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image4 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image5 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image6 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image7 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image8 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image9 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image10 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image11 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image12 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:eventdata.image13 ,
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
   
  ];
  }

  if(eventdata){
    return (
      <>
      <Head>
        <title>Alpha Gallery - Gallery</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
    <Header/>
    <div className="py-8"style={{ backgroundImage: `url('https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120')` }}>
    <div className="py-8"></div>
    <ImageGallery items={images}  />
    <div className="py-8"></div>
    </div>
    <Footer/>
    </>
      )
  }else{
    return(
       <>
       <Head>
        <title>Alpha Gallery - Gallery</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header/>
      <div className="pb-10 ">
      <Load/>

      </div> 
      <Footer/>
      </>
      )
  }
}