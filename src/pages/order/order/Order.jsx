import React, { useState } from 'react';
import orderImg from '../../../assets/shop/order.jpg';
import Cover from '../../../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/foodCard/FoodCard';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet><title>Bistro || Order</title></Helmet>
            <Cover img={orderImg} title={"Order Food"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;