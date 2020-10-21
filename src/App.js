import React, {useState, useEffect} from 'react';
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
  
  // const createNewItem = (itemName) => {
  //   axios.post(HOST + 'insert', {
  //     item : itemName
  //   })
  //   .then((response) => {
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
      <ModalContainer 
        showModalContainer={showModalContainer}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        clickModalButtons={onClickModalButtons}
      />

      <div className="wrapper">

        <Header />

        <InputContainer 
          createNewItemFunction={createNewItem}
        />

        <ItemContainer 
          listOfItems={itemList}
          onClickEdit={onClickEditButton}
          onClickDelete={onClickDeleteButton}
        />

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

const InputContainer = (props) => {

  return (
    <div className="input-container">
      <input 
        type="text" 
        className="input-field" 
        placeholder="Add a new item..."
      />
      <button className="add btn" onClick={}>Add</button>
    </div>
  );
}

const ItemContainer = (props) => {
  const listOfItems = props.listOfItems;
  return (
    <div className="items-container">
      {
        listOfItems.map((item, index) =>
          <ListTile key={index}             
            itemText={item.item}
            onClickEdit={props.onClickEdit}
            onClickDelete={props.onClickDelete}>
          </ListTile>
        )
      }
    </div>
  );
}

const ListTile = (props) => {
    return (
        <div className="list-tile">
            <span className="item-text">
                {props.itemText}
            </span> 
            <button onClick={props.onClickEdit} className="edit btn">
              <i className="fa fa-edit"></i>
            </button>
            <button onClick={props.onClickDelete} className="delete btn">
              <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

const ModalContainer = (props) => {
  return (
    <div className={props.showModalContainer ? "modal-container display" : "modal-container"}>
      <div className={props.showEditModal ? "edit modal display" : "edit modal"}>
        <h3 style={{textAlign : "center"}}>Edit item</h3>
        <input type="text" placeholder="item value"/>
        <div className="btn-container">
          <button onClick={props.clickModalButtons} className="btn save">Save changes</button>
          <button onClick={props.clickModalButtons} className="btn cancel">Cancel</button>
        </div>
      </div>
      <div className={props.showDeleteModal ? "delete modal display" : "delete modal"}>
          <h3 style={{textAlign : "center"}}>Delete item?</h3>
          <span style={{textAlign : "center", color : "grey"}}>the item</span>
          <div className="btn-container">
            <button onClick={props.clickModalButtons} className="btn yes">Yes</button>
            <button onClick={props.clickModalButtons} className="btn no">No</button>
        </div>            
      </div>
    </div>
  );
}



export default App;
