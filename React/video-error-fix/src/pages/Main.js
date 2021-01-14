import React, { useState } from "react";

function Main() {
    // state to hold object of values
    const [formObject, setFormObject] = useState({});
    // array of output
    const [formOutput, setFormOutput] = useState([]);


    // grabs value from input and dropdown to save to state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="video">Video</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="video"
                                        name="video"
                                        onChange={handleInputChange}
                                        value={formObject.video || ""}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="videoType">Video Link</label>
                                    <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Video Type
                                    </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {/* hardcode options here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col button block-inline">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        {/* map out array of output, so every new one is added here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;