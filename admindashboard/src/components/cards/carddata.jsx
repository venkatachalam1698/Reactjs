// CardData.jsx


import React from 'react';
// import './carddata.css'; 
import './carddata.css'

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

const CardData = () => {
  return (
    <div className="cardscontainer">
      <div className='firstcard'>
        <Card title="sales" value="$5000" />
      </div>
      <div className='secondcard'>
        <Card title="Revenue" value="$10000" />
      </div>
      <div className='thirdcard'>
        <Card title="Lead" value="2000" />
      </div>
    </div>
  );
};

export default CardData;
