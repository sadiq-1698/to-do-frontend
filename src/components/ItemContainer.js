import React, { useContext } from 'react';
import ListTile from './ListTile';
import TodosContext from '../contexts/TodosContext';


const ItemContainer = (props) => {

  // use context
  const {itemList}   = useContext(TodosContext);

  // component
  return ( 
    <div className="items-container">
      {
          itemList.length === 0 ? 
            <div>
              <h1 style={{textAlign : "center"}}>Loading...</h1>
            </div>
          :  
          itemList.map((item, index) => {
            console.log(index);
            return <ListTile key={index}             
              itemText={item.item}
              onClickEdit={props.onClickEdit}
              onClickDelete={props.onClickDelete}>
            </ListTile>
          }
            
        )
      }
    </div>
  );
    
}

export default ItemContainer;
