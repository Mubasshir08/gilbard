import React from 'react';

//import image
import Image from '../../assets/images/news-banner.png';

function Subscription(props) {
    return (
        <section className='container mb-10 lg:flex lg:items-center lg:px-10 lg:mt-5'>
            <div className='px-4 lg:px-7'>
                <p className='text-[#252525] lg:w-[45%] lg:text-2xl'>
                    SUBSCRIBE OUR <span className='text-[#061DA4]'> NEWSLETTER </span> GET ALL <span className='text-[#F64140]'> LATEST </span> NEWS, UPDATE, <span className='text-[#061DA4]'> VIDEOS </span> AND OFFERS
                </p>
              <input type="text" placeholder='Enter your email here' className='focus:outline-none border-b border-b-[#061DA4] w-[90%] my-3 lg:w-1/3 lg:my-6'/>  
            </div>
            <div className='hidden lg:block'>
                <img src= {Image} alt="" className=''/>
            </div>
        </section>
    );
}

export default Subscription;