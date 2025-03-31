import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
// import Profile from '../Profile/Profile'
import "./App.css";
import Search from "../Search/Search";
import Board from "../Board/Board";
// import Users from '../Users/Users'
import CreateRecipe from "../CreateRecipe/CreateRecipe";
// import ViewRecipe from "../ViewRecipe/ViewRecipe";
// import EditRecipe from "../EditRecipe/EditRecipe";
// import DeleteRecipe from "../DeleteRecipe/DeleteRecipe";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe/create" element={<CreateRecipe />} />
        <Route path="/recipe/board" element={<Board />} />
        {/* <Route path="/recipe/view/:id" element={<ViewRecipe />} />
        <Route path="/recipe/edit/:id" element={<EditRecipe />} />
        <Route path="/recipe/delete/:id" element={<DeleteRecipe />} /> */}
      </Routes>
    </>
  );
};

export default App;
