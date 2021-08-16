import axios from "axios";
import React from "react";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const baseUrl= `https://alphagallery.herokuapp.com/`
const tokenUrl = baseUrl + `api/token/`
const postUrl = baseUrl +  `api/v1/a-gallery/posts/`
const currentUrl = baseUrl + `api/v1/a-gallery/current`

export default function Post(props){

  const [text, setText] = React.useState('');
  
  
  const [userdata, setUserdata] = React.useState([]);
  const [postdata, setPostdata] = React.useState([]);
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
  async function getUserData(){
      console.log("hi tie token in current", token)
      const config = {headers: {'Authorization': 'Bearer ' + token }};
      const udata = await axios.get(currentUrl, config);
      setUserdata(udata);
      console.log(udata);
  }
  async function getPostData(){
      const config = {headers: {'Authorization': 'Bearer ' + token}};
      const pdata = await axios.get(postUrl, config);
      setPostdata(pdata);
      console.log(pdata);
  }

  React.useEffect( () => {
      
      getToken(credentials);
        
      
    }, []);
    
  React.useEffect( () => {
      if (token){
          getPostData();
          getUserData();
      }
    }, [token]);
    


    function handleChange(event) {
      setText(event.target.value);
    }



    // const numOfLike = (e) => {
    //   e.preventDefault();

      
    //   alert('hi');
    //   const storeData={
    //     // get data from user input
        
    //     likes:e.target.like.value,

      
    //   }
    
  
    if (postdata.data){
      return(
       
                <div className="p-10 "style={{ backgroundImage: `url('https://s3.img-b.com/image/private/t_base,c_pad,f_auto,dpr_2,w_480,h_480/product/shaw/shaw-cs37p-00100-9459802.jpg')` }}>  
                 <div className="w-full flex flex-col lg:max-w-full lg:flex"  >
                   
                    {  
                       postdata.data.map(  item => {
                        return(
                          <div>
                           
                               
                           

                              <div className="rounded-xl grid-cols-2 shadow-xl">
                             
                               <div className="flex items-center  ">
                               <div className= "flex  mt-5 items-center objectFit: ['hover', 'focus']  justify-start">
                               <div className=" objectFit: ['hover', 'focus']  pt-6">
                              
                                 <div className="flex items-center ">
                               <img src={item.image}  class="w-10 h-10 rounded-full mr-4 rounded-full h-8 w-8 bg-gray-500 items-center justify-center "/>
                               <div class="text-sm">
                               <p class="text-gray-900 leading-none">{item.username}</p>
                               
                              </div>
                              </div> 
                              <p class="text-sm text-gray-600 flex items-center">
                             <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                             <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                               User Only
                                </p>
                              <div class="">
                      
                              <img src={item.image1} className="h-70 w-70 "/>
                         
                              <p className="text-gray-600 "> on {item.created_at.replace("T13:36:01.647575Z", '')}</p> 
                              {/* split("T").pop([0]) */}
                              </div>

                             
                                  </div>
                               <div  className="flex flex-col p-7mb-8 pt-2">
                                
                               

                              <br></br>
                              <div className=" m-15 p-20" >
                               <p className="text-base text-gray-600 mt-1">{item.discerption}</p>
                               <br></br>
                               <div className="text-sm">
                               
                               <br></br>
                               
                               <div className="flex items-center ">
                               <img src={item.image3}  class="w-10 h-10 rounded-full mr-4 rounded-full h-8 w-8 bg-gray-500 items-center justify-center "/>
                               <div class="text-sm">
                               <p class="text-gray-900 leading-none">{(item.comments)}</p>
                               
                              </div>
                              </div> 
                              
                               <input  type="text" onChange={handleChange} />
                                  {text}
                                
                              <form>
                              <FormControlLabel
                              control={<Checkbox icon={<FavoriteBorder />} 
                                checkedIcon={<Favorite />}
                                   name="like"  />}
                               label="like" className=" "
                                />
                               </form> 
                               
                               
                               </div>
                               
                             </div>
                            </div>
                            </div>
                            </div>
           
                            </div>
                            </div>)
                        })
            }
            </div>
            
            </div> 
                )}else{
                    return(<img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'/>)
                }
              }

              
             
    
            
           
              