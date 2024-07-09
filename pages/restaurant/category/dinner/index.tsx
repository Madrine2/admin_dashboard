import React from "react";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import Sidebar from "@/components/sidebar/Sidebar";
import { MantineProvider } from '@mantine/core';

const headers = ['SL', 'Image', 'Name', 'Price', 'Status'];

const items = [
    { id: 1, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 2, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 3, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 4, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 5, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 6, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 7, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 8, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 9, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 10, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 11, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 12, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 13, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 14, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 15, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 16, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 17, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 18, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 19, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 20, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 21, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 22, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 23, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 24, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 25, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 26, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 27, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 28, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 29, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 30, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 31, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 32, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 33, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { id: 34, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { id: 35, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { id: 36, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
];



const Dinner = () => {
    return (
        <MantineProvider>
            <div className="flex">
                <Sidebar/>
                <div className='bg-white'>
                    <TopBar title={'Dinner'} admin={'Isaac'}/>
                    <div className='ml-6'>
                        <Table headers={headers} data={items} />
                    </div>

                </div>
            </div>
        </MantineProvider>
    );
};

export default Dinner;
