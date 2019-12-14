import React from 'react';
import image from '../images/Man.png';
import {
    Link
} from 'react-router-dom';

function Transfer() {
    return(
        <div>
            <h3>Welcome, Mr Kirokawa Hasuzue!</h3>
            <img src={image} alt="Man" />
            <p>Account balance is: $322.47</p>
            <form>
                Send to:
                <input type="email" placeholder="Transferee"></input>
                Amount:
                <input type="numeric" placeholder="$31337"></input>
            </form>
            <Link to="/success"><button>Send some sweet money</button></Link>
        </div>
    )
    }

export default Transfer