import './App.css';
import SearchForm from './components/SearchForm';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Results from './components/Results';
import React, {useState} from 'react';

function App() {

  const [books, setBooks] = useState([]);

  return (

    <div className="App">

      <div className="container-fluid">

        <Navbar />
        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SearchForm setBooks={setBooks} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Results books={books} />
          </div>
        </div>


      </div>





    </div>
  );
}

export default App;
