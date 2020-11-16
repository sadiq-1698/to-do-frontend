import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ModalContainer from './components/ModalContainer';
import Routes from './routes/Routes';
import TodosContext  from './contexts/TodosContext';
import './App.css';
import axios from 'axios';
import AuthContext from './contexts/AuthContext';
import { LOGGED_IN, HOST } from './constants/constants';

function App() {

  // use state
  const[itemList, setItemList] = useState(null);
  const[itemID, setItemID] = useState("");
  const[itemName, setItemName] = useState("");
  const[openModal, setOpenModal] = useState(false);
  const[openEditModal, setOpenEditModal] = useState(true);
  const[isAuth, setIsAuth] = useState(localStorage.getItem(LOGGED_IN) === "true");

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
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <TodosContext.Provider value={ providerValues }>
          <ModalContainer />
          <Header />
          <Routes />
        </TodosContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
