import axios from 'axios';
import { useState } from "react"
import { useHistory } from "react-router-dom";


function wrongPassword() {
    
    return (
        <p>Wrong password!</p>
    );
    
}

export default wrongPassword;