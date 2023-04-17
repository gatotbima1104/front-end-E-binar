// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/hompage';
import Login from './pages/login';
import Register from './pages/register';
import Allevents from "./pages/allEvents";
// import EventDetails from "./components/eventDetails";


function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/events" element={<Allevents />} />
         {/* <Route path="/event/:id" element={<EventDetails />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
