import React, { useContext } from 'react';
import TodosContext from '../contexts/TodosContext';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';


const ModalContainer = () => {

  // use context
  const {openModal, openEditModal, itemID} = useContext(TodosContext); 

    return (
      <div className={openModal ? "modal-container display" : "modal-container"}>
        {
          openEditModal ? <EditModal itemId={ itemID } /> : <DeleteModal itemId={ itemID }/>
        }
      </div>
    );
}

export default ModalContainer;
