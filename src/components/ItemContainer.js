import React, { useContext } from 'react';
import ListTile from './ListTile';
import TodosContext from '../contexts/TodosContext';

const ItemContainer = () => {

  // use context
  const { itemList }   = useContext(TodosContext);

  // component
  return ( 
    <div className="items-container">
      {
          itemList.length === 0 ? 
            <div>
              <h1 style={{textAlign : "center"}}>No items...</h1>
            </div>
          :  
          itemList.map((item, index) => {
            return <ListTile key={index} itemText={item.item} itemId={item._id}/>
            }
          )
      }
    </div>
  );
    
}

export default ItemContainer;
