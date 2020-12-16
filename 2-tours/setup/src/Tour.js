import React, { useState } from 'react';

const Tour = (props) => {

  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name}></img>
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">${props.price}</h4>
        </div>
        {
          readMore ? <p>{props.info}<button onClick={() => setReadMore(false)}>Show Less</button></p> : <p>{props.info.slice(0, 200) + "..."}<button onClick={() => setReadMore(true)}>Read More</button></p>
        }
        <button className="delete-btn" onClick={() => props.removeTour(props.id)}> Not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
