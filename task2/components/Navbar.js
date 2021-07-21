import React from 'react';
import Button  from '@material-ui/core/Button';
import '../App.css';

var more={

}
const Nav = ({onButtonSubmit}) => {
    return(
    <nav className="navbar">
        <div className="inside-nav">
            <button onClick={onButtonSubmit}  className="btn btn-outline-info btn-lg view">
               
               Get Clients
                </button>
        </div>
    </nav>
    );
}

export default Nav;