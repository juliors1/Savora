// --- Search is the home page ---
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";


const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

  return <div>Search</div>;
};

export default Search;
