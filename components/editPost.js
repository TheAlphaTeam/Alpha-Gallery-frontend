import React from "react";
import axios from "axios";
import Link from "next/link";
import Load from "../components/loading"

const baseUrl = `https://alphagallery.herokuapp.com/`
const tokenUrl = baseUrl + 'api/token/'


export default function EditPost(props) {
    const [postdata, setPostdata] = React.useState();
    const [showAlert, setShowAlert] = React.useState(false);
    const [iferror, setiferror] = React.useState('');

    const [token, setToken] = React.useState('');
    const [credentials, setcredentials] = React.useState();
  

  async function getToken(credentials){
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
  }

    async function getPostsData(){
        console.log(props.postId)
        const config = {headers: {'Authorization': 'Bearer ' + token}};
        const pdata = await axios.get(`https://alphagallery.herokuapp.com/api/v1/a-gallery/posts/${props.postId}/`, config);
        setPostdata(pdata.data);
        console.log(pdata);
    }
    
    async function post_put_request(data){
        const config = {headers: {'Authorization': 'Bearer ' + token}};
        const responce = await axios.put(`https://alphagallery.herokuapp.com/api/v1/a-gallery/posts/${props.postId}/`, data, config);
        console.log(responce);
        if(responce.status == 200){
            setShowAlert(true);
            setiferror('Edited Successfuly');
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
        await getPostsData()
      } 
    }, [token]);

    function postEditHandler(event){
        event.preventDefault();
        const postdata ={
          user:parseInt(event.target.id.value),
          image:event.target.image.value,
          image1:event.target.image1.value,
          image2:event.target.image2.value,
          image3:event.target.image3.value,
          image4:event.target.image4.value,
          comments:event.target.comments.value,
          likes:parseInt(event.target.likes.value),
          discerption:event.target.discerption.value,
          
        }
    
        console.log(postdata);
        post_put_request(postdata)
      }
 if(postdata){  
  return (

    <div>
        {console.log(postdata)}
    <div className="relative inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none ">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        {/*content*/}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
            <h3 className="font-sans text-3xl">
              Edit Post
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
              <form className="text-lg leading-relaxed text-blueGray-500" onSubmit={postEditHandler}>
                <h6 className="px-1 py-1 font-sans text-blueGray-600">Images (As URL):</h6>
                <div className="flex-row ">
                    <input type="text" defaultValue={postdata.image1}  name="image1" placeholder="Image URL" className="relative w-1/2 px-3 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring "/>
                    <input type="text" defaultValue={postdata.image2}  name="image2" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
                    <input type="text" defaultValue={postdata.image3}  name="image3" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
                    <input type="text" defaultValue={postdata.image4}  name="image4" placeholder="Image URL" className="relative w-1/2 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
                </div>
                <input type="hidden"  defaultValue={postdata.image} name="image"/>
                <input type="hidden"  defaultValue={postdata.user} name="id"/>
                <input type="hidden"  defaultValue={postdata.likes} name="likes"/>
                <input type="hidden"  defaultValue={postdata.comments} name="comments"/>
                <h6 className="px-3 py-3 font-sans text-blueGray-600"> Discerption :</h6>
                <input name="discerption" defaultValue={postdata.discerption} type="text" placeholder="Discerption" className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
          
                {/*footer*/}
                <div className="flex items-center justify-center p-3 border-t border-solid rounded-b border-blueGray-200">
                    <button className="py-3 my-2 mr-1 font-sans text-sm font-bold text-black uppercase transition-all duration-150 ease-linear bg-gray-200 rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 px-36 hover:shadow-lg focus:outline-none hover:bg-black hover:text-white"
                     type="submit"
                     >
                    Edit Post 
                    </button>
                </div>

              </form>
            </div>
        </div>
    </div>
    </div>
    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
  </div>)
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
