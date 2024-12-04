import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Appointments from "./Pages/Appointments";
import MyAppointments from "./Pages/MyAppointments";
import Doctors from "./Pages/Doctors";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:Specialty" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointments />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
