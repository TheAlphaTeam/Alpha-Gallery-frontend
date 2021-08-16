import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
const baseUrl= `https://alphagallery.herokuapp.com/`
const tokenUrl = baseUrl + `api/token/`
const eventsUrl = baseUrl + `api/v1/a-gallery/events/`

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Event(props){
    const [eventdata, setEventdata] = React.useState([]);
    const [token, setToken] = React.useState('');
    const [refreshToken, setRefreshToken] = React.useState('');
    const [credentials, setcredentials] = React.useState({username:'alpha', password:'alpha'});
    
    async function getToken(credentials){
        const config ={headers: {'Access-Control-Allow-Origin': '*',},}
        const fetchedToken = await axios.post(tokenUrl, credentials);
        setToken(fetchedToken.data.access);
        console.log(fetchedToken.data.access);
        setRefreshToken(fetchedToken.data.refresh);
    }
    async function getEventsData(){
        const config = {headers: {'Authorization': 'Bearer ' + token}};
        const edata = await axios.get(eventsUrl, config);
        setEventdata(edata);
        console.log(edata);
    }
    
    React.useEffect(async () => {
        
        await getToken(credentials);
        
        
    }, []);
    
    React.useEffect( async() => {
        if (token){
            await getEventsData();
            
        }
    }, [token]);
    
    const classes = useStyles();
    if (eventdata.data){
        return(
            <>
            <div style={{ backgroundImage: `url('https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120')` }}> 
            <h1 className="text-4xl font-bold text-center pt-20 pb-5 font-sans">Events</h1>
                                     
        
            <div className="flex flex-row flex-wrap justify-center " > 
                  {  
                     eventdata.data.map(item => {
                         return(
                             <div className="mb-5 pr-5">  
                            <Card className={classes.root}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={item.image}
                                />
                              <CardContent>
                                <Typography gutterBottom variant="h6" component="h2" size="small">
                                  {item.title} || {item.date}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 by {item.username}
                                </Typography>

                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div className="flex flex-row justify-end w-full">  
                            <button className=" bg-gray-700 text-white active:bg-black text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 hover:bg-gray-500"
                            type="button"
                             style={{ transition: "all .15s ease" }}
                            >
                            View 
                            </button>
                            </div>
                          
                            </CardActions>
                          </Card>
                         </div>
        
        )
    })
}
</div>   
           <div className=" relative" >
            <img className="  top-0 "src='http://res2.weblium.site/res/5c74178873dbed00222cf694/5c750b1f8de8fd0023d18ce5_optimized_1920' alt="Logo" /> 
             <h3 className=" absolute top-10 left-10 z-20 text-white"> ALPHA GALLERY </h3>
             <p className=" absolute top-20 left-10 z-20 text-white">____________________________</p>
             <p className=" absolute top-1/3 left-10 z-20 text-white text-xl">At Alpha , we are convinced that the digital space is an invaluable tool for bringing transparency
             and equity<br></br> to the art market.  We provide artists with the tools that enable them to independently manage <br></br> the sale 
            of their works. Our team is working around the clock, committing their energy <br></br> to promoting Alpha artists to a global audience.
            
            <br></br> At Alpha , we are convinced that the digital space is an invaluable tool for bringing transparency
             and equity<br></br> to the art market.  We provide artists with the tools that enable them to independently manage <br></br> the sale 
            of their works. Our team is working around the clock, committing their energy <br></br> to promoting Alpha artists to a global audience.
            </p>
           </div>
</div>
    </>
              )
              }else{
                  return(<img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'/>)
                }
    
}

