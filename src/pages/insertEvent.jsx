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
  });//[event, setEvent
  const handleInput = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    axiosInstance.post("/event", event)
    .then((res) => {
        console.log(res);
        }
    )
    .catch((err) => {
        console.log(err);
    }
    );
  }


  return (
    <div>
      <div className="container">
        <div className="col-md-6">
          <h1>Insert Event</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" name="title" onChange={handleInput}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>description</Form.Label>
              <Form.Control type="text" placeholder="Enter title" name="description" onChange={handleInput}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>price</Form.Label>
              <Form.Control type="int" placeholder="Enter title" name="price" onChange={handleInput}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>image</Form.Label>
              <Form.Control type="text" placeholder="Enter title" name="image" onChange={handleInput}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>date</Form.Label>
              <Form.Control type="text" placeholder="Enter title" name="date" onChange={handleInput}/>
            </Form.Group>

            <button className="btn btn-primary">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InsertEvent;
