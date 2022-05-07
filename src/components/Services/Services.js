import React, { useEffect, useState } from 'react';
import Stock from '../Stock/Stock';

const Services = () => {
    const [stocks, setStocks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/stock')
            .then(res => res.json())
            .then(data => {

                setStocks(data)
            })
    }, [])
    return (
        <div id='collection' className='row container mt-5 ms-5'>

            <h1 className='text-center mb-5'>Stock collection</h1>
            {
                stocks?.slice(0,6).map(stock => <Stock key={stock._id} stock={stock}></Stock>)
            }
        </div>
    );
};

export default Services;