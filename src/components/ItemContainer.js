import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ListTile from './ListTile';
import DisplayText from './DisplayText';
import TodosContext from '../contexts/TodosContext';
import { HOST, GET_ACCESS_TOKEN } from '../constants/constants';

const ItemContainer = () => {

  // use context
  const { itemList, setItemList }   = useContext(TodosContext);

  // use effect
  useEffect(() => {
    const fetchItems = async() => {
      const response = await axios(
        HOST + 'read',
        { 
          headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + GET_ACCESS_TOKEN
          }
        });
      if(response){
        setItemList(response.data);
      }
    };
    fetchItems();
  }, [setItemList]);

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
