import React from 'react'
import { useEffect, useState } from 'react';
import { axiosInstance } from '../lib/axios';
import { useParams,Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';


const DetailPage = () => {
  const { id } = useParams(); 
  const [event, setEvent] = useState();
    const fetchDataEvent = async () => {
        try {
            const eventResponse = await axiosInstance.get("/event/" + id);
            // console.log(eventResponse.data);
            setEvent(eventResponse.data);
        } catch (error) {}

    };
    useEffect(() => {
        fetchDataEvent();
    });

  return (
    <div>   
       { event ? 
       <div>
        <Container className='mt-5 border d-flex align-items-center'>
        <Row>
            <div className="col-md-8 border">
            <img src={event.image} alt="foto_event" />  
            </div>
            <div className="col-md-2 border">
                <p>{event.title}</p>
                <p>{event.price}</p>
                <p>{event.date}</p>
            </div>
        </Row>

        <Link to="/events">go back</Link>
        </Container>
        </div> : null}
    </div>
  );
}


export default DetailPage
