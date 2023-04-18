import React from "react";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import { Container, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";

const Allevents = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    // console.log(products);
  };

  useEffect(() => {
    getDataProducts();
  });
  return (
    <div>
      <Menu />
      {/* <Find /> */}
      <Container>
        <div className="container d-flex justify-items-center align-items-center mt-5">
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-md-6 mb-5 col-sm col-lg-4">
                  <CardProduct
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    desc={product.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

const CardProduct = (props) => {
  return (
    <Card className="p-3 m-auto events d-flex justify-items-center align-items-center h-100">
      <Card.Img
        variant="top"
        src={props.image}
        className="border"
        style={{ width: "100%" }}
      />
      <Card.Body>
        <Card.Title className="border">{props.title}</Card.Title>
        <Card.Text className="border deskripsi">{props.desc}</Card.Text>
        {/* <time className="border">{props.date}</time> */}
        <div className="text-center my-4">
          <Button variant="dark" className="shining-button" type="submit">
            read more
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Allevents;
