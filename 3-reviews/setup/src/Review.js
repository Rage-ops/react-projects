import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [person, setPerson] = useState(0);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  return <section className="container">
    <div className="title">
      <h2>Our Reviews</h2>
      <div className="underline"></div>
    </div>
    <div className="review">
      <div className="img-container">
        <img src={people[person].image} alt={people[person].name} className="person-img"></img>
        <div className="quote-icon"><FaQuoteRight/></div>
      </div>
      <h4 className="author">{people[person].name}</h4>
      <div className="job">{people[person].job}</div>
      <p className="info">{people[person].text}</p>
      <div>
        <button onClick={() => person - 1 >= 0 ? setPerson(person - 1) : setPerson(people.length - 1)} className="prev-btn"><FaChevronLeft/></button>
        <button onClick={() => person + 1 <= people.length - 1 ? setPerson(person + 1) : setPerson(0)} className="next-btn"><FaChevronRight/></button>
      </div>
      <button className="random-btn" onClick={() => setPerson(getRandomIntInclusive(0, people.length - 1))}>Surprise Me</button>
    </div>
  </section>
};

export default Review;
