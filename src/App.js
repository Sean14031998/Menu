import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//get unique categories
const allCategories =["all",...new Set(items.map((item)=>item.category))];

function App() {
  const [menu,setMenu] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  const setNewItems = (category)=>{
    if(category === "all"){
      setMenu(items);
    }else{
      const newItems = items.filter((item)=>item.category === category);
      setMenu(newItems); 
    }
  }
  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h3>Our Menu</h3>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} setNewItems={setNewItems} />
        <Menu items={menu} />
      </section>
    </main>
  ) ;
}

export default App;
