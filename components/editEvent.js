import React from "react";
import axios from "axios";
import Link from "next/link";
import Load from "../components/loading"

const baseUrl = `https://alphagallery.herokuapp.com/`
const tokenUrl = baseUrl + 'api/token/'


export default function Editevent(props) {
    const [eventdata, setEventdata] = React.useState();
    const [showAlert, setShowAlert] = React.useState(false);
    const [iferror, setiferror] = React.useState('');
    const [token, setToken] = React.useState('');
    const [credentials, setcredentials] = React.useState();
  

  async function getToken(credentials){
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
  }

  
    async function getEventsData(){
        console.log(props.eventId)
        const config = {headers: {'Authorization': 'Bearer ' + token}};
        const edata = await axios.get(`https://alphagallery.herokuapp.com/api/v1/a-gallery/events/${props.eventId}/`, config);
        setEventdata(edata.data);
        console.log(edata);
    }
    async function events_put_request(data){
        console.log(props.id)
        const config = {headers: {'Authorization': 'Bearer ' + token}};
        const responce = await axios.put(`https://alphagallery.herokuapp.com/api/v1/a-gallery/events/${props.eventId}/`, data, config);
        console.log(responce);
        if(responce.status == 200){
            setShowAlert(true);
            setiferror('Edited Successfuly')
        }

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
        await getEventsData();
      } 
    }, [token]);

    function eventEditHandler(event){
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
          image11:event.target.image11.value,
          image12:event.target.image12.value,
          image13:event.target.image13.value,
          image14:event.target.image14.value,
          image15:event.target.image15.value,
          image16:event.target.image16.value,
          image17:event.target.image17.value,
          image18:event.target.image18.value,
          image19:event.target.image19.value,
          image20:event.target.image20.value,
          discerption:event.target.discerption.value,
          date:event.target.date.value,
        }
    
        console.log(eventdata);
        events_put_request(eventdata)
      }
 if(eventdata){  
  return (

    <div>
        {console.log(eventdata)}
    <div className="relative inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none ">
       <div className="relative w-auto max-w-3xl mx-auto my-4">
        {/*content*/}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-3 border-b border-solid rounded-t border-blueGray-200">
            <h3 className="font-sans text-3xl">
              Edit Event
            </h3>
            <button
              className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
            >
              <span className="block w-6 h-6 font-sans text-2xl text-black bg-transparent outline-none focus:outline-none">
                <Link href="/profile"> X</Link>
              </span>
            </button>
          </div>
            {showAlert ? (
                  <div className="flex justify-center">
                    <div className={"flex flex-row justify-between items-center font-sans h-4 text-white px-6 py-6 border-0 rounded mt-4 mb-4 w-3/4 bg-black"}>
                      <span className="mr-8 ">
                        <b className="py-2 capitalize"> {iferror} </b>
                      </span>
                      <button className="text-2xl font-semibold leading-none text-white bg-transparent outline-none focus:outline-none" onClick={() => setShowAlert(false)}>
                        <span className="text-white">×</span>
                      </button>
                    </div>
                  </div>) : null}
          {/*body*/}
          <div className="relative flex-auto px-10 py-3">
              <form className="text-lg leading-relaxed text-blueGray-500" onSubmit={eventEditHandler}>
              <h6 className="px-1 py-1 font-sans text-blueGray-600">
                  Title:</h6>
                <input type="text" defaultValue={eventdata.title} name="title" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
                <h6 className="px-1 py-1 font-sans text-blueGray-600">

                Images  (As URL):</h6>
                <div className="flex-row ">
                <input type="text" defaultValue={eventdata.image1}  name="image1" placeholder="Image URL" className="relative w-1/2 px-3 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring "/>
                <input type="text" defaultValue={eventdata.image2}  name="image2" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                <input type="text" defaultValue={eventdata.image3}  name="image3" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                <input type="text" defaultValue={eventdata.image4}  name="image4" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image5}  name="image5" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image6}  name="image6" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image7}  name="image7" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image8}  name="image8" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image9}  name="image9" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image10} name="image10" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image11} name="image11" placeholder="Image URL" className="relative w-1/2 px-3 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring "/>
                <input type="text" defaultValue={eventdata.image12} name="image12" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                <input type="text" defaultValue={eventdata.image13} name="image13" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input>
                <input type="text" defaultValue={eventdata.image14} name="image14" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image15} name="image15" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image16} name="image16" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image17} name="image17" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image18} name="image18" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image19} name="image19" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                <input type="text" defaultValue={eventdata.image20} name="image20" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></input> 
                </div>
                <input type="hidden"  defaultValue={eventdata.image} name="image"/>
                <input type="hidden"  defaultValue={eventdata.user} name="id"/>
                <input type="date" defaultValue={eventdata.date} name="date"/>
                <h6 className="px-3 py-3 font-sans text-blueGray-600">
                Discerption :</h6>
                <input name="discerption" defaultValue={eventdata.discerption} type="text" placeholder="Discerption" className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
          
                {/*footer*/}
                <div className="flex items-center justify-center p-3 border-t border-solid rounded-b border-blueGray-200">
              <button className="py-3 my-2 mr-1 font-sans text-sm font-bold text-black uppercase transition-all duration-150 ease-linear bg-gray-200 rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 px-36 hover:shadow-lg focus:outline-none hover:bg-black hover:text-white"
                type="submit">
                Edit Event 
              </button>
              
              </div>

              </form>
            </div>
          </div>
        </div>
   </div>
    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
  </div>
     
  
  )
}else{
    return(  
    <>    
     
<div className="pb-10 ">
<Load/>
</div> 

    </>
          )
}
}
