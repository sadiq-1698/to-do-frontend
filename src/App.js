import React, {useState, useEffect } from 'react';
import ModalContainer from './components/ModalContainer';
import TodoContainer from './components/TodoContainer';
import TodosContext  from './contexts/TodosContext';
import './App.css';
import axios from 'axios';

const HOST = "https://sadiq-1698-todo.glitch.me/";

function App() {

  // use state
  const[itemList, setItemList] = useState(null);
  const[itemID, setItemID] = useState("");
  const[itemName, setItemName] = useState("");
  const[openModal, setOpenModal] = useState(false);
  const[openEditModal, setOpenEditModal] = useState(true);

  // provider values
  const providerValues = {
    itemList, setItemList, openModal, setOpenModal, openEditModal,
     setOpenEditModal, itemID, setItemID, itemName, setItemName
  }

  // use effect
  useEffect(() => {
    const fetchItems = async() => {
      const response = await axios(HOST + 'read');
      if(response){
        setItemList(response.data);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <TodosContext.Provider value={ providerValues }>
        <ModalContainer />
        <TodoContainer />
      </TodosContext.Provider>
    </>
  );
}


export default App;
