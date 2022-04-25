import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <small>{description}</small>
            <div className='service-btn'>
                <button>BOOK: {name}</button>
            </div>
        </div>
    );
};

export default Service;