import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import author from '../assets/author.png'
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";

import owner from "../asset/owner.png";

// const events = [
//   {
//     judul: "Seminar IT Technology",
//     date: "01-01-2023",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.learn2groomdogs.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fseminar.jpg&f=1&nofb=1&ipt=2b1d01e2ef89f0d78490bb6b12652dd354d8050cec3483b81dfa7f0158b922cc&ipo=images",
//     price: 1000,
//   },
//   {
//     judul: "Seminar musik",
//     date: "29 February 2021",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
//     price: 1000,
//   },
//   {
//     judul: "Seminar makanan",
//     date: "29 February 2021",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
//     price: 1000,
//   },
//   {
//     judul: "Seminar game",
//     date: "29 February 2021",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
//     price: 1000,
//   },
//   {
//     judul: "seminar berbuka",
//     date: "29 February 2021",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
//     price: 1000,
//   },
//   {
//     judul: "Seminar vape",
//     date: "29 February 2021",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
//     price: 1000,
//   },
//   {
//     judul: "Seminar vape",
//     date: "29 February 2021",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
//     price: 1000,
//   },
//   {
//     judul: "Seminar vape",
//     date: "29 February 2021",
//     desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
//     Image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
//     price: 1000,
//   },
// ];


// const sortedEvents = events.sort((a, b) => {
//   const dateA = new Date(a.date);
//   const dateB = new Date(b.date);
//   return dateB - dateA; // sort in descending order (newest first)
// });

const Events = () => {

  const [events, setEvents] = useState([]);

  const fetchDataEvents = async () => {
    try {
      const eventResponse = await axiosInstance.get("/event");
      const sortedEvents = eventResponse.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort events by date in descending order
      const maxEvents = sortedEvents.slice(0, 8); // Retrieve the maximum of 8 events
      // console.log(maxEvents);
      setEvents(maxEvents);
    } catch (error) {
      // Handle error
    }
  };
  
  useEffect(() => {
    fetchDataEvents();
  }, []);

  return (
    <div id="events" className="border">
      <Container>
        <h2 className="my-5 newst fs-3 pt-3">Newest</h2>
        <div className="d-flex justify-items-center align-items-center">
          <div className="row d-flex justify-items-center">
            {events.map((event, index) => (
              <div className="col-md-6 mb-5 col-sm col-lg-3">
                <Card
                  style={{ width: "16rem", height: "auto" }}
                  className="m-5 m-auto events"
                >
                  <Card.Img variant="top" src={event.image} />
                  <Card.Body>
                    <Card.Title className="text-white title mb-0">
                      {event.title}
                    </Card.Title>
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
            <div className="text-center my-4">
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

export default Events;
