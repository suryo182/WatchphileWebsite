import React from "react"
import {getDbModuleAndDb} from "../utils/firebase"
import "../styles/site.css"
import { Helmet } from "react-helmet"

import banner_image from "../images/banner_image.png" 
import header_image from "../images/header_image.png" 
import intro_video from "../images/intro_video.png" 
import think_icon from "../images/think_icon.png" 
import movie_icon from "../images/movie_icon.png" 
import point_icon from "../images/point_icon.png" 
import favicon16 from "../images/favicon_small.png";
import favicon32 from "../images/favicon_medium.png";
import favicon64 from "../images/favicon_big.png";

import watchphile_text_image from "../images/watchphile_text.png"
import watchphile_image from "../images/watchphile_image.png"
import review_banner from "../images/review_banner.png"
import explanation_banner from "../images/explanation_banner.png"
import for_you_banner from "../images/for_you_banner.png"
import check_icon from "../images/check_icon.png"
import reviews_icon from "../images/reviews_icon.png"
import comment_icon from "../images/comment_icon.png"

import watchphile_video from "../assets/watchphile.mp4"

function handleClick(e) {
  e.preventDefault();

  const emailInput = document.getElementById("email_input");
  const email = emailInput.value;
  
  emailInput.value = '';

  getDbModuleAndDb().then(([dbModule, db]) => {
    dbModule.push(dbModule.ref(db, '/waitlist'), {
      email: email
    }).then(snapshot => {
      console.log("succeed")
    }).catch((error) => {
      console.log("error",error);
    });
  })  
}

