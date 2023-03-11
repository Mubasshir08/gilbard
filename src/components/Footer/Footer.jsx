import React from 'react';

//import image
import Image from '../../assets/images/footer-image.jpg';
import Logo from '../../assets/images/logo.png';

function Footer(props) {
    return (
        <div className='relative'>
            <img src= {Image} alt="" className='w-full h-[150px] lg:h-[200px]'/>
            <div className='absolute top-0 left-0 w-full h-full bg-green-900/50 '></div>
                <img src= {Logo} alt= "brandLogo" className= 'absolute top-1 left-[9.3rem] w-16 lg:top-16 lg:left-2 lg:w-24' />
                <hr class="absolute bottom-6  w-full h-px border-gray-300/40" />
            <ul className='absolute bottom-7 left-32 flex flex-col items-center space-y-1 text-xs text-white lg:flex-row lg:space-x-10 lg:text-base lg:bottom-[6.7rem] lg:left-1/3'>
                 <li> <a href="/"> forums </a>  </li>
                 <li> <a href="/"> demo </a>  </li>
                 <li> <a href="/"> support </a>  </li>
                 <li> <a href="/"> terms & conditions </a> </li>   
                 <li> <a href="/" className='lg:ml-10'> follow us: </a> </li>   
            </ul>    
                <p className='absolute bottom-1 left-24 text-[10px] text-white lg:text-sm lg:left-[45%]'>Copyright &copy;2023. All rights reserved.</p>
        </div>
    );
}

export default Footer;