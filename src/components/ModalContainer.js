import React from 'react';

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

export default ModalContainer;
