import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    console.log(products);
  }

  useEffect(() => {
    getDataProducts();
  })
  return (
      <div className="container">
        <div className="row">
          <h1 className='mt-5'>Fetching api</h1>
          { products.map((product) => {
            return(
              <div className="col-4 p-3 h-100">
                <CardProduct 
                key={product.id} 
                title={product.title} 
                price={product.price} 
                image={product.image}
                desc={product.description}
                />
              </div> ) 
            })
          }
      </div>
    </div>
  )
}


function CardProduct(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Products
