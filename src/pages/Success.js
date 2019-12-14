import React from 'react';
import image from '../images/Man.png';
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom';
import Transfer from '../pages/Transfer';

function Success() {
    return(
        <div>
            <h3>Welcome, Mr Kirokawa Hasuzue!</h3>
            <img src={image} alt="Man" />
            <p>Success!</p>
            <Link to="/account"><button>Return to account</button></Link>
            <button>Request</button>
        </div>
    )
    }

export default Success