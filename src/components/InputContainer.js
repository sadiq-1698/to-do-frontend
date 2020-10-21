import React from 'react';

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

export default InputContainer;
