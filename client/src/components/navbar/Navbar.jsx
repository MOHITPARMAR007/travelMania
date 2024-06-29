import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios"

function Navbar() {

  const handleEmergency = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:5000/emergency", { user })
        .then((res) => {
            console.log(res);
        
        })
        .catch((err) => console.log(err));
};

  const user = useSelector((state) => state.user);
 
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to="/" className={`${styles.logo}`}>
            Travel Thrive{" "}
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
            
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
           
              {!user ? 
                <div>
                  <Link to="/login" className={`${styles.navLink}`}>
                Login 
              </Link>
              <span> / </span>
              <Link to="/register" className={`${styles.navLink}`}>
                Signup
              </Link>
                </div> : 
                <button onClick={handleEmergency} className="emgbtn" type="button">EMERGENCY</button>
              }
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
