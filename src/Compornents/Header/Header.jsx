import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../../pages/SerachFrom/SearchForm'
import './Header.css'

const Header = () => {
  return (
   <div className="holder">
    <header className="header">
    <Navbar/>
    <div className="header-content flex flex-c text-conter text-white">
        <h2 className="header-title text-capitalize">Find your book of choice..</h2>
<br />
    <p className="head-text fs-18 fw-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo nesciunt beatae voluptatibus sunt alias at nemo nam id cumque, esse atque quasi, cupiditate reiciendis maiores velit ex sit delectus fugiat.</p>
        <SearchForm/>
    </div>
    </header>
   </div>
  )
}

export default Header
