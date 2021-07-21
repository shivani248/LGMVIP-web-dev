import React from 'react';
import '../App.css';
const Card = ({ user_name , id, user_email}) => {
    return(

        
        <div style={{width: '350px', height:'300px',display:'inline-block', border: '10px',backgroundColor:'#400080',marginLeft: '50px',marginBottom: '50px;'}} className="grid-item">
            <img src={`https://reqres.in/img/faces/${id}-image.jpg`} height="50%" width="70%"/>

            <div className="user_disp">
                <br />
                <h2>{user_name}</h2>
                
                <h4 style={{marginLeft:'-25px'}}>{user_email}</h4> <br></br>
                <button class="user-btn1">
              <h5>View Profile</h5> <span></span>
            </button>
            </div>
            <br /> <br /> 
        </div>
        
    );
}

export default Card;