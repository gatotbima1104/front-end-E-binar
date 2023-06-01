import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/homepage';
import Login from './features/login';
import Register from './features/register';
import Allevents from "./pages/allEvents";
import DetailPage from "./pages/detailPage";
import InsertEvent from "./pages/insertEvent";
import Calender from "./pages/calendar";



function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/events" element={<Allevents />} />
         <Route path="/event/:id" element={<DetailPage />} />
         <Route path="/addEvent" element={<InsertEvent />} />
         <Route path="/calendar" element={<Calender />} />
        </Routes>
      </Router>
  );
}

export default App;
