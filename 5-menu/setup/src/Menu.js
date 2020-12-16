import React from 'react';

const Menu = ({ items }) => {
  return(
    <div className="section-center">
    {
      items.map((dish) => {
        const {id, title, img, price, desc} = dish;
        return <div key={id} className="menu-item">
          <img className="photo" src={img} alt={title}></img>
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">{price}</h4>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </div>
      })
    }
    </div>
  );
};

export default Menu;
