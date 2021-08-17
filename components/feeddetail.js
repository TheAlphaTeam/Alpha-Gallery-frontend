import axios from "axios";
import React from "react";
import Load from "../components/loading"

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const baseUrl = `https://alphagallery.herokuapp.com/`
const postUrl = baseUrl + `api/v1/a-gallery/posts/`


export default function Feed(props) {

  const [postdata, setPostdata] = React.useState([]);
 
  async function getPostData() {
    const config = { headers: { 'Authorization': 'Bearer ' + props.storedToken } };
    const pdata = await axios.get(postUrl, config);
    setPostdata(pdata);
    console.log(pdata);
  }


  React.useEffect(() => {
    if (props.storedToken) {
      getPostData();
    }
  }, [props.storedToken]);





  if (postdata.data) {
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
                    </form> 
                    <form onSubmit>
                      <input className=" px-3 py-1.9 placeholder-blueGray-300 text-blueGray-600 w-8/12 relative bg-gray-200 rounded text-s border-0 shadow outline-none focus:outline-none focus:ring "type='text' name='comment'/>
                      <button className="px-4 py-2 mb-3 ml-3 text-s font-bold text-white bg-gray-700 rounded shadow outline-none active:bg-black hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 hover:bg-gray-500" type="submit" style={{ transition: "all .15s ease" }}>
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






