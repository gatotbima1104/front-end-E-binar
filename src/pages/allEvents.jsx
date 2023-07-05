import React from "react";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import { Container, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import blank from "../asset/owner.png";
import ReactPaginate from "react-paginate";

const Allevents = () => {
  const [events, setEvents] = useState([]);
  const [record, setRecord] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(8);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  
  const lastPostIndex = (currentPage + 1) * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = record.slice(firstPostIndex, lastPostIndex);  

  const fetchDataEvents = async () => {
    try {
      const eventResponse = await axiosInstance.get("/api/event");
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
      const isDateMatch = f.date.toLowerCase().includes(lowerCaseInput);
      const isPriceMatch = f.price.toString().includes(lowerCaseInput); 
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
            {currentPosts.map((event) => (
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
                      <h5 className="text-white card-price">Rp{event.price}</h5>
                      <div className="row pt-2 line">
                        <div className="col-md-6">
                          <div className="row d-flex mt-1">
                            <div className="col-md-4">
                              <img src={blank} alt="author icon" />
                            </div>
                            <div className="col-md-8 text-white author-loc align-items-center">
                              <p className="">{event.User.username}</p>
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
        
        <div className="pagination">
          <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(record.length / postsPerPage)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination-container"}
          activeClassName={"active"}
          />
        </div>


      </Container>
      <Footer />
    </div>
  );
};


export default Allevents;
