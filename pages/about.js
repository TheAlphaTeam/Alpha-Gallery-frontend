import Head from 'next/head'
import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';


export default function About() {

   


    return (

        <>
            <Head>
        <title>Alpha Gallery - About </title>
        <link rel="icon" href="/icon.ico" />
            </Head>
            <Header/>
            <main>
            <div className="relative block " style={{ height: "300px" }}>

                <div className="absolute top-0 items-center w-full h-full text-3xl font-extrabold text-center" style={{ backgroundImage: `url('http://res2.weblium.site/res/5c1cd98f2914810022558981/5c223adfbd2020002629619e_optimized_1920')`, backgroundRepeat: 'repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} >
                    <div className="absolute z-0 w-full h-full bg-black opacity-50">
                    </div>
                    <div  className=" bg-white opacity-50 "> 
                    <h3 className="font-sans text-lg font-bold capitalize align-middle items-center m-28">

                            alpha gallery it's gallery  to show A virtualgallery
                            that presentingcollection of<br></br> artworks, information
                            about exhibitions,Artest. Providinga platform for artists
                            to present their works since it becomes hard while current
                            conditions caused by the pandemic.
                    </h3>
                    </div>
                </div>
            </div>
            <div className="" style={{ backgroundImage: `url('https://res2.weblium.site/res/5c74178873dbed00222cf694/5c75114c1947b80024e03da4_optimized_5120')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

            
           <hr className="text-xl font-bold text-gray-900"/>
           <hr/>
          
                <div className="flex flex-row flex-wrap items-center justify-center pt-10 ">
                    <div className="flex flex-col items-center justify-center p-1 h-96 w-96 ">
                        <div className="inline-flex overflow-hidden rounded-full shadow-lg h-60 w-60 ">
                            <img src="https://avatars.githubusercontent.com/u/55560502?v=4"
                                alt=""
                                className="w-full h-full" />
                        </div>

                        <h2 className="mt-4 text-xl font-bold animate-bounce">Basel Atalla </h2>


                        <h6 >Full Stack Developer</h6>

                        <ul className="flex flex-row mt-4 space-x-2">
                            <li>
                                <a href=" https://github.com/baselatalla" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios/2x/github--v2.gif" className="rounded-full " />
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/baselatalla" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-filled/24/000000/facebook-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center p-1 h-96 w-96 " >

                        <div className="inline-flex overflow-hidden rounded-full shadow-lg h-60 w-60">
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEUVv3Y5yW7YA/profile-displayphoto-shrink_200_200/0/1629112881896?e=1634774400&v=beta&t=eA_vDrqWKQqke7Id1787POzdnbXanAEAjUZxTdMRP9o" className="rounded-full"
                                alt=""
                                className="w-full h-full" />
                        </div>

                        <h2 className="mt-4 text-xl font-bold  animate-bounce">Sewar Maqableh</h2>



                        <h6 >Full Stack Developer</h6>


                        <ul className="flex flex-row mt-4 space-x-2">
                            <li>
                                <a href=" https://github.com/Sewar-web" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios/2x/github--v2.gif" className="rounded-full bg" />
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/sewar.ahmad.7798574/" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-filled/24/000000/facebook-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center p-1 h-96 w-96">
                        <div className="inline-flex overflow-hidden rounded-full shadow-lg h-60 w-60">
                            <img src="https://avatars.githubusercontent.com/u/79087573?v=4" className="rounded-full"
                                alt=""
                                className="w-full h-full" />
                        </div>

                        <h2 className="mt-4 text-xl font-bold  animate-bounce">Bayan Alkatib </h2>


                        <h6 >Full Stack Developer</h6>

                        <ul className="flex flex-row mt-4 space-x-2">
                            <li>
                                <a href=" https://github.com/bayan-alkhatib" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios/2x/github--v2.gif" className="rounded-full " />
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-filled/24/000000/facebook-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                        </ul>
                    </div>



                    <div className="flex flex-col items-center justify-center h-96 w-96 ">
                        <div className="inline-flex overflow-hidden rounded-full shadow-lg h-60 w-60 ">
                            <img src="https://avatars.githubusercontent.com/u/50866072?v=4"
                                alt=""
                                className="w-full h-full" />


                        </div>
                        <h2 className="mt-4 space-x-2 text-xl font-bold text-center  animate-bounce">Niveen Smadi </h2>
                        <h6 >Full Stack Developer</h6>

                        <ul className="flex flex-row mt-4 space-x-2">
                            <li>
                                <a href=" https://github.com/NiveenAlSmadi" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios/2x/github--v2.gif" className="rounded-full" />
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/niveena.monem.9/" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-filled/24/000000/facebook-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center h-96 w-96">
                        <div className="inline-flex overflow-hidden rounded-full shadow-lg h-60 w-60">
                            <img src="https://avatars.githubusercontent.com/u/77916760?v=4"
                                alt=""
                                className="w-full h-full" />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-center  animate-bounce">Layan Abo-shaweesh</h2>


                        <h6 >Full Stack Developer</h6>

                        <ul className="flex flex-row mt-4 space-x-2">
                            <li>
                                <a href=" https://github.com/layanabushaweesh" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios/2x/github--v2.gif" className="rounded-full" />
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-filled/24/000000/facebook-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" className="flex items-center justify-center w-8 h-8 text-gray-800 border border-gray-800 rounded-full">
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v2.png" />
                                    <i className="fab fa-instagram "></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            {/* 
                <div className="flex w-full py-10 flex-rows ">

                    <div className="flex felx-cols ">

                        <div className="p-2">
                            <img src="https://res2.weblium.site/res/5c1cd98f2914810022558981/5c223c62bd20200026296311_optimized" className="pb-2" />

                            <img src="https://images.pexels.com/photos/2121666/pexels-photo-2121666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="pb-2 " />
                            <img src="https://res2.weblium.site/res/5c1cd98f2914810022558981/5c223c5ebd202000262962de_optimized" className="pb-2 " />

                        </div>
                        <div className="p-2">
                            <img src="https://images.pexels.com/photos/2123337/pexels-photo-2123337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700 " className="pb-5" />

                            <img src="https://images.pexels.com/photos/2372979/pexels-photo-2372979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-sans text-xl font-bold  capitalize align-middle pt-44 text-justify">

                            alpha gallery it's gallery  to show A virtualgallery
                            that presentingcollection of<br></br> artworks, information
                            about exhibitions,Artest. Providinga platform for artists
                            to present their works since it becomes hard while current
                            conditions caused by the pandemic. </h3>
                    </div>



                </div> */}
            </div>
            </main>
            <Footer/>
            </>

      






    )
}
