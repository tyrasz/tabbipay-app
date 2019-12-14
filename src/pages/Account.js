import React from 'react';
import image from '../images/Man.png';
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom';
import Transfer from '../pages/Transfer';

function Account() {
    return(
        <div>
            <h3>Welcome, Mr Kirokawa Hasuzue!</h3>
            <img src={image} alt="Man" />
            <p>Account balance is: $322.47</p>
            <Link to="/transfer"><button>Transfer</button></Link>
            <button>Request</button>
        </div>
    )
    }

export default Account