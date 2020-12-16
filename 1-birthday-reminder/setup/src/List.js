import React from 'react';

const List = ({ users }) => {
  return (
    <React.Fragment>
    {
      users.map((user) => {
        const { id, name, age, image } = user;
        return (
          <div key={id} className="person">
            <img src={image} alt=""></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        )
      })
    }
    </React.Fragment>
  )
};

export default List;
