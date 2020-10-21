import React, {useState, useEffect } from 'react';
import ModalContainer from './components/ModalContainer';
import TodoContainer from './components/TodoContainer';
import TodosContext  from './contexts/TodosContext';
import './App.css';
import axios from 'axios';

const HOST = "https://sadiq-1698-todo.glitch.me/";

function App() {


  const[itemList, setItemList] = useState([]);
  
  // const updateItem = (id) => {
  //   axios.put(HOST + 'update', {
  //     id : id,
  //     item : editItem
  //   })
  //   .then((response) => {
  //     setEditModalOpen(false);
  //     const currentItemIndex = itemList.findIndex(item => item._id === id);
  //     const tempItemList = [...itemList];
  //     tempItemList[currentItemIndex] = { ...tempItemList[currentItemIndex], item: editItem };
  //     setItemList([...tempItemList]);
  //   }, (error) => {
  //   });
  // }

  // const deleteItem = (id) => {
  //   axios.delete(HOST + `delete/${id}`)
  //   .then((response) => {
  //     setDeleteModalOpen(false);
  //     setItemList(itemList.filter(item => item._id !== id))
  //   }, (error) => {
  //     console.log(error);
  //   });;
  // }

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
      <TodosContext.Provider value={{itemList, setItemList}}>
        <ModalContainer />
        <TodoContainer />
      </TodosContext.Provider>
    </>
  );
}


export default App;
