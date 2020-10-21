import React, {useState, useEffect } from 'react';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import ItemContainer from './components/ItemContainer';
import ModalContainer from './components/ModalContainer';
import TodosContext  from './contexts/TodosContext';
import './App.css';
import axios from 'axios';

const HOST = "https://sadiq-1698-todo.glitch.me/";

function App() {

  const[showModalContainer, setShowModalContainer] = useState(false);
  const[showEditModal, setShowEditModal] = useState(false);
  const[showDeleteModal, setShowDeleteModal] = useState(false);
  const[itemList, setItemList] = useState([]);


  // const[editItem, setEditItem] = useState("");
  // const[editModalOpen, setEditModalOpen] = useState(false);
  // const[deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const[itemID, setItemID] = useState("");
  


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

  const onClickEditButton = () => {
    setShowModalContainer(true);
    setShowEditModal(true);
    setShowDeleteModal(false);
  }

  const onClickDeleteButton = () => {
    setShowModalContainer(true);
    setShowDeleteModal(true);    
    setShowEditModal(false);
  }

  const onClickModalButtons = () => {
    setShowModalContainer(false);
    setShowDeleteModal(false);    
    setShowEditModal(false);
  }

  return (
    <>
      <TodosContext.Provider value={{itemList, setItemList}}>
        <ModalContainer 
          showModalContainer={showModalContainer}
          showEditModal={showEditModal}
          showDeleteModal={showDeleteModal}
          clickModalButtons={onClickModalButtons}
        />

        <div className="wrapper">

          <Header />

          <InputContainer />

          <ItemContainer 
            listOfItems={itemList}
            onClickEdit={onClickEditButton}
            onClickDelete={onClickDeleteButton}
          />

        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
