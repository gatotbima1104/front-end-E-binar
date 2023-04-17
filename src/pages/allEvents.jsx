import React from "react";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import { Container, Card, Button } from "react-bootstrap";
import { useState, useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const Allevents = () => {
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


const CardProduct = (props) => {
  return (
    <div>
      <Menu />
      {/* <Find /> */}
      <Container>
        <div className="container d-flex justify-items-center align-items-center mt-5">
          <div className="row d-flex justify-items-center">
            {events.map((event, index) => (
              <div className="col-md-6 mb-5 col-sm col-lg-4">
                <Card style={{ width: "18rem" }} className="m-5 m-auto events">
                  <Card.Img variant="top" src={event.Image} />
                  <Card.Body>
                    <Card.Title>{event.judul}</Card.Title>
                    <Card.Text className="border">{event.desc}</Card.Text>
                    <time className="border">{event.date}</time>
                    <div className="text-center my-4">
                      <Button
                        variant="dark"
                        className="shining-button"
                        type="submit"
                      >
                        read more
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>            
      <Footer />
    </div>
  );
};

export default Allevents;
