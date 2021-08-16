import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import axios from "axios";



const baseUrl= 'https://alphagallery.herokuapp.com/'
const userUrl = baseUrl + 'api/v1/a-gallery/users/'


export default function LoginForm(props){

    const [username, setUsername] =useState('');
    const [password, setPassword] = useState('');
    const[showForm, setShowForm] = useState(false);
    

    function submitHandeler(event){
        event.preventDefault();
        props.loginHandler({username:username, password:password})

    }

    function usernameChangeHandler(event){
        event.preventDefault();
        setUsername(event.target.value);
    }


    function passwordChangeHandler(event){
        event.preventDefault();
        setPassword(event.target.value);
    }

    function signUpForm(){
        setShowForm(!showForm)
    }
    
    function loginForm(){
        setShowForm(!showForm)
    }

    function createAccountHan(event){

        event.preventDefault();

        let userAccount={
            username: event.target.username.value,
            email:event.target.email.value,
            first_name:event.target.firstName.value,
            last_name:event.target.lastName.value,
            password:event.target.password.value,
            profile:{
                bio:event.target.bio.value,
                dob:event.target.date.value,
                city:event.target.city.value,
                photo:event.target.photo.value,
            }
        }

        
        async function addAccountApi(){
            await axios.post(userUrl, userAccount)
            setlocalStorage(userAccount)
        }   

        function setlocalStorage(user){
            setUsername(user.username)
            setPassword(user.password)
            props.loginHandler({username:user.username, password:user.password})
        }

        addAccountApi()
       

    }


    useEffect(()=> {
        if(!localStorage.getItem('token')){
            localStorage.setItem('username',username);
            localStorage.setItem('password',password)
        }  
    })

    
    return(
        <div>
            <Head>
            <title>Alpha Gallery </title>
            </Head>

            <header> </header>
            {/* https://i.pinimg.com/originals/aa/46/93/aa4693c1130c17f0b729fd2f434f06f1.jpg */}
            <main style={{ backgroundImage: "url('https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}} className='flex items-center justify-center w-full h-screen'>
                {!showForm && (
                   
                    <div style={{backgroundColor:'rgba(0, 0,0,.2)'}} className='w-10/12 m-auto my-10 rounded-md shadow-md k lg:w-4/12 md:6/12'>
                        <div className='px-8 py-8 '>
                                <h1 className="mt-3 text-2xl font-medium text-center text-black">Login</h1>
            
                                <form onSubmit={submitHandeler} className="mt-6" >

                                    <div className='my-5 text-sm'>
                                        <label htmlFor='username' className='block text-black'>Username</label>
                                        <input type="text"  name='username' placeholder='Username' onChange={usernameChangeHandler}  autoFocus required  className='w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none'/>
                                    </div>

                                    <div className='my-5 text-sm'>
                                        <label htmlFor='password' className='block text-black'>Password</label>
                                        <input type="password"  name='password' placeholder='password' onChange={ passwordChangeHandler} required className='w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none'/>
                                    </div>

                                    <input type="submit"  value='Login' className='block w-full p-3 text-center text-white duration-300 bg-gray-700 rounded-sm hover:bg-black'/>
                                </form>

                            <div className='flex items-center justify-center mt-8 md:justify-between'>
                                <div style={{height:'1px'}} className='hidden w-5/12 bg-gray-400 md:block'></div>
                                <h3 className='text-sm font-normal text-gray-700 md:mx-2'>or</h3>
                                <div style={{height:'1px'}} className='hidden w-5/12 bg-gray-400 md:block'></div>
                            </div>
                            
                            <h3 className="mt-8 text-sm text-center text-gray-700 font-meduim">Don't have an account?  <button onClick={signUpForm} className='font-medium text-black'>Create One</button> </h3>
                        </div>
                    </div>
                    )
                }

                {showForm && (
                     <section className='w-full h-full overflow-auto'>
                         
                      <div style={{backgroundColor:'rgba(0, 0,0,.2)'}} className='w-10/12 mx-auto my-5 rounded-md shadow-md lg:w-6/12 md:6/12'>
                         <div className='px-10 py-4 '>
                             
                         <h1 className="my-4 text-2xl font-medium text-center text-black">Sign Up </h1>

                            <form onSubmit={createAccountHan}>

                                <div className='flex my-2'>
                                    <div className='w-6/12 my-2 mr-10 text-sm'>
                                        <label htmlFor='username' className='block text-black'>Username</label>
                                        <input type="text"  name='username' placeholder='Username'  autoFocus required  className='w-full py-3 mt-2 bg-gray-100 rounded-sm px-14 focus:outline-none'/>
                                    </div>

                                    <div className='w-6/12 my-2 text-sm'>
                                        <label htmlFor='email' className='block text-black'>Email</label>
                                        <input type='text' name='email' placeholder='Email Address' required  className='w-full py-3 mt-2 bg-gray-100 rounded-sm px-14 focus:outline-none'/>
                                    </div>
                                </div>
                                
                                <div className='flex my-2'>
                                    <div className='w-6/12 my-2 mr-10 text-sm'>
                                        <label htmlFor='firstName' className='block text-black'>First Name</label>
                                        <input type='text' name='firstName' placeholder='First Name' required  className='w-full py-3 mt-2 bg-gray-100 rounded-sm px-14 focus:outline-none'/>
                                    </div>
                                
                                    <div className='w-6/12 my-2 text-sm'>
                                        <label htmlFor='lastName' className='block text-black'>Last Name</label>
                                        <input type='text' name='lastName' placeholder='Last Name' required  className='w-full py-3 mt-2 bg-gray-100 rounded-sm px-14 focus:outline-none'/>
                                    </div>
                                </div>
                                

                                <div className='my-4 text-sm'>
                                    <label htmlFor='password' className='block text-black'>Password</label>
                                    <input type="password"  name='password' placeholder='password'  required className='w-full px-4 py-3 mt-2 bg-gray-100 rounded-sm focus:outline-none'/>
                                </div>

                                <div className='my-4 text-sm'>
                                    <label htmlFor='bio' className='block text-black'>Bio</label>
                                    <textarea name='bio' required className='w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none'> </textarea>
                                </div>

                                <div className='flex my-2'>
                                    <div className='w-6/12 my-2 mr-10 text-sm'>
                                        <label htmlFor='date' className='block text-black'>Date</label>
                                        <input type='date' name='date'  required className='w-full py-3 mt-2 bg-gray-100 rounded-sm px-14 focus:outline-none'/>
                                    </div>

                                    <div className='w-6/12 my-2 text-sm'>
                                        <label htmlFor='city' className='block text-black'>City</label>
                                        <input type='text' name='city' placeholder='City' required  className='w-full py-3 mt-2 bg-gray-100 rounded-sm px-14 focus:outline-none'/>
                                    </div>
                                </div>

                               
                                <div className='my-4 text-sm'>
                                    <label htmlFor='photo' className='block text-black'>Photo</label>
                                    <input type='url' name='photo' placeholder='Photo' required  className='w-full px-4 py-3 mt-2 bg-gray-100 rounded-sm focus:outline-none'/>
                                </div>
                               
                                
                                <input type='submit' value= 'Create Account' className='block w-full p-3 text-center text-white duration-300 bg-gray-700 rounded-sm mt-7 hover:bg-black'/>

                            </form>
                            <div className='flex items-center justify-center mt-8 md:justify-between'>
                                <div style={{height:'1px'}} className='hidden w-5/12 bg-gray-400 md:block'></div>
                                <h3 className='text-sm font-normal text-gray-700 md:mx-2'>or</h3>
                                <div style={{height:'1px'}} className='hidden w-5/12 bg-gray-400 md:block'></div>
                            </div>

                            <h3 className="mt-8 text-sm text-center text-gray-700 font-meduim"> Have an account?  <button onClick={loginForm} className='font-medium text-black'>Login</button> </h3>
                            
                         </div>
                    </div> 
                     </section>

                    
                )
                }
        </main>

        <footer></footer>
        </div>

    )   
}