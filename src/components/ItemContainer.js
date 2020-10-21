import React, { useContext } from 'react';
import ListTile from './ListTile';
import DisplayText from './DisplayText';
import TodosContext from '../contexts/TodosContext';

const ItemContainer = () => {

  // use context
  const { itemList }   = useContext(TodosContext);

  // component
  return ( 
    <div className="items-container">
       {
          !itemList ? 
            <DisplayText text="Loading" />
          : 
          itemList.length === 0
          ? 
            <DisplayText text="No items" /> 
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
