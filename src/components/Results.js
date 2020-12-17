import React from "react";

function Results() {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <p className="lead text-left">Results</p>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                                <img src="https://via.placeholder.com/150" className="img-thumbnail" alt="placeholder"></img>
                                <button>view</button>
                                <button>save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;