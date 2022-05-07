import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Stock = ({ stock }) => {
    const { picture, name, quantity,supplierName, price, about, _id } = stock;

    const navigate = useNavigate();
    const handleCheckDetails = (id) => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price:{price}</p>
                    <p>quantity:{quantity}</p>
                    <p>SupplierName:{supplierName}</p>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button onClick={() => handleCheckDetails(_id)} className='w-100' variant="primary">Update</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Stock;