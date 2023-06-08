import React from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BsCalendarDate, BsClock } from "react-icons/bs";
import { BiMap, BiLeftArrowAlt } from "react-icons/bi";
import owner from "../asset/owner.png";
import Menu from "../components/navigasiBar";
import Footer from "../components/footer";
import Rekomendasi from "../components/rekomendasi";

const DetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const fetchDataEvent = async () => {
    try {
      const eventResponse = await axiosInstance.get("/api/event/" + id);
      setEvent(eventResponse.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchDataEvent();
  });

  const handleClick = () => {
    window.open(event.link_registration, "_blank");
  };

  return (
    <div>
      {event ? (
        <div>
          <Menu />
          <div className="container-fluid mt-3">
            <button className="btn-back">
              <Link to="/events" className="text-white backto">
                <BiLeftArrowAlt className="me-2 fs-4" />
              </Link>
            </button>
          </div>
          <Container className="mt-3">
            <div className="row d-flex">
              <div className="col-lg-8 me-5">
                <img
                  src={event.img}
                  alt="foto_event"
                  className="w-100 h-80 rounded mb-5"
                  style={{ objectFit: "cover", height: "480px" }}
                />
              </div>

              <div className="col-lg-3 border h-50 mt-5 p-4 sidebar rounded">
                <div className="row">
                  <h3 className="name-event">{event.title}</h3>
                </div>
                <div className="row d-flex">
                  <div className="d-inline my-1">
                    <div className="text-start ">
                      <BsCalendarDate className="me-2" />
                      <p className="d-inline">{event.start_registration} - </p>
                      <p className="d-inline">{event.end_registration}</p>
                    </div>
                    <div className="col-8"></div>
                  </div>

                  <div className="d-inline my-1">
                    <div className="text-start">
                      <BsClock className="me-2" />
                      <p className="d-inline">{event.time}</p>
                    </div>
                  </div>
                  <div className="d-inline my-1 mb-4">
                    <div className="text-start">
                      <BiMap className="me-2" />
                      <p className="d-inline">{event.location}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center my-3">
                  <button onClick={handleClick} className="btn">
                    Kunjungi situs
                  </button>
                </div>

                <div className="row d-flex mt-5 border-top pt-3">
                  <div className="col-md-2">
                    <img src={owner} alt="author icon" />
                  </div>
                  <div className="col-md-8">
                    <p>Jayapura</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container sidebar my-5 p-5 rounded">
              <h3 className="mb-3">Deskripsi</h3>
              <p className="deskripsi">{event.desc}</p>
            </div>

            <div className="container my-4 p-2">
              <h3 className="mb-5">Rekomendasi</h3>

              <Rekomendasi />
            </div>
          </Container>

          <Footer />
        </div>
      ) : null}
    </div>
  );
};

export default DetailPage;
