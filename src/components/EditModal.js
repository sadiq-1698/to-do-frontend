import React, { useContext } from 'react';
import TodosContext from '../contexts/TodosContext';
import axios from 'axios';
import { HOST, GET_ACCESS_TOKEN } from '../constants/constants';


const EditModal = () => {

    // use context
    const {itemList, setItemList, itemName, setItemName, itemID, setOpenModal} = useContext(TodosContext); 

    // helper functions
    const updateItem = () => {
        axios.put(HOST + 'update', {
            id : itemID,
            item : itemName
        },
        { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + GET_ACCESS_TOKEN
            }
        }).then((response) => {
            const currentItemIndex = itemList.findIndex(item => item._id === itemID);
            const tempItemList = [...itemList];
            tempItemList[currentItemIndex] = { ...tempItemList[currentItemIndex], item: itemName };
            setItemList([...tempItemList]);
            setOpenModal(false);
        }, (error) => {
            console.log(error);
        });
    }

    return (
      <div className="edit modal display">
        <h3 style={{textAlign : "center"}}>Edit item</h3>
        <input 
          type="text" 
          placeholder="item value"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <div className="btn-container">
          <button  onClick={updateItem} className="btn save">Save changes</button>
          <button  onClick={() => setOpenModal(false)} className="btn cancel">Cancel</button>
        </div>
      </div>
    );
}

export default EditModal;