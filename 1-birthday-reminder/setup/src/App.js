import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users, setUsers] = useState(data);
  
  return <main>
  <div className="container">
    <h3>{users.length} birthdays today</h3>
    <List users = {users}/>
    <button className="btn" onClick={() => setUsers([])}>Clear all</button>
  </div>
  </main>
}

export default App;
