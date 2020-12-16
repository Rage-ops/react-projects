import React from 'react';

const Categories = ({FilterItems, buttonCategories}) => {
  return <div className="btn-container">
    {
      buttonCategories.map((category,index) => {
        return <button key={index} className="filter-btn" 
        onClick={() => FilterItems(category)}>
          {category}
        </button>
      })
    }
  </div>;
};

export default Categories;
