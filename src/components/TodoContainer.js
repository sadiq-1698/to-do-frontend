import React from 'react';
import Header from './Header';
import InputContainer from './InputContainer';
import ItemContainer from './ItemContainer';

const TodoContainer = () => {
    return (
      <div className="wrapper">
  
        <Header />
  
        <InputContainer />
  
        <ItemContainer />
  
      </div>
    );
  }
  
  export default TodoContainer;
  