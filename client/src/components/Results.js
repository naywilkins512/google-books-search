import React, { useState } from "react";
import API from '../utils/API';

function Results(props) {

    const [results, setResults] = useState(props)

    handleSaveClick = (bookObj) => {
        console.log(results)
        API.saveBook({
            title: results.volumeInfo.title,
            author: results.volumeInfo.author,
            synopsis: results.volumeInfo.synopsis
        }
        )
            .catch(err => console.log(err));



        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <p className="lead text-left">Results</p>
                    <div className="row">
                        <div className="col">
                            {props.books.map(value => (
                                <div className="card">

                                    <div className="card-body">
                                        <h1>{value.volumeInfo.title}</h1>
                                        <p>{value.volumeInfo.description}</p>
                                        <img src={value.volumeInfo.imageLinks?.smallThumbnail ? value.volumeInfo.imageLinks?.smallThumbnail : "https://via.placeholder.com/150"} className="img-thumbnail" alt="placeholder"></img>
                                        <button onClick={() => handleSaveClick(value)}>save</button>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Results;