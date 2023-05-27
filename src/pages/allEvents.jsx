import React from "react";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import { Container, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import search from "../asset/search.png";
import owner from "../asset/owner.png";

const Allevents = () => {
  const [events, setEvents] = useState([]);

  const fetchDataEvents = async () => {
    try {
      const eventResponse = await axiosInstance.get("/event");
      console.log(eventResponse.data);
      setEvents(eventResponse.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataEvents();
  });

  return (
    <div>
      <Menu />
      <Container>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <h2 className="my-5 newst fs-3 pt-3">Webinar list :</h2>
          </div>
          <div className="col-md-6 text-end">
            <Form class="search-form">
              <input
                type="text"
                placeholder="Search. . . ."
                className="footer-form search-input"
              />
              <button className="footer-btn jelajah fw-bold search-button p-1">
                <a href="/search">
                  <img src={search} alt="" />
                </a>
              </button>
            </Form>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-items-center pt-5">
            {events.map((event) => (
              <div className="col-md-6 mb-5 col-sm col-lg-3">
                  <Card
                    style={{ width: "16rem", height: "auto" }}
                    className="m-5 m-auto events"
                  >
                    <Card.Img variant="top" src={event.image} />
                    <Card.Body>
                    <Link to={`/event/${event.id}`}>
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
                              <img src={owner} alt="author icon" />
                            </div>
                            <div className="col-md-8 text-white author-loc align-items-center">
                              <p className="">Jayapura</p>
                            </div>
                          </div>
                        </div>
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

// const CardProduct = (props) => {
//   return (
//     <Card className="p-3 m-auto events d-flex justify-items-center align-items-center h-100">
//       <Card.Img
//         variant="top"
//         src={props.image}
//         className="border"
//         style={{ width: "100%" }}
//       />
//       <Card.Body>
//         <Card.Title className="border">{props.title}</Card.Title>
//         <Card.Text className="border deskripsi">{props.description}</Card.Text>
//         <div className="text-center my-4">
//           <Button variant="dark" className="shining-button" type="submit">
//             read more
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

export default Allevents;
