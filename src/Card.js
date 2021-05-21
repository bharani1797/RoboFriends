import React from 'react';
import 'tachyons';
const Card = ({ name, email, id }) => {
    // const { name, email, id } = props;
    return(
        <div className='tc bg-light-red dib br3 ps3 ma2 grow bw-2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;