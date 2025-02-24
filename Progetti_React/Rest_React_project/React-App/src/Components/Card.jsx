
import React from 'react';

function Card(props) {
    
    return (
        <>
        <div className='container'>
            <div className='card'>
                <img className='img_card' src={props.img}/>
                <h2 style={{padding:"10px"}}>{props.title}</h2>
            </div>

        </div>

    </>
    );      
}

export default Card;