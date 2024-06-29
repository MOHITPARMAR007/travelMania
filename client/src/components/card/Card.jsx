import React from 'react';
import './Card.css'; // You can style your card in a separate CSS file
import { Link } from 'react-router-dom';

const Card = ({ imageSrc, heading, description, action, path }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Card" style={{height:'400px'}} />
      <div className="card-content">
        <h2 className="card-heading" >{heading}</h2>
        <p className="card-description" >{description}</p>
        <Link to={path} className='action'>{action}</Link>
      </div>
    </div>
  );
};

export default Card;
