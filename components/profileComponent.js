import React from "react";
import axios from 'axios';
import Load from "./loading"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Link from 'next/link'

import Header from "./header.js";
import Navbar from "./navBar.js";
import Footer from "./footer.js";
import { getDomainLocale } from "next/dist/shared/lib/router/router";
import { data } from "autoprefixer";


const baseUrl= `https://alphagallery.herokuapp.com/`
const tokenUrl = baseUrl + `api/token/`
const postUrl = baseUrl +  `api/v1/a-gallery/posts/`
const userUrl = baseUrl +  `api/v1/a-gallery/users/`
const eventsUrl = baseUrl + `api/v1/a-gallery/events/`
const currentUrl = baseUrl + `api/v1/a-gallery/current`

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 190,
  },
});

export default function Profilecomponent(props) {

  const [userdata, setUserdata] = React.useState();
  const [postdata, setPostdata] = React.useState([]);
  const [eventdata, setEventdata] = React.useState();
  const [token, setToken] = React.useState('');
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [moreimades, setmoreimages] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [newpost, setnewpost] = React.useState();
  const [stooredid, setstooredid] = React.useState();
  const [numberofposts, setnumberofposts ] = React.useState(0);
  const [numberofevents, setnumberofevents ] = React.useState(0);
  const [iferror, setIfError ] = React.useState(''); 
  const [credentials, setcredentials] = React.useState();
  
  async function getToken(credentials){
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
  }

  
  async function getUserData(){
      const config = {headers: {'Authorization': 'Bearer ' + token }};
      const udata = await axios.get(currentUrl, config);
      setUserdata(udata.data);
      console.log(udata.data);
  }
  async function getPostData(){
      const config = {headers: {'Authorization': 'Bearer ' + token}};
      const pdata = await axios.get(postUrl, config);
      setPostdata(pdata);
      console.log(pdata);
  }
  async function Post_request(data){
    const config = {headers: {'Authorization': 'Bearer ' + token}};
    const response = await axios.post(postUrl, data, config);
    if (response.status == 201){
      setShowModal1(false);
      setIfError('Posted Successfully')
      setShowAlert(true)
      getPostData();
    }else{
      setShowModal1(false);
      setIfError(response.status)
      setShowAlert(true)
    }
  }
  async function getEventsData(){
      const config = {headers: {'Authorization': 'Bearer ' + token}};
      const edata = await axios.get(eventsUrl, config);
      setEventdata(edata);
      console.log(edata);
  }

  async function events_request(data){
    const config = {headers: {'Authorization': 'Bearer ' + token}};
    const response = await axios.post(eventsUrl, data, config);
    console.log(response)
    if (response.status == 201){
      setShowModal2(false);
      setIfError('Added Successfully')
      setShowAlert(true)
      getEventsData();
    }else{
      setShowModal2(false);
      setIfError(response.status)
      setShowAlert(true)
    }
  }
  async function eventDeleteRequset(id){
    const config = {headers: {'Authorization': 'Bearer ' + token}};
    const response = await axios.delete(`https://alphagallery.herokuapp.com/api/v1/a-gallery/events/${id}/`, config);
    console.log(response)
    if (response.status == 204){
      setShowModal2(false);
      setIfError('Deleted Successfully')
      setShowAlert(true)
      getEventsData();
    }else{
      setShowModal2(false);
      setIfError(response.status)
      setShowAlert(true)
    }
  }

  async function postDeleteRequset(id){
    const config = {headers: {'Authorization': 'Bearer ' + token}};
    const response = await axios.delete(`https://alphagallery.herokuapp.com/api/v1/a-gallery/posts/${id}/`, config);
    console.log(response)
    if (response.status == 204){
      setShowModal2(false);
      setIfError('Deleted Successfully')
      setShowAlert(true)
      getPostData();
    }else{
      setShowModal2(false);
      setIfError(response.status)
      setShowAlert(true)
    }
  }
  function postsubmitHandler(event){
    event.preventDefault();
    const post ={
      user:parseInt(event.target.id.value),
      image:event.target.image.value,
      image1:event.target.image1.value,
      image2:event.target.image2.value,
      image3:event.target.image3.value,
      image4:event.target.image4.value,
      discerption:event.target.discerption.value,
      likes: 0,
    }
    console.log(post);
    setnewpost(post);
    Post_request(post)
  }
  
  function eventSubmitHandler(event){
    event.preventDefault();
    const eventdata ={
      user:parseInt(event.target.id.value),
      title:event.target.title.value,
      image:event.target.image.value,
      image1:event.target.image1.value,
      image2:event.target.image2.value,
      image3:event.target.image3.value,
      image4:event.target.image4.value,
      image5:event.target.image5.value,
      image6:event.target.image6.value,
      image7:event.target.image7.value,
      image8:event.target.image8.value,
      image9:event.target.image9.value,
      image10:event.target.image10.value,
      image11:"",
      image12:"",
      image13:"",
      image14:"",
      image15:"",
      image16:"",
      image17:"",
      image18:"",
      image19:"",
      image20:"",
      discerption:event.target.discerption.value,
      date:event.target.date.value,
    }

    console.log(eventdata);
    events_request(eventdata)
  }

  function deleteventHandler(event){
    event.preventDefault();
    const id = parseInt(event.target.id.value);
    eventDeleteRequset(id);
    getEventsData()
  }
  function deletepostHandler(event){
    event.preventDefault();
    const id = parseInt(event.target.id.value);
    postDeleteRequset(id);
    getPostData()
  }

  React.useEffect(() => {
    setcredentials({username:localStorage.getItem('username'), password:localStorage.getItem('password')})
  }, []);
  

  React.useEffect( async () => {
    if(credentials){
      await getToken(credentials);
    }
  }, [credentials]);

  
  React.useEffect( async () => {
    if (token){
      await getUserData();
      await getPostData();
      await getEventsData();
    } 
  }, [token]);


  const classes = useStyles();
  var counter2= 0
  if(eventdata){
    eventdata.data.map(item=>{
      if(item.username == userdata.username){
        counter2 +=1
      }
    })
 }
 var counter1= 0
 if(eventdata){
   postdata.data.map(item=>{
     if(item.username == userdata.username){
       counter1 +=1
     }
   })
}

 if(userdata && eventdata && postdata){
      return (
    <>
    <Header/>
      {/* <Navbar transparent />   */}
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/21264/pexels-photo.jpg')"
            }}
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-50"
            ></span>
            
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                      <img
                        alt="..."
                        src={userdata.profile.photo}
                        className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-18"
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                    <div className="px-3 py-6 mt-32 sm:mt-0">
                      <button
                        className="px-4 py-2 mb-1 font-sans text-xs font-bold text-white uppercase bg-gray-700 rounded shadow outline-none active:bg-gray-900 hover:bg-gray-500 hover:shadow-lg focus:outline-none sm:mr-2 "
                        type="button" style={{ transition: "all .15s ease" }} onClick={() => setShowModal1(true)}>
                        Post  ➕ 
                      </button>
                      <button
                        className="px-4 py-2 mb-1 font-sans text-xs font-bold text-white uppercase bg-gray-700 rounded shadow outline-none active:bg-gray-900 hover:bg-gray-500 hover:shadow-lg focus:outline-none sm:mr-2 "
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => setShowModal2(true)}>
                        Event  ➕ 
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-1">
                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          {counter1}
                        </span>
                        <span className="font-sans text-sm text-gray-500">Posts</span>
                      </div>
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          {counter2}
                        </span>
                        <span className="text-sm text-gray-500">Events</span>
                      </div>
                    </div>
                  </div>
                </div>
                {showAlert ? (
                  <div className="flex justify-center">
                    <div className={"flex flex-row justify-between items-center font-sans h-9 text-white px-6 py-6 border-0 rounded mt-24 mb-4 w-3/4 bg-gray-800"}>
                      <span className="mr-8 ">
                        <b className="py-2 capitalize"> {iferror} </b>
                      </span>
                      <button className="text-2xl font-semibold leading-none text-white bg-transparent outline-none focus:outline-none" onClick={() => setShowAlert(false)}>
                        <span className="text-white">×</span>
                      </button>
                    </div>
                  </div>) : null}
                <div className="mt-12 text-center">
                  <h3 className="mb-2 font-sans text-4xl font-bold leading-normal text-gray-800">
                    {userdata.first_name} {userdata.last_name}
                  </h3>
                  <div className="mt-0 mb-2 text-sm font-bold leading-normal text-gray-500 uppercase">
                    <i className="mr-2 text-lg text-gray-500 fas fa-map-marker-alt"></i>{" "}
                      {userdata.profile.city}
                  </div>
                  <div className="flex flex-wrap justify-center mt-5 ">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {userdata.profile.bio}
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-row py-10 mt-10 border-t border-gray-300 ">
                <div className="flex flex-col flex-wrap items-center justify-center w-1/3 px-5 border-r border-gray-300" > 
                  <div className="mb-5 font-sans text-lg font-bold">
                      <h3>My Events</h3>
                  </div>
                  {  
                     eventdata.data.map(item => {
                       if(item.username == userdata.username){
                         return(
                             <div className="pr-5 mb-5" id={item.id}>  
                            <Card className={classes.root}>
                            <CardActionArea>
                            <Link href={{pathname:"/gallery", query:{id:item.id}}} ><a>
                            
                              <CardMedia className={classes.media} image={item.image1}/>
                              
                            </a></Link>
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
                              <div className="flex flex-row justify-end w-full mb-2">  
                             
                            <button className="px-4 py-2 mb-3 ml-3 text-xs font-bold text-white uppercase bg-gray-700 rounded shadow outline-none active:bg-black hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 hover:bg-gray-500"
                            type="button"
                             style={{ transition: "all .15s ease" }}
                            >
                             <Link href={{pathname:"/update/event", query:{id:item.id}}} ><a>Edit</a></Link>
                            </button>
                            
                            <form onSubmit={deleteventHandler}>
                             <input type="hidden" name="id" value={item.id}/> 
                            <button className="px-4 py-2 mb-3 ml-3 text-xs font-bold text-white uppercase bg-gray-700 rounded shadow outline-none active:bg-black hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 hover:bg-gray-500"
                            type="submit" style={{ transition: "all .15s ease" }}>
                            Delete
                            </button>
                            </form>
                            </div>
                          
                            </CardActions>
                          </Card>
                         </div>
        
                          )}
                      })
                  }
                 
                  </div>
                  <div className="flex flex-col flex-wrap items-center w-2/3 px-5 border-gray-300 " > 
                     <div className="mb-0 font-sans text-lg font-bold"> <h3>My Posts</h3></div>
                     {
            postdata.data.map(item => {
              if (item.username== userdata.username){
                return (
                  <div className="flex flex-col justify-center w-full h-auto my-5 font-sans bg-white border border-gray-500 rounded-md shadow-lg ">
                    
                  <div className="flex flex-row items-center w-full">
                    <img className="w-20 h-20 m-5 rounded-full"src={item.image}/>
                    <div className="flex flex-col items-baseline justify-start mt-8"> 
                    <h6 className="text-lg font-bold">@{item.username}</h6>
                    <p className="text-sm">{item.created_at.slice(2, 10)}</p>
                    {/* <p>{item.created_at.slice(11, 16)}</p>  */}
                    </div>
                    <div className="flex flex-row justify-end w-full mb-2">  
                             <div>
                             <button className="px-4 py-2 mb-3 ml-3 text-xs font-bold text-white uppercase bg-gray-700 rounded shadow outline-none active:bg-black hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 hover:bg-gray-500"
                             type="button"
                              style={{ transition: "all .15s ease" }}
                             >
                              <Link href={{pathname:"/update/post", query:{id:item.id}}} ><a>Edit</a></Link>
                             </button>
                             </div>
                             
                             <form onSubmit={deletepostHandler}>
                              <input type="hidden" name="id" value={item.id}/> 
                             <button className="px-4 py-2 mb-3 ml-3 text-xs font-bold text-white uppercase bg-gray-700 rounded shadow outline-none active:bg-black hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 hover:bg-gray-500"
                             type="submit" style={{ transition: "all .15s ease" }}>
                             Delete
                             </button>
                             </form>
                             </div>
                  </div>
                    <p className=" m-3.5 flex-auto flex-end text-s">{item.discerption}</p>
                  <div className="w-10/12 mx-auto h-96">
                  <img className="w-full h-full " src={item.image1}/>
                 </div>
                  <div className="flex flex-row ml-10">
                    <form className="w-full">
                    <FormControlLabel className="h-20 w-30"
                    control={<Checkbox icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} name="like"  />} label={item.likes}/>
                    <input className=" px-3 py-1.5 placeholder-blueGray-300 text-blueGray-600 w-8/12 relative bg-gray-200 rounded text-s border-0 shadow outline-none focus:outline-none focus:ring "type='text' name='comment'/>
                    <button className="px-4 py-2 mb-3 ml-3 font-bold text-white bg-gray-700 rounded shadow outline-none text-s active:bg-black hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 hover:bg-gray-500"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            >
                           Comment
                            </button>
                            
                    </form> 
                  </div>
                </div>
                )
              }
              })
            }
            
            </div>
            </div>
            
            
            
            </div>
            </div>
            </div>
        </section>
          {showModal1 ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  {/*content*/}
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 font-sans border-b border-solid rounded-t border-blueGray-200">
                      <h3 className="text-3xl font-semibold">
                        Add a Post
                      </h3>
                      <button
                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                        onClick={() => {setShowModal1(false);
                                        setmoreimages(false);}}
                      >
                        <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative flex-auto px-10 py-3">
                      <div className="flex justify-end">
                        <button
                          className="justify-end px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear rounded shadow outline-none text-black-300 background-transparent hover:shadow-lg focus:outline-none"
                          
                          onClick={() => setmoreimages(true)}
                        >
                        Add Collection
                        </button>
                        </div>
                        <form className="text-lg leading-relaxed text-blueGray-500" onSubmit={postsubmitHandler} >
                        <h6 className="px-3 py-3 text-blueGray-600">
                          Image (As URL):</h6>
                          <input type="url" name="image1" placeholder="Image URL" required className="relative w-full px-3 py-3 my-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
                          {moreimades?(<div>
                            <button
                          className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                          onClick={() => setmoreimages(false)}
                        >
                          <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                          <input type="text"  name="image2" placeholder="Image URL" className="relative w-full px-2 py-1 my-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                          <input type="text"  name="image3" placeholder="Image URL" className="relative w-full px-2 py-2 my-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                          <input type="text"  name="image4"placeholder="Image URL" className="relative w-full px-2 py-2 my-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                          </div>):(<>
                          <input type="hidden"  value='' name="image2"/>
                          <input type="hidden"  value='' name="image3"/>
                          <input type="hidden"  value='' name="image4"/>
                          </>)
                          }
                          <input type="hidden"  value={userdata.id} name="id"/>
                          <input type="hidden"  value={userdata.profile.photo} name="image"/>
                          <h6 className="px-3 py-3 text-blueGray-600">
                          Discerption :</h6>
                          <input name="discerption" type="text" placeholder="Discerption" className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
                    
                          {/*footer*/}
                          <div className="flex items-center justify-center p-3 border-t border-solid rounded-b border-blueGray-200">
                        <button className="py-3 my-2 mr-1 text-sm font-bold text-black uppercase transition-all duration-150 ease-linear bg-gray-200 rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 px-36 hover:shadow-lg focus:outline-none hover:bg-gray-800 hover:text-white"
                          type="submit">
                          Post
                        </button>
                        
                        </div>

                        </form>
                      </div>
                    </div>
                  </div>
             </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
      ) : null}
      {showModal2 ? (
        <div><>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none ">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            {/*content*/}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="font-sans text-3xl">
                  Add a Event
                </h3>
                <button
                  className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                  onClick={() => {setShowModal2(false);}}
                >
                  <span className="block w-6 h-6 font-sans text-2xl text-black bg-transparent outline-none focus:outline-none">
                    X
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative flex-auto px-10 py-3">
                  <form className="text-lg leading-relaxed text-blueGray-500" onSubmit={eventSubmitHandler} >
                  <h6 className="px-1 py-1 font-sans text-blueGray-600">
                      
                      Title:</h6>
                    <input type="text"  name="title" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
                    <h6 className="px-1 py-1 font-sans text-blueGray-600">

                    Images  (As URL):</h6>
                    <div className="flex-row ">
                    <input type="url"  name="image1" placeholder="Image URL" required className="relative w-1/2 px-3 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring "/>
                    <input type="url"  name="image2" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                    <input type="url"  name="image3" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                    <input type="url"  name="image4" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                    <input type="url"  name="image5" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                    <input type="url"  name="image6" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                    <input type="url"  name="image7" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                    <input type="url"  name="image8" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                    <input type="url"  name="image9" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                    <input type="url"  name="image10" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                    </div>
                    <input type="hidden"  value={userdata.profile.photo} name="image"/>
                    <input type="hidden"  value={userdata.id} name="id"/>
                    <input type="date"  name="date"/>
                    <h6 className="px-3 py-3 font-sans text-blueGray-600">
                    Discerption :</h6>
                    <input name="discerption" type="text" placeholder="Discerption" className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
              
                    {/*footer*/}
                    <div className="flex items-center justify-center p-3 border-t border-solid rounded-b border-blueGray-200">
                  <button className="py-3 my-2 mr-1 font-sans text-sm font-bold text-black uppercase transition-all duration-150 ease-linear bg-gray-200 rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 px-36 hover:shadow-lg focus:outline-none hover:bg-gray-800 hover:text-white"
                    type="submit">
                    Add Event 
                  </button>
                  
                  </div>

                  </form>
                </div>
              </div>
            </div>
       </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </></div>
      ) : null}
      </main>
      <Footer />
    </>
  );
}else{
  return(
    <>
      <Header/>
    {/* <Navbar transparent /> */}
    <main className="profile-page">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
            "url('https://images.pexels.com/photos/21264/pexels-photo.jpg')"
          }}
        >
         
          <div className="pb-10 ">
          <Load/>
          </div> 
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <div className=" mx-96 my-96">
      </div>
    </main>
    <Footer />
  </>
  )
}
}
