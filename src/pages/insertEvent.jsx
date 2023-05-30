import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const InsertEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "price" ? parseInt(value) : value;
    setEvent({ ...event, [name]: parsedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/event", JSON.stringify(event), {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      // Do something with the response, e.g., display a success message
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display an error message
    }
  };


  return (
    <div>
      <div className="container">
        <div className="col-md-6">
          <h1>Insert Event</h1>
          <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={event.title} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={event.description} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={event.price} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" value={event.image} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" name="date" value={event.date} onChange={handleInputChange} />
        </Form.Group>

        <button type="submit mt-5">Submit</button>
      </Form>
        </div>
      </div>
    </div>
  );
};

export default InsertEvent;
