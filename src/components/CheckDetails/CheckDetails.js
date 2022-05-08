import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CheckDetails = () => {
    const { checkoutId } = useParams();
    const[details,setDetails] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/stock/${checkoutId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data));
    },[])

const handleShift = () =>{
    const firstView = details.quantity;
    const lastView = firstView - 1;
    console.log(lastView)
    setDetails(lastView);
}
const handleStock = () =>{
     

}

    return (
        <div className=' container mt-5'>
             <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={details.picture} />
            <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <p>Price:{details.price}</p>
                <b>quantity:{details.quantity}</b>
                <p>SupplierName:{details.supplierName}</p>
                <Card.Text>
                    {details.about}
                </Card.Text>
                <Button onClick={()=>handleShift()}>Delivared</Button>
            </Card.Body>
        </Card>

        <input type="number" placeholder='quantity' required  />
        <input onClick={() =>handleStock(details._id)} type="submit" value="Stock" />

        </div>
    );
};

export default CheckDetails;