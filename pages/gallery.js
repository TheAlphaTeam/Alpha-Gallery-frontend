import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useRouter } from 'next/router';
import axios from 'axios';



const images = [
  {
    original: 'https://www.metmuseum.org/-/media/images/art/collection-landing-page/your-collection/metpublications.jpg?as=1&la=en&mh=424&mw=672',
    // thumbnail: 'https://www.metmuseum.org/-/media/images/art/collection-landing-page/your-collection/metpublications.jpg?as=1&la=en&mh=224&mw=372',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    // thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function View() {
  const [token, setToken] = React.useState('');
  const [credentials, setcredentials] = React.useState({username:'alpha', password:'alpha'});
  const [eventdata, setEventdata] = React.useState();
  const router = useRouter()

  async function getToken(credentials){
    const fetchedToken = await axios.post(`https://alphagallery.herokuapp.com/api/token/`, credentials);
    setToken(fetchedToken.data.access);
    
  }

  async function getEventsData(id){
    const config = {headers: {'Authorization': 'Bearer ' + token}};
    const edata = await axios.get(`https://alphagallery.herokuapp.com/api/v1/a-gallery/events/${id}`, config);
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
  



  if(eventdata){
    return (
    <ImageGallery items={images} />
      )
  }else{
    return(
      <h1>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
    )
  }
}