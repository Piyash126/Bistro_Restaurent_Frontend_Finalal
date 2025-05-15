import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <img src={image} alt="" className='w-[100px]' style={{borderRadius:'0px 200px 200px 200px'}}/>
            <div>
                <h3 className='uppercase'>{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>$ {price}</p>
        </div>
    );
};

export default MenuItem;