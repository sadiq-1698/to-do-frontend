import React, { useState, useContext, useRef } from 'react';
import TodosContext from '../contexts/TodosContext';
import axios from 'axios';
import { HOST, ACCESS_TOKEN } from '../constants/constants';

const InputContainer = () => {

  // use context
  const {itemList, setItemList} = useContext(TodosContext); 

  // use state
  const[item, setItem] = useState("");

  // use ref
  const inputElement = useRef(null);

  // scope variables
  let tempArray = [];

  // helper functions
  const focusAndClear = () => {
    inputElement.current.focus();
    inputElement.current.value = "";
  }

  const createNewItem = () => {
    axios.post(HOST + 'insert', {item : item},{ 
      headers: {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN)
      }
    })
    .then((response) => {
      tempArray = itemList;
      setItemList([response.data, ...tempArray]);
      focusAndClear();
    }, (error) => {
      console.log(error);
    });
  }
  
  // component
  return (
      <div className="input-container">
        <input 
          type="text" 
          className="input-field" 
          placeholder="Add a new item..."
          onChange={(event) => {setItem(event.target.value)}}
          ref={inputElement}
        />
        <button className="add btn" onClick={createNewItem}>Add</button>
      </div>
  );
}

export default InputContainer;
