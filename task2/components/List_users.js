import React from 'react';
import Card  from './Users';
import '../App.css';


const User_cards = ({bots}) => {
    return(
       
        
        <div>
        {
            bots.map((user, i) => {
                return (
                    <Card 
                    key={i}
                    id = {bots[i].id}
                    user_name={bots[i].first_name}
                  
                    user_email = {bots[i].email}
                    />
                );
            })
        }
           
        </div>
       
      
    );
}

export default User_cards;