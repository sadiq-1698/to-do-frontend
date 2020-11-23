import React, { useContext } from 'react';
import TodosContext from '../contexts/TodosContext';
import axios from 'axios';
import { HOST, ACCESS_TOKEN } from '../constants/constants';

const DeleteModal = () => {

    // use context
    const {itemList, setItemList, itemName, itemID, setOpenModal} = useContext(TodosContext); 

    // helper functions
    const deleteItem = () => {
        axios.delete(HOST + `delete/${itemID}`,
        { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN)
            }
        })
        .then((response) => {
            setItemList(itemList.filter(item => item._id !== itemID));
            setOpenModal(false);
        }, (error) => {
        console.log(error);
        });;
    }

    return (
      <div className="delete modal display">
        <h3 style={{textAlign : "center"}}>Delete item?</h3>
        <span style={{textAlign : "center", color : "grey"}}>{itemName}</span>
        <div className="btn-container">
          <button onClick={deleteItem} className="btn yes">Yes</button>
          <button onClick={() => setOpenModal(false)} className="btn no">No</button>
        </div>            
      </div>
    );
}

export default DeleteModal;