import "./App.css";

import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import RegisterForm from "./components/Form/Register/RegisterForm.jsx";
import LoginForm from "./components/Form/Login/LoginForm.jsx";
import GroupTripForm from "../src/components/Form/GroupTripFrom.jsx"

import AboutUs from "../src/components/AboutUs.jsx";
import Home from "./components/home/Home.jsx";
import Emergency from "./components/Emergency.jsx";
import ContactForm from "./components/ContactUs.jsx";
import JoinTrip from "./components/JoinTrip.jsx";
import RenterProfile from "./components/RenterProfiles/RentTourGuideForm.jsx";
import RentTourGuideForm from "./components/RenterProfiles/RentTourGuideForm.jsx";
import TourGuideList from "./components/RenterProfiles/TourGuideList.jsx";
import { useSelector } from "react-redux";


function Protected({ children }) {
  const user = useSelector((state) => state.user);
  if (user?.length == 0 || user == null || user == undefined) {
    return <Navigate to='/login' />;
  }
  return children;
}
function Template() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Protected><Template /></Protected>} >

          <Route index element={<Home />} />
          <Route path='contact' element={<ContactForm />} />
          <Route path="register" element={<RegisterForm />} />
          
          <Route path="about" element={<AboutUs />} />
          <Route path="EarnWithUS" element={<RentTourGuideForm />} />
          <Route path="groupTripForm" element={<GroupTripForm />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="grouptrips" element={<JoinTrip />} />
          <Route path="TourGuideList" element={<TourGuideList />} />
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
