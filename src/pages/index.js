import React from "react"
import {getDbModuleAndDb} from "../utils/firebase"
import "../styles/site.css"

import header_icon from "../images/header_icon.png" 
import banner_image from "../images/banner_image.png" 

import intro_video from "../images/intro_video.png" 
import think_icon from "../images/think_icon.png" 
import movie_icon from "../images/movie_icon.png" 
import point_icon from "../images/point_icon.png" 


function writeUserData(email) {
  console.log("writeUserData", email)


}

function handleClick(e) {
  e.preventDefault();

  const emailInput = document.getElementById("email_input");
  const email = emailInput.value;
  
  emailInput.value = '';

  getDbModuleAndDb().then(([dbModule, db]) => {
    dbModule.push(dbModule.ref(db, '/waitlist'), {
      email: email
    }).then(snapshot => {
      console.log("succed")
    }).catch((error) => {
      console.log("hata",error);
    });
  })  
}

export default function Home() {
 
  return (
<div>

<header className="sticky top-0 text-gray-600 body-font bg-black filter drop-shadow">
  <div className="container mx-auto flex flex-wrap p-2 pt-4 ml-7 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="lg:w-1/6 md:w-2/6 w-3/6" alt="Watchphile Icon" src={header_icon}/>
    <span className="ml-2 text-2xl font-normal text-pink-700">Watchphile</span>
    </a>
   </div>
</header> 

<section className="text-gray-600 body-font bg-black">
  <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
    <img className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Watchphile Banner" src={banner_image}/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-pink-700">Find your next movies/tv shows. <span className="text-green-600">Tailored for you.</span> Within minute. </h1>
      <p className="mb-8 leading-relaxed text-left font-light text-grey-700">People spend <span className="font-bold text-white">25 minutes</span> each day deciding what to watch? It means,
these people nearly spend <span className="font-bold text-white">152 hours</span> every year! Are you one of them? Don’t worry! Finding the best movies/tv series are no longer an issue with <span className="font-bold text-white"> Watchphile!</span></p>
      <p className="mb-8 leading-relaxed text-left font-light text-grey-700">Watchphile will be on the Play Store and App Store soon! If you wanna be the first to know when Watchphile is ready just type your email address! </p>
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <input id="email_input" type="email" placeholder="Email me when it’s ready!" name="hero-field" className="w-full bg-grey-900 rounded focus:ring-2 focus:ring-green-600 focus:bg-transparent border border-green-600 focus:border-green-600 text-base outline-none text-white font-thin py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button id="email_submit" onClick={handleClick} className="inline-flex text-black font-light bg-green-600 border-0 py-2 px-6 focus:outline-none active:bg-red-600 rounded text-lg">JOIN WAITLIST</button>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font bg-grey-600">
  <div id="video_instruction_row" className="container mx-auto flex px-5 pt-10 md:flex-row items-start gap-2 ">
    <div id="video_column" className="lg:max-w-lg lg:w-full md:w-1/2 w-full ml-14 flex-col mb-10 transform -translate-y-1/4 " >
      <img className="object-cover object-center rounded" alt="hero" src={intro_video}/>
    </div>
    <div id="instruction_column" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-left">
      <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0">
      <img className="w-6 h-6 mx-1" alt="Point Icon" src={point_icon}/>
       <span className="mb-8 leading-relaxed font-light text-black text-xl">Finding the best movies and tv shows which picks for you</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0">
     <img className="w-6 h-6" alt="Movie Icon" src={movie_icon}/>
       <span className="ml-2 mb-8 leading-relaxed font-light text-black text-xl">Extensive and current movies/tv shows reviews</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-4">
     <img className="w-6 h-6" alt="Think Icon" src={think_icon}/>
       <span className="ml-2 mb-8 leading-relaxed font-light text-black text-xl">Sharing ideas about movies/tv shows</span>
     </a>
   </div>
  </div>
</section>

<footer className="text-pink-700 body-font">
<div className="bg-pink-700">
    <div className="container mx-auto py-2 px-3 flex flex-wrap flex-col sm:flex-row">
      <p className="text-grey-900 text-sm text-center sm:text-left pl-5">© Watchphile — 2021</p>
      </div>
      </div>
</footer>

</div>
  );
}