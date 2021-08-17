import { useRouter } from 'next/router'
import React from "react";
import axios from 'axios';
import EditPost from '../../components/editPost';
export default function PostDetail(props) {
    const [credentials, setcredentials] = React.useState({username:'alpha', password:'alpha'});
    const [token, setToken] = React.useState('');
    const [refreshToken, setRefreshToken] = React.useState('');
    const router = useRouter()

    async function getToken(credentials){
        const fetchedToken = await axios.post(`https://alphagallery.herokuapp.com/api/token/`, credentials);
        setToken(fetchedToken.data.access);
        console.log(fetchedToken.data.access)
        setRefreshToken(fetchedToken.data.refresh);
        
      }

    React.useEffect( async () => {
        await getToken(credentials);
        
    }, []);
    
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