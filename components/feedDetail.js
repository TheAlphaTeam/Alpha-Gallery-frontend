import axios from "axios";
import React from "react";
import Load from "./loading"


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const baseUrl = `https://alphagallery.herokuapp.com/`
const postUrl = baseUrl + `api/v1/a-gallery/posts/`
const tokenUrl = baseUrl + 'api/token/'


export default function FeedDetail(props) {

  const [postdata, setPostdata] = React.useState([]);
  const [token, setToken] = React.useState('');
  const [credentials, setcredentials] = React.useState();
  

  async function getToken(credentials){
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
  }


  async function getPostData() {
    const config = { headers: { 'Authorization': 'Bearer ' + token} };
    const pdata = await axios.get(postUrl, config);
    setPostdata(pdata);
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
      await getPostData()
    } 
  }, [token]);
  
  
  if (postdata.data) {
    return (
      <div className="flex flex-col w-full lg:max-w-full lg:flex"style={{ backgroundImage: `url('https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} >

        {
          postdata.data.map(item => {
            return (
              <div className="flex flex-col justify-center w-8/12 mx-auto my-24 font-sans bg-white border border-gray-500 rounded-md shadow-lg h-2/4 ">
                <div className="flex flex-row w-full">
                  <img className="w-20 h-20 m-5 rounded-full"src={item.image}/>
                  <div className="flex flex-col items-baseline justify-start mt-8"> 
                    <h6 className="text-lg font-bold">@{item.username}</h6>
                    <p>{item.created_at.slice(0, 10)}</p>
                  </div>
                </div>
                  <p className=" m-3.5 flex-auto flex-end text-s">{item.discerption}</p>
                <div className="w-10/12 mx-auto h-96">
                  <img className="w-full h-full mx-auto" src={item.image1}/>
                </div>
                <div className="flex flex-row ml-10">
                  <form className="w-full">
                    <FormControlLabel className="w-20 h-20"
                    control={<Checkbox icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} name="like"  />} label="like"/>
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
          })
        }
      </div>
    )
  } else {
    return (
      <div className="pb-10 ">
        <Load/>
      </div> )
  }
}






