import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import drinksImg from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import MenuCategory from './menuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet><title>Bistro || Menu</title></Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subheading={"Don't Miss"} heading={"Todays Offered"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert items */}
            <MenuCategory items={desserts} title="desserts" coverImg={dessertImg}></MenuCategory>
            {/* soup items */}
            <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
            {/* salad items */}
            <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
            {/* drinks items */}
            <MenuCategory items={drinks} title="drinks" coverImg={drinksImg}></MenuCategory>
        </div>
    );
};

export default Menu;