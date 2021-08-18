import { useRouter } from 'next/router'
import React from "react";
import axios from 'axios';
import Editevent from '../../components/editEvent';

const baseUrl = `https://alphagallery.herokuapp.com/`
const tokenUrl = baseUrl + 'api/token/'

export default function Detail(props) {
    const [credentials, setcredentials] = React.useState();
    const [token, setToken] = React.useState('');
    const router = useRouter()

    async function getToken(credentials){
        const fetchedToken = await axios.post(tokenUrl, credentials);
        setToken(fetchedToken.data.access);
    }

    React.useEffect(() => {
      setcredentials({username:localStorage.getItem('username'), password:localStorage.getItem('password')})
    }, []);
    
    React.useEffect( async () => {
      if(credentials){
        await getToken(credentials);
      }
    }, [credentials]);

    
    if (router.query.id){
        var eventid = parseInt(router.query.id);
        console.log(eventid);
    }
  
    
    
    return (
        <> 
        <div className="h-full" style={{backgroundImage:`url(https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120)`}}>
            
         <Editevent token={token} eventId={eventid}/>
        </div>
      </>
  )
}