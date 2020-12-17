import React from "react";

function Results(props) {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <p className="lead text-left">Results</p>
                <div className="row">
                    <div className="col">
                        {props.books.map(value => (
                            <div className="card">

                                <div className="card-body">
                                    {value.volumeInfo.title}
                               <img src="https://via.placeholder.com/150" className="img-thumbnail" alt="placeholder"></img>
                                    <button>view</button>
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