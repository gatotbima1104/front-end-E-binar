import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import blank from "../asset/blank-profile.jpg";


const Rekomendasi = () => {
  const [events, setEvents] = useState([]);
  const fetchDataEvents = async () => {
    try {
      const eventResponse = await axiosInstance.get("/api/event");
      const maxEvents = eventResponse.data.slice(0, 4); 
      setEvents(maxEvents);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchDataEvents();
  }, []);

  return (
    <div>
      <Container>
        <div className="d-flex justify-items-center align-items-center">
          <div className="row d-flex justify-items-center">
            {events.map((event, index) => (
              <div className="col-md-6 mb-5 col-sm col-lg-3">
                <Card
                  style={{ width: "16rem", height: "auto" }}
                  className="m-5 m-auto events"
                >
                  <Card.Img variant="top" src={event.img} 
                  style={{ objectFit: "cover", height: "150px" }}
                  />
                  <Card.Body>
                  <Link to={`/event/${event.id_event}`} className="backto">
                      <Card.Title className="text-white title mb-0">
                        {event.title}
                      </Card.Title>
                      </Link>
                    <p className="date">
                      <time className="text-white">{event.date}</time>
                    </p>
                    <h5 className="text-white card-price">Rp{event.price}k</h5>
                    <div className="row pt-2 line">
                      <div className="col-md-6">
                        <div className="row d-flex mt-1">
                          <div className="col-md-4">
                            <img src={blank} alt="author icon" />
                          </div>
                          <div className="col-md-8 text-white author-loc align-items-center">
                            <p>{event.User.username}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
            <div className="text-end my-4">
              <Link to="/events">
                <Button variant="dark" className="jelajah" type="submit">
                  Jelajah Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Rekomendasi;
