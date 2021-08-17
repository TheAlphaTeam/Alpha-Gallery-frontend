import React from "react";
import axios from "axios";
import Link from "next/link";

export default function EditPost(props) {
    const [postdata, setPostdata] = React.useState();
    const [showAlert, setShowAlert] = React.useState(false);
    const [iferror, setiferror] = React.useState('');

    async function getPostsData(){
        console.log(props.postId)
        const config = {headers: {'Authorization': 'Bearer ' + props.token}};
        const pdata = await axios.get(`https://alphagallery.herokuapp.com/api/v1/a-gallery/posts/${props.postId}/`, config);
        setPostdata(pdata.data);
        console.log(pdata);
    }
    async function post_put_request(data){
        const config = {headers: {'Authorization': 'Bearer ' + props.token}};
        const responce = await axios.put(`https://alphagallery.herokuapp.com/api/v1/a-gallery/posts/${props.postId}/`, data, config);
        console.log(responce);
        if(responce.status == 200){
            setShowAlert(true);
            setiferror('Edited Successfuly');
        }
    }
    React.useEffect( async () => {
        if (props.token){
          
          await getPostsData();
        }
      }, [props.token]);

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
    <div className="justify-center items-center flex overflow-y-auto relative  inset-0 z-50 outline-none focus:outline-none ">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-sans">
              Edit Post
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span className="bg-transparent text-black font-sans h-6 w-6 text-2xl block outline-none focus:outline-none">
                <Link href="/profile"> X</Link>
              </span>
            </button>
          </div>
          {showAlert ? (
                  <div className="flex justify-center">
                    <div className={"flex flex-row justify-between items-center font-sans h-4 text-white px-6 py-6 border-0 rounded mt-4 mb-4 w-3/4 bg-black"}>
                      <span className=" mr-8">
                        <b className="capitalize py-2"> {iferror} </b>
                      </span>
                      <button className=" bg-transparent text-2xl text-white font-semibold leading-none  outline-none focus:outline-none" onClick={() => setShowAlert(false)}>
                        <span className="text-white">×</span>
                      </button>
                    </div>
                  </div>) : null}
          {/*body*/}
            <div className="relative px-10 py-3 flex-auto">
              <form className="text-blueGray-500 text-lg leading-relaxed" onSubmit={postEditHandler}>
                <h6 className="px-1 py-1  font-sans text-blueGray-600">Images (As URL):</h6>
                <div className="flex-row ">
                    <input type="text" defaultValue={postdata.image1}  name="image1" placeholder="Image URL" className="w-1/2 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "/>
                    <input type="text" defaultValue={postdata.image2}  name="image2" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2 "/>
                    <input type="text" defaultValue={postdata.image3}  name="image3" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2 "/>
                    <input type="text" defaultValue={postdata.image4}  name="image4" placeholder="Image URL" className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"/>
                </div>
                <input type="hidden"  defaultValue={postdata.image} name="image"/>
                <input type="hidden"  defaultValue={postdata.user} name="id"/>
                <input type="hidden"  defaultValue={postdata.likes} name="likes"/>
                <input type="hidden"  defaultValue={postdata.comments} name="comments"/>
                <h6 className="px-3 py-3 font-sans text-blueGray-600"> Discerption :</h6>
                <input name="discerption" defaultValue={postdata.discerption} type="text" placeholder="Discerption" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
          
                {/*footer*/}
                <div className="flex items-center justify-center p-3 border-t border-solid border-blueGray-200 rounded-b">
                    <button className="bg-emerald-500 font-sans my-2 text-black bg-gray-200 active:bg-emerald-600 font-bold uppercase text-sm px-36 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 hover:bg-black hover:text-white"
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
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>)
}else{
    return(  
    <>    
        <div className="h-11/12 flex justify-center items-center py-80">
          <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'/>
        </div>

    </>
          )
}

}
