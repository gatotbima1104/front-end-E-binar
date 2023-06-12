import React, { useEffect, useState } from "react";
import moment from "moment";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { axiosInstance } from "../lib/axios";
import NavigasiBar from "../components/navigasiBar";

const Calender = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("api/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  // Format the API data to FullCalendar event format
  const formatEventsForCalendar = () => {
    return events.map((event) => ({
      id: event.id_event,
      title: event.title,
      start: moment(event.date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      // Other event properties if needed
    }));
  };

  return (
    <div className="calendar">
      <NavigasiBar />
      <div className="container mt-5">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={formatEventsForCalendar()}
          contentHeight="auto"
          contentWidth="auto"
          eventClick={(info) => {
            const eventId = info.event.id;
            window.location.href = `/event/${eventId}`;
          }}
        />
      </div>
    </div>
  );
};

export default Calender;
