import { useRouter } from 'next/router'
import React from "react";
import axios from 'axios';
import EditPost from '../../components/editPost';


const baseUrl = `https://alphagallery.herokuapp.com/`
const tokenUrl = baseUrl + 'api/token/'

export default function PostDetail(props) {
    const [credentials, setcredentials] = React.useState({username:'alpha', password:'alpha'});
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
        var postId = parseInt(router.query.id);
        console.log(postId);
    }
  
    
    
    return (
        <> 
        <div className="h-full" style={{backgroundImage:`url(https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120)`}}>
         <EditPost token={token} postId={postId}/>
        </div>
      </>
  )
}