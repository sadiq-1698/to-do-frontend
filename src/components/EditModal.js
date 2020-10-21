import React, { useContext } from 'react';
import TodosContext from '../contexts/TodosContext';
import axios from 'axios';

const HOST ="http://localhost:3001/";

const EditModal = (props) => {

    // use context
    const {itemList, setItemList, itemName, setItemName, itemID} = useContext(TodosContext); 

    // helper functions
    const updateItem = () => {
        console.log(itemName);
        console.log(itemID);
        //     axios.put(HOST + 'update', {
        //     id : itemID,
        //     item : itemName
        // }).then((response) => {
        //     console.log(response);
        //     const currentItemIndex = itemList.findIndex(item => item._id === itemID);
        //     const tempItemList = [...itemList];
        //     tempItemList[currentItemIndex] = { ...tempItemList[currentItemIndex], item: itemName };
        //     setItemList([...tempItemList]);
        //     }, (error) => {
        //         console.log(error);
        // });
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
            <button onClick={updateItem()}>wtf</button>
          {/* <button  onClick={() => updateItem(props.itemId)} className="btn save">Save changes</button> */}
          <button className="btn cancel">Cancel</button>
        </div>
      </div>
    );
}

export default EditModal;