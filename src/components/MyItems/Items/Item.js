 
import { Button, Card } from 'react-bootstrap';

const Item = ({item}) => {
    // const [stocks,setStocks] = useState({});
     const { picture, name, quantity,supplierName, price, about,_id } = item;
const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `http://localhost:5000/stock/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // const remaining = stocks.filter(stock => stock._id !== id);
            // setStocks(remaining);
        })
    }
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
                <Button onClick={()=>handleDelete(_id)}>Delete</Button>
            </Card.Body>
        </Card>

    </div>
    );
};

export default Item;