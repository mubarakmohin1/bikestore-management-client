import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckDetails = () => {
    const { checkoutId } = useParams();
    const[details,setDetails] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/stock/${checkoutId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data));
    },[])
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <h2>{details.name}</h2> <br />
            <Link to='/permission'>
                <button className='btn btn-primary ms-4'>Permission</button>
            </Link>

        </div>
    );
};

export default CheckDetails;