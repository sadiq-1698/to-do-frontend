import React from 'react';
import './App.css';
// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const HOST = "https://sadiq-1698-todo.glitch.me/";

function App() {

  // const[item, setItem] = useState("");
  // const[editItem, setEditItem] = useState("");
  // const[itemList, setItemList] = useState([]);
  // const[editModalOpen, setEditModalOpen] = useState(false);
  // const[deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const[itemID, setItemID] = useState("");
  
  // const createNewItem = () => {
  //   axios.post(HOST + 'insert', {
  //     item : item
  //   })
  //   .then((response) => {
  //     setItem("");
  //     setItemList([response.data, ...itemList])
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

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

  // // use effect
  // useEffect(() => {
  //   const fetchItems = async() => {
  //     const response = await axios(HOST + 'read');
  //     if(response){
  //       setItemList(response.data);
  //     }
  //   };
  //   fetchItems();
  // }, []);

  // const onClickDelete = (id) => {
  //   setDeleteModalOpen(true);
  //   setItemID(id);
  // }

  // const onClickEdit = (id, name) => {
  //   setEditModalOpen(true);
  //   setItemID(id);
  // }


  return (
    <>
      <ModalContainer />

      <div className="wrapper">

        <Header />

        <InputContainer />

        <ItemContainer />

      </div>
      
    </>
  );
}

const Header = () => {
  return (
    <div className="header">
      <h1>To Do App</h1>
    </div>
  );
}

const InputContainer = () => {
  return (
    <div className="input-container">
      <input type="text" className="input-field" placeholder="Add a new item..."/>
      <button className="add btn">Add</button>
  </div>
  );
}

const ItemContainer = () => {
  return (
    <div className="items-container">
      <ListTile itemText="FirstItem"/>
      <ListTile itemText="SecondItem"/>
      <ListTile itemText="ThirdItem"/>
      <ListTile itemText="FourthItem"/>
    </div>
  );
}

const ListTile = (props) => {
    return (
        <div className="list-tile">
            <span className="item-text">
                {props.itemText}
            </span> 
            <button className="edit btn">
              <i className="fa fa-edit"></i>
            </button>
            <button className="delete btn">
              <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

const ModalContainer = () => {
  return (
    <div className="modal-container ">
      <div className="edit modal ">
        <h3 style={{textAlign : "center"}}>Edit item</h3>
        <input type="text" placeholder="item value"/>
        <div className="btn-container">
          <button className="btn save">Save changes</button>
          <button className="btn cancel">Cancel</button>
        </div>
      </div>
      <div className="delete modal ">
          <h3 style={{textAlign : "center"}}>Delete item?</h3>
          <span style={{textAlign : "center", color : "grey"}}>the item</span>
          <div className="btn-container">
            <button className="btn yes">Yes</button>
            <button className="btn no">No</button>
        </div>            
      </div>
    </div>
  );
}



export default App;
