import React, { useEffect } from 'react';

// imporing swiper with slider
import Swiper, { Navigation, Pagination } from 'swiper';

//init css
import './GameReviewSlider.css';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// importing images
import SlideImg1 from '../../assets/images/video-front1.png';
import SlideImg2 from '../../assets/images/video-front2.png';
import SlideImg3 from '../../assets/images/video-front3.png';




function GameReviewSlider(props) {
  useEffect(() => {
    // init Swiper:
    const swiper = new Swiper('.swiper', {

    // configure Swiper to use modules
    modules: [Navigation, Pagination],

     // Optional parameters
     direction: 'horizontal',
     loop: true,
   
     // init pagination
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
   
     // init Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
       clickable: true
     }
});
  },[])
    return (
        <div className="container mb-10">
            <div className='swiper w-[90%]'>
                    <div className="swiper-wrapper">

                    <div className="swiper-slide"><img src= {SlideImg1} alt="" className='w-full'/></div>
                    <div className="swiper-slide"><img src= {SlideImg2} alt="" className='w-full' /></div>
                    <div className="swiper-slide"><img src= {SlideImg3} alt="" className='w-full'/></div>

                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

             
            </div>
        </div>
    );
}

export default GameReviewSlider;