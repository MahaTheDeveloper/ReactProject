import React from 'react';
import people from '../../assets/people.png';
import kratos from '../../assets/kratos.png';
import './header.css';

const Header = () => (
  <div className="inferno__header section__padding" id="home">
    <div className="inferno__header-content">
      <h1 className="gradient__text">Fueling Gaming Passion: Where Worlds Come Alive!</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="inferno__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="inferno__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="inferno__header-image">
      <img src={kratos} />
    </div>
  </div>
);

export default Header;