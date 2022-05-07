import React, { useEffect, useState } from 'react';
import Item from './Items/Item';


const MyItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/stock')
            .then(res => res.json())
            .then(data => {

                setItems(data)
            })
    }, [])
    return (
        <div className='row container mt-5 ms-5'>
              {
                  items.map(item => <Item key={item._id} item = {item}></Item>)
              }
        </div>
    );
};

export default MyItems;