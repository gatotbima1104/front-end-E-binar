import React from "react";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import search from "../asset/search.png";
import owner from "../asset/owner.png";

const events = [
  {
    judul: "Seminar IT Technology",
    date: "01-01-2023",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.learn2groomdogs.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fseminar.jpg&f=1&nofb=1&ipt=2b1d01e2ef89f0d78490bb6b12652dd354d8050cec3483b81dfa7f0158b922cc&ipo=images",
    price: 1000,
  },
  {
    judul: "Seminar musik",
    date: "29 February 2021",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
    price: 1000,
  },
  {
    judul: "Seminar makanan",
    date: "29 February 2021",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
    price: 1000,
  },
  {
    judul: "Seminar game",
    date: "29 February 2021",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
    price: 1000,
  },
  {
    judul: "seminar berbuka",
    date: "29 February 2021",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
    price: 1000,
  },
  {
    judul: "Seminar vape",
    date: "29 February 2021",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
    price: 1000,
  },
  {
    judul: "Seminar vape",
    date: "29 February 2021",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
    price: 1000,
  },
  {
    judul: "Seminar vape",
    date: "29 February 2021",
    desc: "Generate Lorem Ipsum placeholder text for use in your graphic",
    Image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images",
    price: 1000,
  },
];

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
      {/* <Container>
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
              <button className="footer-btn jelajah fw-bold search-button p-1"><a href="/search"><img src={search} alt="" /></a></button>
            </Form>
          </div>
        </div>
        {events.map((event, index) => (
              <div className="col-md-6 mb-5 col-sm col-lg-3">
                <Card
                  style={{ width: "16rem", height: "auto" }}
                  className="m-5 m-auto events"
                >
                  <Card.Img variant="top" src={event.Image} />
                  <Card.Body>
                    <Card.Title className="text-white title mb-0">
                      {event.judul}
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
      </Container> */}
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
