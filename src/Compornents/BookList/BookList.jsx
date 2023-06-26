import React from 'react'
import { useGlobalContext } from '../../Content'
import Loading from '../../pages/Loader/Loder'
import Book from "../BookList/Book"
import coverImg from '../../Images/B_List.jpg'
import './BookList.css'


const BookList = () => {
  const {books,loading,resultTitle}=useGlobalContext();
  const booksWithCovers = books.map((singleBook)=>{
    return{
      ...singleBook,
      id:(singleBook.id).replace("/works/" ,""),
      cover_img: singleBook.cover_id?`https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  })
  if(loading)return<Loading/>
  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0,30).map((item,index)=>{
            return(
              <Book key ={index}{...item}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BookList
