import React from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import MenuItem from '../../../shared/menuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then((data) => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className='mb-8'>
            <SectionTitle heading={"Popular Item"} subheading={"From our menu"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;