import {React, useState} from 'react';
import axios from 'axios';

function SearchForm () {

const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log(value);
    event.preventDefault();
    axios.GET(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
  }

    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">

          <p className="lead text-left">Books</p>

          <form onSubmit={handleSubmit}>

            <input className="form-control" type="text" value={value} onChange={handleChange} />

            <input className="mt-2" type="submit" value="search" />
          </form>


        </div>
      </div>

    );
  }



export default SearchForm;