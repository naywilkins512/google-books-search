import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';


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
            
          </div>
        </div>


      </div>





    </div>
  );
}

export default App;
