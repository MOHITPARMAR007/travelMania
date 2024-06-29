import React from "react";
import "./Home.css";
import Card from "../card/Card";
import backgroundgif from "./video-1.mp4";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <div>
        <div className="display-container">
          <div className="home-container">
            <video src={backgroundgif} autoPlay loop muted></video>
            <div>
              <h1 style={{ fontSize: "45px", color: "white" }}>
                Connect with fellow travelers
              </h1>
              <span style={{ fontSize: "32px", color: "white" }}>
                Share your travel plans and join others on their adventures.
              </span>
            </div>
          </div>

          <div className="card-container">
            <Card
              className="card"
              imageSrc={
                "https://live.staticflickr.com/65535/49874518181_493698d81c_w.jpg"
              }
              heading={"Post your trip"}
              description={
                "Let others join you on your adventure. Share your itinerary and travel plans."
              }
              action={"Post now"}
              path={"/groupTripForm"}
            />
            <Card
              className="card"
              imageSrc={
                "https://i.pinimg.com/originals/a8/ed/e7/a8ede7fa754f27f2c71d08f655b98d3c.jpg"
              }
              heading={"Join a trip"}
              description={
                "Find fellow travelers and connect with them. Join them on their journey."
              }
              action={"Get started"}
              path={""}
            />
            <Card
              className="card"
              imageSrc={
                "https://previews.123rf.com/images/nikey62/nikey621608/nikey62160800332/62032070-people-on-the-vertical-carousel-amusement-and-extreme-rides-for-teenagers-and-adults.jpg"
              }
              heading={"Rent a guide"}
              description={
                "Book a local guide for your trip. Experience the city like a local."
              }
              action={"Rent now"}
            />
          </div>
        </div>
    </div>
  );
}

export default Home;
