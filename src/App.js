import './App.css';
import SearchForm from './components/SearchForm';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Results from './components/Results';


function App() {
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
            <SearchForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Results />
          </div>
        </div>


      </div>





    </div>
  );
}

export default App;
