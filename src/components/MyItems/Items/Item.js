import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({item}) => {
     const { picture, name, quantity,supplierName, price, about, } = item;
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
                
            </Card.Body>
        </Card>

    </div>
    );
};

export default Item;