import React, { useState } from 'react'
import StarRating from './StarRating';

const Test = () => {
    const [movieRating,setMovieRating]=useState(0);
    return (
        <div>
            <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
            <p>This move was rated {movieRating} Stars</p>
        </div>
    )
}

export default Test