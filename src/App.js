import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import ModalContainer from './components/ModalContainer';
import TodoContainer from './components/TodoContainer';
import TodosContext  from './contexts/TodosContext';
import ProtectedRoute from './routers/ProtectedRoute';
import {Route, Switch, Link } from "react-router-dom";
import './App.css';
import axios from 'axios';
import AuthContext from './contexts/AuthContext';
import { APP } from './constants/constants';

const HOST = "https://sadiq-1698-todo.glitch.me/";

function App() {

  // use state
  const[itemList, setItemList] = useState(null);
  const[itemID, setItemID] = useState("");
  const[itemName, setItemName] = useState("");
  const[openModal, setOpenModal] = useState(false);
  const[openEditModal, setOpenEditModal] = useState(true);
  const[isAuth, setIsAuth] = useState(localStorage.getItem("loggedIn") === "true");

  // provider values
  const providerValues = {
    itemList, setItemList, openModal, setOpenModal, openEditModal,
     setOpenEditModal, itemID, setItemID, itemName, setItemName
  }

  // use effect
  useEffect(() => {
    const fetchItems = async() => {
      const response = await axios(HOST + 'read');
      if(response){
        setItemList(response.data);
      }
    };
    fetchItems();
  }, [isAuth]);


  return (
    <>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <TodosContext.Provider value={ providerValues }>
          <ModalContainer />
          <Header />
          <Link to="/profile"/>
          <Switch>
            <Route path="/" exact><Register /></Route>
            <Route path="/login" exact><Login /></Route>
            <Route path="/todo" exact><TodoContainer /></Route>
            <ProtectedRoute path="/profile" component={Profile} auth={isAuth}/>
          </Switch>
        </TodosContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

const Profile = () => {
  return (
    <div>
      <h1>Profile page!</h1>
    </div>
  );
}

export default App;
