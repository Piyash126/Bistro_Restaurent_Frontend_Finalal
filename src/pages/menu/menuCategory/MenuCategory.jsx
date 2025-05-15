import React from 'react';
import MenuItem from '../../../shared/menuItem/MenuItem';
import Cover from '../../../shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-8'>
            {title && <Cover img={coverImg} title={title}></Cover>}

            <div className='grid md:grid-cols-2 gap-4 mt-4'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;