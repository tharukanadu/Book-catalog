import React,{useRef,useEffect} from 'react'
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { useGlobalContext } from '../../Content';
import "./SearchFrom.css"

const SearchForm = () => {
  const {setSearchTerm,setResultTitle}= useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(()=>searchText.current.focus(),[]);
  const handleSubmit =(e)=>{
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length ===0){
    setSearchTerm("The lost world");
    setResultTitle("Please enter soething...");
  }else{
    setSearchTerm(searchText.current.value);
  }
  navigate("/book");
  };
  return (
    <div className='search-form' onSubmit={handleSubmit}>
      <div className="container">
        <div className="search-from-elem flex flex-sb bg-white">
            <input type="text" className='form-control' placeholder='The lost world.....' ref = {searchText}/>
            <button className="flex flex-c" type='submit' onClick={handleSubmit}>
                <FaSearch className='text-purple' size={32}/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
