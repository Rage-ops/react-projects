import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const FilterItems = (category) => {
    category === "all" ? setFilteredItems(items)
    :setFilteredItems(items.filter((item) => item.category === category.toLowerCase()))
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories FilterItems={FilterItems} 
        buttonCategories={categories}/>
        <Menu items={filteredItems}></Menu>
      </section>
    </main>
  )
}

export default App;
