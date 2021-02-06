import React from 'react'

class LoginForm extends React.Component {

    state = {
        user: ''
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }




    addUser = () => {
       const { updateParent } = this.props;
        const { user } = this.state;

        if(user){

                    this.setState({ user: ''});
                    updateParent(user);
                    console.log('user added');
                    
        }
    }


    render(){
        const { user } = this.state;
        return (
           <div className="user-form">
               <input

                    name="user"
                    style={{ marginBottom: '0.7em' }}
                    placeholder="add your name"
                    onChange={this.handleChange}
                    value={user}
               />
               <button 
                style={{width: '100%'}}
                onClick={this.addUser}
               >add username</button>
           </div>
        )
    }

}
export default LoginForm



    // handleKeyPress = (e) => {
    //     if (e.charCode === 13) {
    //       // Prevent the default action to stop scrolling when space is pressed
    //     //   e.preventDefault()
    //       console.log('Button received click with keyboard');
    //       this.sendMessage();
    //     }
    //   }