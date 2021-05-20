import React from 'react';
import 'tachyons';
const Card = () => {
    return(
        <div className='bg-light-red dib br3 ps3 ma2 grow bw-2 shadow-5'>
            <img alt='robots' src='https://robohash.org/test'></img>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>

    );
}

export default Card;