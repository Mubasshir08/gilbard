import React from 'react';

// importing css
import './Header.css';

// importing images
import Image from '../../assets/images/header.png';

// importing Data
import Data from '../../assets/JsonData/featuredGames.json';

function Header(props) {
    return (
        <header>
            <img src={Image} alt= "img" className='-mt-1' />

            <div className='container  flex items-center'>
                <div className='inline-block w-1/2 bg-[#081B1F] text-white pl-3 py-1 lg:py-3'>
                    <h1>FEATURED GAMES</h1>
                </div>
                <div className='inline-block w-1/2 text-xs text-right pr-4'>
                    <a href='/' className='underline underline-offset-2'>VIEW ALL GAMES</a>
                </div>
            </div>
           <div className='flex flex-col mt-8 lg:flex-row'>
                {
                    Data.map((game) => <img src= {require(`../../assets/images/${game.pic}`)} alt = "gamePic" className='w-[90%] mx-auto my-5 lg:w-1/4 lg:-mt-9'/>)
                }
            </div> 
        </header>
    );
}

export default Header;