import React, { Component }  from 'react';
import User_cards from './components/List_users';
import Navbar from './components/Navbar';
import Loader from './load_spin';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state= {
      bots: [],
      isButtonClicked: false
    }
  }

  onButtonSubmit = () => {
    this.setState({isButtonClicked: !this.isButtonClicked})
    const timer = setTimeout(() => {
      fetch('https://reqres.in/api/users?page').then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({bots: users.data})
      });
    }, 3200);
    return () => clearTimeout(timer);
  }
  
  

  render() {
    const viewbots = this.state.bots.filter( bots => {
      return bots.first_name.toLowerCase();
    })

    if(this.state.bots.length === 0 && this.state.isButtonClicked === false) {
      return (
        <div>
          <Navbar onButtonSubmit={this.onButtonSubmit} />
                  <p style={{color: 'white', marginLeft: '350px',marginTop:'140px',padding: '10px;', fontFamily:'cursive', fontSize:'35px'} }>
                    <h1>let's GrowMore</h1>
                    
                  </p>

                  <p style={{marginTop:'110px',fontFamily:'cursive', fontSize: '25px',color:'orangered', marginLeft:'360px'}}> </p>
                
        </div>
      );
    }

    else if(this.state.bots.length === 0) {
      return (
        <>
          <Navbar onButtonSubmit={this.onButtonSubmit} />
            
            <Loader className="loader"></Loader>
        </>
      );
    }

    else {
      return(
        <>
        <Navbar onButtonSubmit={this.onButtonSubmit}/>
        <div style={{textAlign: 'center', color: 'goldenrod',margin:'20px',marginBottom:'20px'}}>
          
          
          <scroll> 
            <User_cards bots={viewbots} />
          </scroll>
        </div>
        </>
      );
    }
  }
}


export default App;
