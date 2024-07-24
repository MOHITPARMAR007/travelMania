import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Navbar() {
  const user = useSelector((state) => state.user);
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const handleEmergency = (e) => {
    e.preventDefault();
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
  
          const requestData = {
            user: {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              picture: user.picture,
            },
            location: locationData,
          };
  
          axios
            .post("http://localhost:5000/emergency", requestData)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to="/" className={`${styles.logo}`}>
            Travel Thrive
          </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact" className={`${styles.navLink}`}>
                Contact
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/EarnWithUS" className={`${styles.navLink}`}>
                Earn With Us
              </Link>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            {!user ? (
              <div>
                <Link to="/login" className={`${styles.navLink}`}>
                  Login
                </Link>
                <span> / </span>
                <Link to="/register" className={`${styles.navLink}`}>
                  Signup
                </Link>
              </div>
            ) : (
              <button onClick={handleEmergency} className="emgbtn" type="button">
                EMERGENCY
              </button>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
