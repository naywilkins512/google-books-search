import React from "react";
import API from '../utils/API';

function Results(props) {

    function handleFormSubmit(event) {
        event.preventDefault();
        if (props.value.title && props.value.author) {
          API.saveBook({
            title: props.value.title,
            author: props.value.author,
            synopsis: props.value.synopsis
          })
            .then(res => loadBooks())
            .catch(err => console.log(err));
        }
      };

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
                                    <img src={value.volumeInfo.imageLinks?.smallThumbnail?value.volumeInfo.imageLinks?.smallThumbnail:"https://via.placeholder.com/150"} className="img-thumbnail" alt="placeholder"></img>
                                    <button>save</button>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;