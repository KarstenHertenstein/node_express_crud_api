import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { RootLoginContext } from "../Helper/Context";
import { useState, useContext } from "react";


function UploadForm(props) {
    
    const [rootLoggedIn, setRootLoggedIn] = useState(props.root);
    const [state, setState] = useState({file: null, redirect: !props.authorized})

    console.log(rootLoggedIn);
    

    function onChange(e) {
        setState({
            file: e.target.files[0],
            loaded: 0,
        })
    }
    
    function onSubmit(e) {
        const data = new FormData();
        data.append('file', state.file);

        axios.post("http://localhost:5000/upload", data, {

        })
        .then(res => {
            console.log(res.statusText);
        })
    }

    if(state.redirect) {
        return <Redirect to="/login" />
    }

    return (  
        <div>
            <h1>Upload a file</h1>
            <input type="file" className="form-control" onChange={onChange}/>
            <button type="button" disabled={!rootLoggedIn} onClick={onSubmit}>Upload</button>
        </div>
    );
}


export default UploadForm;