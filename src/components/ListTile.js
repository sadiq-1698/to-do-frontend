import React, { useContext } from 'react';
import TodosContext from '../contexts/TodosContext';

const ListTile = (props) => {

    // use context
    const {setOpenModal, setOpenEditModal, setItemID, setItemName} = useContext(TodosContext);

    // helper functions
    const modalOpen = (isEdit = true) => {
        setItemID(props.itemId);
        setItemName(props.itemText);
        setOpenModal(true);
        isEdit ? setOpenEditModal(true) : setOpenEditModal(false);
    }

    return (
        <div className="list-tile">
            <span className="item-text">
                {props.itemText}
            </span> 
            <button onClick={() => modalOpen()} className="edit btn">
              <i className="fa fa-edit"></i>
            </button>
            <button onClick={() => modalOpen(false)}className="delete btn">
              <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

export default ListTile;
