import React, {useState, useEffect } from 'react';
import ModalContainer from './components/ModalContainer';
import TodoContainer from './components/TodoContainer';
import TodosContext  from './contexts/TodosContext';
import './App.css';
import axios from 'axios';

// const HOST = "https://sadiq-1698-todo.glitch.me/";
const HOST ="http://localhost:3001/";

function App() {

  // use state
  const[itemList, setItemList] = useState([]);
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

  console.log(itemList);

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
