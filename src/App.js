import React, { useState } from 'react';
import Header from './components/Header';
import ModalContainer from './components/ModalContainer';
import Routes from './routes/Routes';
import TodosContext  from './contexts/TodosContext';
import './App.css';

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

  return (
    <>
        <TodosContext.Provider value={ providerValues }>
          <ModalContainer />
          <Header />
          <Routes />
        </TodosContext.Provider>
    </>
  );
}

export default App;
