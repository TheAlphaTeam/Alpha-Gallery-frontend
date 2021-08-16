import React from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { getDomainLocale } from "next/dist/shared/lib/router/router";

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
  const [refreshToken, setRefreshToken] = React.useState('');
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [moreimades, setmoreimages] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [newpost, setnewpost] = React.useState();
  const [stooredid, setstooredid] = React.useState();
  const [numberofposts, setnumberofposts ] = React.useState(0);
  const [numberofevents, setnumberofevents ] = React.useState(0);
  const [iferror, setIfError ] = React.useState(''); 
  const [credentials, setcredentials] = React.useState({username:'alpha', password:'alpha'});
  
  async function getToken(credentials){
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
    setRefreshToken(fetchedToken.data.refresh);
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
  React.useEffect( async () => {
    
    await getToken(credentials);
    
    
  }, []);
    
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
      <Navbar transparent />  
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
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
            
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={userdata.profile.photo}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-18"
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-gray-700 font-sans active:bg-gray-900 hover:bg-gray-500 uppercase text-white font-bold hover:shadow-lg shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
                        type="button" style={{ transition: "all .15s ease" }} onClick={() => setShowModal1(true)}>
                        Post  ➕ 
                      </button>
                      <button
                        className="bg-gray-700 font-sans active:bg-gray-900 hover:bg-gray-500 uppercase text-white font-bold hover:shadow-lg shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => setShowModal2(true)}>
                        Event  ➕ 
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {counter1}
                        </span>
                        <span className="text-sm font-sans text-gray-500">Posts</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
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
                      <span className=" mr-8">
                        <b className="capitalize py-2"> {iferror} </b>
                      </span>
                      <button className=" bg-transparent text-2xl text-white font-semibold leading-none  outline-none focus:outline-none" onClick={() => setShowAlert(false)}>
                        <span className="text-white">×</span>
                      </button>
                    </div>
                  </div>) : null}
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-sans font-bold leading-normal  text-gray-800 mb-2">
                    {userdata.first_name} {userdata.last_name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                      {userdata.profile.city}
                  </div>
                  <div className="flex flex-wrap justify-center mt-5 ">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {userdata.profile.bio}
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-10 py-10 border-t border-gray-300 ">
                <div className="flex flex-col flex-wrap justify-center border-r border-gray-300 px-10" > 
                  <div className="font-bold font-sans text-lg mb-5">
                      <h3>My Events</h3>
                  </div>
                  {  
                     eventdata.data.map(item => {
                       if(item.username == userdata.username){
                         return(
                             <div className="mb-5 pr-5" id={item.id}>  
                            <Card className={classes.root}>
                            <CardActionArea>
                              <CardMedia className={classes.media} image={item.image1}/>
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
                             
                            <button className=" bg-gray-700 text-white active:bg-black text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 hover:bg-gray-500"
                            type="button"
                             style={{ transition: "all .15s ease" }}
                            >
                             <Link href={{pathname:"/update/event", query:{id:item.id}}} ><a>Edit</a></Link>
                            </button>
                            
                            <form onSubmit={deleteventHandler}>
                             <input type="hidden" name="id" value={item.id}/> 
                            <button className=" bg-gray-700 text-white active:bg-black text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 hover:bg-gray-500"
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
                </div>
              </div>
            </div>
          </div>
        </section>
          {showModal1 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex font-sans items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Add a Post
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => {setShowModal1(false);
                                        setmoreimages(false);}}
                      >
                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative px-10 py-3 flex-auto">
                      <div className="flex justify-end">
                        <button
                          className="justify-end text-black-300 background-transparent font-bold uppercase px-6 py-2 text-sm   duration-150 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
                          
                          onClick={() => setmoreimages(true)}
                        >
                        Add Collection
                        </button>
                        </div>
                        <form className="text-blueGray-500 text-lg leading-relaxed" onSubmit={postsubmitHandler} >
                        <h6 className="px-3 py-3  text-blueGray-600">
                          Image (As URL):</h6>
                          <input type="url" name="image1" placeholder="Image URL" required className="my-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                          {moreimades?(<div>
                            <button
                          className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setmoreimages(false)}
                        >
                          <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                          <input type="text"  name="image2" placeholder="Image URL" className="my-1 px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"></input>
                          <input type="text"  name="image3" placeholder="Image URL" className="my-1 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"></input>
                          <input type="text"  name="image4"placeholder="Image URL" className="my-1 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"></input> 
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
                          <input name="discerption" type="text" placeholder="Discerption" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                    
                          {/*footer*/}
                          <div className="flex items-center justify-center p-3 border-t border-solid border-blueGray-200 rounded-b">
                        <button className="bg-emerald-500  my-2 text-black bg-gray-200 active:bg-emerald-600 font-bold uppercase text-sm px-36 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 hover:bg-gray-800 hover:text-white"
                          type="submit">
                          Post
                        </button>
                        
                        </div>

                        </form>
                      </div>
                    </div>
                  </div>
             </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
      ) : null}
      {showModal2 ? (
        <div><>
        <div className="justify-center items-center flex overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-sans">
                  Add a Event
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => {setShowModal2(false);}}
                >
                  <span className="bg-transparent text-black font-sans h-6 w-6 text-2xl block outline-none focus:outline-none">
                    X
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative px-10 py-3 flex-auto">
                  <form className="text-blueGray-500 text-lg leading-relaxed" onSubmit={eventSubmitHandler} >
                  <h6 className="px-1 py-1  font-sans text-blueGray-600">
                      
                      Title:</h6>
                    <input type="text"  name="title" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2 "/>
                    <h6 className="px-1 py-1  font-sans text-blueGray-600">

                    Images  (As URL):</h6>
                    <div className="flex-row ">
                    <input type="url"  name="image1" placeholder="Image URL" required className="w-1/2 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "/>
                    <input type="url"  name="image2" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2 "></input>
                    <input type="url"  name="image3" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2 "></input>
                    <input type="url"  name="image4" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"></input> 
                    <input type="url"  name="image5" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"></input> 
                    <input type="url"  name="image6" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"></input> 
                    <input type="url"  name="image7" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"></input> 
                    <input type="url"  name="image8" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"></input> 
                    <input type="url"  name="image9" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"></input> 
                    <input type="url"  name="image10" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"></input> 
                    </div>
                    <input type="hidden"  value={userdata.profile.photo} name="image"/>
                    <input type="hidden"  value={userdata.id} name="id"/>
                    <input type="date"  name="date"/>
                    <h6 className="px-3 py-3 font-sans text-blueGray-600">
                    Discerption :</h6>
                    <input name="discerption" type="text" placeholder="Discerption" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
              
                    {/*footer*/}
                    <div className="flex items-center justify-center p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button className="bg-emerald-500 font-sans my-2 text-black bg-gray-200 active:bg-emerald-600 font-bold uppercase text-sm px-36 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 hover:bg-gray-800 hover:text-white"
                    type="submit">
                    Add Event 
                  </button>
                  
                  </div>

                  </form>
                </div>
              </div>
            </div>
       </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </></div>
      ) : null}
      </main>
      <Footer />
    </>
  );
}else{
  return(
    <>
      
    <Navbar transparent />
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
            className=" flex flex-row justify-center items-center w-full h-full absolute opacity-50 bg-black"
          >
          <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'/>
          </span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
