import React from 'react'
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import "./SearchFrom.css"

const SearchForm = () => {
  return (
    <div className='search-form'>
      <div className="container">
        <div className="search-from-elem flex flex-sb bg-white">
            <input type="text" className='form-control' placeholder='The lost world.....' />
            <button className="flex flex-c" type='submit'>
                <FaSearch className='text-purple' size={32}/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
