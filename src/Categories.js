import React from 'react';

const Categories = ({categories,setNewItems}) => {
  return (
    <div className="btn-container">
      {
        categories.map((category,index)=>{
          return(
            <button type="button" key={index} className="filter-btn" onClick={()=>setNewItems(category)}>{category}</button>
          )
        })
      }
    </div>
  );
};

export default Categories;