import React, { Component } from 'react'
// import LoginForm from './components/LoginForm';
import MessagesPanel from './components/Messages-Panel';


class App extends Component {
    state = { 
        username: '',
     }

     updateUser = (user) => {
         this.setState({username: user});
     }

    render() { 
        // const { username } = this.state;
            return (
                <React.Fragment>
    
    
    
                    {/* <LoginForm updateParent={this.updateUser}/> */}
                    <MessagesPanel user={'chris'}/>
                </React.Fragment>
    
             );

            

        }
        

    
}
 
export default App;

