import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import API from '../utils/API';

function Saved() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
      }, [])
    
      // Loads all books and sets them to books
      function loadBooks() {
        API.getBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };



    return (

        <div className="container-fluid">

            <Navbar />
            <div className="row">
                <div className="col">
                    <Jumbotron />
                </div>
            </div>
        </div>
    )
}

export default Saved;