import React from 'react';

// importing data
import Data from '../../assets/JsonData/GameReview.json';

function GameReview(props) {
    return (
        <section>
            {
                Data.map( (review) => {
                    return <div className='mb-10'>
                        <img src= {require(`../../assets/images/${review.pic}`)} alt="reviewImg" className='w-[90%] mx-auto my-5'/>
                            <div className='mb-2'>
                                <h5 className='text-xs ml-5 -mt-2'>{review.title}</h5>
                                <h6 className='text-[.65rem] text-right text-[#061DA4] mr-5 -mt-4 '> rating: {review.rating}</h6>
                            </div>
                        <p className='text-xs w-[90%] mx-auto '>{review.description}</p>
                    </div>
                })
            }
        </section>
    );
}

export default GameReview;