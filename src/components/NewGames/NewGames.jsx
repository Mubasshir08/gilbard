import React from 'react';

// importing data
import Data from '../../assets/JsonData/newGames.json';

function NewGames(props) {
    return (
        <div>
            <h1 className='text-[#252525] text-center text-lg lg:text-left lg:pl-36'> <span className='text-[#061DA4]'> new </span> games</h1>
            <section>
                <div className='lg:flex lg:flex-row lg:justify-center'>
                    {
                        Data.map((game) => {
                            if(game.row === 1){
                                return <div> 
                                    <img src={require(`../../assets/images/${game.pic}`)} alt="gameImg" className='w-[90%] mx-auto my-5' />
                                    <h3 className='text-xs ml-5 -mt-4'>{game.title}</h3>
                                    <p className='text-[.65rem] text-right mr-5 -mt-4 text-[#061DA4]'>{game.os}</p>
                                </div>
                            }
                        })
                    }
                 </div>
                <div className='lg:flex lg:flex-row lg:justify-center'>
                {
                        Data.map((game) => {
                            if(game.row === 2){
                                return <div className='mb-10'> 
                                    <img src={require(`../../assets/images/${game.pic}`)} alt="gameImg" className='w-[90%] mx-auto my-5' />
                                    <h3 className='text-xs ml-5 -mt-4'>{game.title}</h3>
                                    <p className='text-[.65rem] text-right mr-5 -mt-4 text-[#061DA4]'>{game.os}</p>
                                </div>
                            }
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default NewGames;