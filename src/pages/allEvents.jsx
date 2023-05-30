import React from "react";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import { Container, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
// import search from "../asset/search.png";
import owner from "../asset/owner.png";
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";

const Allevents = () => {
  const [events, setEvents] = useState([]);
  const [record, setRecord] = useState([]);
  // const [pageNumber, setPageNumber] = useState(0);

  // const eventsPerPage = 8;
  // const pagesVisited = pageNumber * eventsPerPage;
  // const pageCount = Math.ceil(record.length / eventsPerPage);

  const handlePageClick = (data) => {
      console.log(data.selected);
  }
  

  const fetchDataEvents = async () => {
    try {
      const eventResponse = await axiosInstance.get("/event");
      // console.log(eventResponse.data);
      setEvents(eventResponse.data);
      setRecord(eventResponse.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataEvents();
  }, [])

  const Filter = (e) => {
    // setRecord(events.filter(f => f.title.toLowerCase().includes(e.target.value))) // filter by title
    setRecord(events.filter(f => {
      const lowerCaseTitle = f.title.toLowerCase();
      const lowerCaseInput = e.target.value.toLowerCase();
      const isTitleMatch = lowerCaseTitle.includes(lowerCaseInput);
      const isDateMatch = f.date.toLowerCase().includes(lowerCaseInput); // Assuming 'date' is a property in the 'events' array
      const isPriceMatch = f.price.toString().includes(lowerCaseInput); // Assuming 'price' is a number property in the 'events' array
      
      return isTitleMatch || isDateMatch || isPriceMatch;
    }));
    
  }

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
                onChange={Filter}
              />
              {/* <button className="footer-btn jelajah fw-bold search-button p-1">
                <a href="/search">
                  <img src={search} alt="" />
                </a>
              </button> */}
            </Form>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-items-center pt-5">
            {record.map((event) => (
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
          
      <Pagination >
        
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        {/* <Pagination.Item active>{12}</Pagination.Item> */}        
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        
      </Pagination>

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