export default function Home() {

  return (
<div>
<div className="application">
      <Helmet
        title={"Watchphile"}
        meta={[
        {
         name: "description",
         content: "Watchphile - Find your next movies/tv shows. Tailored for you. Within minute!",
        },
        {
        name: "keywords",
        content: "watchphile, movies, tv shows",
        },
      ]}
      link={[
      { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
      { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
      { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
       ]}
      />
      </div>

<header className="sticky top-0 text-gray-600 body-font bg-black filter drop-shadow">
  <div className="container mx-auto flex flex-wrap p-2 pt-4 ml-7 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-4">
    <img className="lg:w-1/6 md:w-2/6 w-1/6" alt="Watchphile Icon" src={watchphile_text_image}/>
    </a>
   </div>
</header> 

<section className="text-gray-600 body-font bg-black">
  <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
    <img className="lg:w-1/6 md:w-1/6 w-1/6 mb-4 object-cover object-center rounded" alt="Watchphile Banner" src={watchphile_image}/>
    <div className="w-full md:w-2/3 flex flex-col mb-12 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-white">Find your next movies/tv shows. Tailored for you.</h1>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-white">Within minutes. </h1>
      <p className="mb-4 leading-relaxed text-left font-light text-grey-700">People spend an average of <span className="font-bold text-white">25 minutes</span> each day deciding what to watch! That’s
 <span className="font-bold text-white"> 152 hours</span> every year! Are you one of them? Don’t worry! Finding the best movies/tv shows is no longer an issue with<span className="font-bold text-white"> Watchphile!</span></p>
      <p className="mb-8 leading-relaxed text-left font-light text-grey-700">Watchphile will be on the Play Store and App Store soon! If you wanna be the first to know when Watchphile is ready just type your email address here! </p>
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <input id="email_input" type="email" placeholder="Email me when it’s ready!" name="hero-field" className="w-full bg-grey-900 rounded focus:ring-2 focus:ring-pink-700 focus:bg-transparent border border-pink-700 focus:border-pink-700 text-base outline-none text-white font-thin py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button id="email_submit" onClick={handleClick} className="inline-flex text-white font-light bg-pink-700 border-0 py-2 px-6 focus:outline-none active:bg-pink-200 rounded text-lg">JOIN WAITLIST</button>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font bg-grey-700">
  <div id="video_instruction_row" className="container mx-auto flex px-5 pt-10 md:flex-row items-start gap-2 ">
    <div id="video_column" className="md:ml-8 lg:ml-6 xl:ml-14 md:mx-0 transform -translate-y-16" >
      <video controls>
      <source src={watchphile_video} type="video/mp4" />
    </video>
    </div>
    <div id="instruction_column" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 ml-2.5 flex flex-col md:items-start md:text-left text-left">
      <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0">
      <img className="w-6 h-6 mx-1 mt-1" alt="Point Icon" src={point_icon}/>
       <span className="mb-8 leading-relaxed font-light text-black text-xl">Finding movies and tv shows that you’ll love</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0">
     <img className="w-6 h-6 mt-1" alt="Movie Icon" src={movie_icon}/>
       <span className="ml-2 mb-8 leading-relaxed font-light text-black text-xl">Offering reviews on all the latest movies and shows</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-4">
     <img className="w-6 h-6 mt-1" alt="Think Icon" src={think_icon}/>
       <span className="ml-2 mb-8 leading-relaxed font-light text-black text-xl">Sharing your thoughts  - What’s hot and what’s not!</span>
     </a>
   </div>
  </div>
</section>

<section className="text-gray-700 body-font bg-grey-600">
   <div className="container mx-auto flex flex-col px-5 py-20 justify-center items-center">
     <div className="w-full md:w-2/3 flex flex-col mb-6 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-black">The most fun way to decide</h1>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-black">what to watch!</h1>
   </div>
     <img className="lg:w-3/6 md:w-3/6 w-3/6 mb-4 object-cover object-center rounded" alt="Explanation Banner" src={explanation_banner}/>
   </div>
</section>

<section className="text-gray-600 body-font bg-grey-700">
  <div id="for_you_intro_row" className="container mx-auto flex px-5 py-20 md:flex-row items-start gap-2">
    <div id="for_you_instruction_column" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col align-middle md:items-start md:text-left text-left">
      <a className="flex title-font font-medium text-gray-900 mb-2 mt-24 md:mb-0">
      <img className="w-6 h-6" alt="Check Icon" src={check_icon}/>
      <span className="mb-8 ml-4 leading-relaxed font-light text-black text-xl">Select your favorite genres</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-2 md:mb-0">
     <img className="w-6 h-6 mt-2" alt="Check Icon" src={check_icon}/>
       <span className="ml-4  mb-8 leading-relaxed font-light text-black text-xl">Review the movies or series you both like and dislike. And that's it!</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-2">
     <img className="w-6 h-6 mt-2" alt="Check Icon" src={check_icon}/>
       <span className="ml-4  mb-8 leading-relaxed font-light text-black text-xl">Lean back and enjoy it with a movie and tv show that is special for you!</span>
     </a>
   </div>
   <div id="for_you_intro_image_column" className="lg:max-w-lg lg:w-full md:w-1/2 w-full ml-14 mr-14 flex-col mb-10" >
      <img className="object-cover object-center rounded" alt="For You Banner" src={for_you_banner}/>
    </div>
  </div>
</section>

<section className="text-gray-700 body-font bg-grey-600">
  <div id="review_intro_row" className="container mx-auto flex px-5 pt-20 md:flex-row items-start gap-2 ">
    <div id="review_image_column" className="lg:max-w-lg lg:w-full md:w-1/2 w-full ml-14 mr-4 flex-col mb-10" >
      <img className="object-cover object-center rounded" alt="Review Banner" src={review_banner}/>
    </div>
    <div id="review_instruction_column" className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left text-left">
      <a className="flex title-font font-medium text-gray-900 mb-2 mt-24 md:mb-0">
      <img className="w-10 h-10 mx-1" alt="Point Icon" src={point_icon}/>
       <span className="mb-8 leading-relaxed font-light text-black text-xl">Extensive and current movies and tv shows details</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-2 md:mb-0">
     <img className="w-10 h-10" alt="Reviews Icon" src={reviews_icon}/>
       <span className="ml-2 mb-8 leading-relaxed font-light text-black text-xl">See lots of reviews</span>
     </a>
     <a className="flex title-font font-medium text-gray-900 mb-2">
     <img className="w-10 h-10" alt="Comment Icon" src={comment_icon}/>
       <span className="ml-2 mb-8 leading-relaxed font-light text-black text-xl">If you wanna be part of the Watchphile, leave a comment!</span>
     </a>
   </div>
  </div>
</section>

<section className="text-gray-600 body-font bg-black">
<div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
    <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <input id="email_input" type="email" placeholder="Email me when it’s ready!" name="hero-field" className="w-full bg-grey-900 rounded focus:ring-2 focus:ring-pink-700 focus:bg-transparent border border-pink-700 focus:border-pink-700 text-base outline-none text-white font-thin py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button id="email_submit" onClick={handleClick} className="inline-flex text-white font-light bg-pink-700 border-0 py-2 px-6 focus:outline-none active:bg-pink-200 rounded text-lg">JOIN WAITLIST</button>
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