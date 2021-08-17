import axios from "axios";
import React from "react";
import Load from "../components/loading"

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const baseUrl = `https://alphagallery.herokuapp.com/`
const postUrl = baseUrl + `api/v1/a-gallery/posts/`
const userUrl = baseUrl + `api/v1/a-gallery/current`
const tokenUrl = baseUrl + `api/token/`


export default function Feed(props) {
  const [token, setToken] = React.useState('');
  const [postdata, setPostdata] = React.useState([]);
  const [userdata, setuserdata] = React.useState([]);
  const [credentials, setcredentials] = React.useState({username:'alpha', password:'alpha'});
  
  async function getToken(credentials){
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
  }

  async function getPostData() {
    const config = { headers: { 'Authorization': 'Bearer ' + token } };
    const pdata = await axios.get(postUrl, config);
    setPostdata(pdata);
    console.log(pdata);
  }
  async function getuserData() {
    const config = { headers: { 'Authorization': 'Bearer ' + token } };
    const udata = await axios.get(userUrl, config);
    setuserdata(udata.data);
    console.log(udata.data);
  }

  async function post_put_request(data, postId){
    const config = {headers: {'Authorization': 'Bearer ' + token}};
    const responce = await axios.put(`https://alphagallery.herokuapp.com/api/v1/a-gallery/posts/${postId}/`, data, config);
    console.log(responce);
    if(responce.status == 200){
      getPostData();
    }
}
React.useEffect( async () => {
    
  await getToken(credentials);
  
  
}, []);

  React.useEffect(() => {
    if (token) {
      getPostData();
      getuserData();
    }
  }, [token]);

function addComment(event){
  event.preventDefault();
  const newcomment ={
    image:userdata.profile.photo,
    username:userdata.username,
    comment:event.target.newcomment.value,
  }
  const postdata ={
      user:parseInt(event.target.id.value),
      image:event.target.image.value,
      image1:event.target.image1.value,
      image2:event.target.image2.value,
      image3:event.target.image3.value,
      image4:event.target.image4.value,
      comments:[event.target.comment.value] + [newcomment],
      likes:parseInt(event.target.likes.value),
      discerption:event.target.discerption.value,
      }
  const id = parseInt(event.target.postId.value) 
      console.log(postdata);
      post_put_request(postdata,id)
    }
  


  if (postdata.data && userdata) {
    return (

  

        <div className="w-full flex flex-col lg:max-w-full lg:flex"style={{ backgroundImage: `url('https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} >

          {
            postdata.data.map(item => {
              return (
                <div className="flex flex-col justify-center bg-white border font-sans shadow-lg border-gray-500 rounded-md  mx-auto  w-8/12 h-2/4 my-24 ">
                  <div className="flex flex-row w-full">
                    <img className="w-20 h-20 rounded-full m-5"src={item.image}/>
                    <div className="flex flex-col mt-8 justify-start items-baseline"> 
                    <h6 className="font-bold text-lg">@{item.username}</h6>
                    <p>{item.created_at.slice(0, 10)}</p>
                    {/* <p>{item.created_at.slice(11, 16)}</p>  */}
                    </div>
                  </div>
                    <p className=" m-3.5 flex-auto flex-end text-s">{item.discerption}</p>
                  <div className="h-96 w-10/12 mx-auto">
                  <img className="w-full h-full mx-auto" src={item.image1}/>
                 </div>
                  <div className="flex flex-row  ml-10">
                    <form className="w-full">
                      <button type="submit"><FormControlLabel className="w-20 h-20"
                      control={<Checkbox icon={<FavoriteBorder />} 
                      checkedIcon={<Favorite />} name="like"  />} label="like"/>
                      </button>
                    <form onSubmit={addComment}>
                      <input type="hidden"  defaultValue={item.id}      name="postId" />
                      <input type="hidden"  defaultValue={item.image1}  name="image1" />
                      <input type="hidden"  defaultValue={item.image2}  name="image2" />
                      <input type="hidden"  defaultValue={item.image3}  name="image3" />
                      <input type="hidden"  defaultValue={item.image4}  name="image4" />
                      <input type="hidden"  defaultValue={item.image}   name="image"/>
                      <input type="hidden"  defaultValue={item.user}    name="id"/>
                      <input type="hidden"  defaultValue={item.likes}   name="likes"/>
                      <input type="hidden"  defaultValue={item.comment} name="comment"  />
                      <input type="hidden"  defaultValue={item.discerption} name="discerption"  />
                      <input className=" px-3 py-1.9 placeholder-blueGray-300 text-blueGray-600 w-8/12 relative bg-gray-200 rounded text-s border-0 shadow outline-none focus:outline-none focus:ring 
                      "type='text' name='newcomment'/>
                      <button className="px-4 py-2 mb-3 ml-3 text-s font-bold text-white bg-gray-700 rounded shadow outline-none active:bg-black hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 hover:bg-gray-500" type="submit" style={{ transition: "all .15s ease" }}>
                        Comment
                      </button>
                    </form>
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






