import React from "react";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import { Container, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";

const Allevents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const eventResponse = await axiosInstance.get("/event");
      console.log(eventResponse.data);
      setEvents(eventResponse.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchEvents();
  });

  return (
    <div>
      <Menu />
      {/* <Find /> */}
      <Container>
        <div className="container d-flex justify-items-center align-items-center mt-5">
          <div className="row">
            {events.map((event) => {
              return (
                <div className="col-md-6 mb-5 col-sm col-lg-4">
                  <CardProduct
                    key={event.id}
                    title={event.title}
                    price={event.price}
                    image={event.image}
                    description={event.description}
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
        <Card.Text className="border deskripsi">{props.description}</Card.Text>
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
