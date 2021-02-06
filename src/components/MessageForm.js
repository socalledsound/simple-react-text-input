import React from 'react'

// import React from 'react';
// import { firestore, addItemToFirestore } from '../../firebase/firebase.utils';
// import { Button } from 'semantic-ui-react';
// // import { Picker, emojiIndex} from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';


// import FileModal from './FileModal';
// import ProgressBar from './ProgressBar';


class MessageForm extends React.Component {

    state = {

        message: '',

    }


    componentDidMount(){

    }



    handleChange = event => {
        console.log(event.target.value);
        this.setState({ message: event.target.value })
    }


    createMessage = () => {
        const { user } = this.props; 

        const now = new Date().getTime();
        const message = {
            timestamp: now,
            content: this.state.message,
            username: user

        };


        return message
    }

    sendMessage = () => {
        const { updateParent }  = this.props;
        const { message } = this.state;

        if(message){

                    this.setState({ message: ''});
                    updateParent(this.createMessage(message));
                    console.log('success');
        
        
        } else {

            console.log('no message');
        }


    }


    render(){
        const { message } = this.state;
        console.log(message);
        return (
           <div className="message__form">
              

            <textarea
                style={{
                    height: '70px',
                    width: '90%',
                    lineHeight: '1em',
                    fontFamily: 'Martel',
                    padding: '6px',
                }}
                placeholder="leave a comment"
                onChange={this.handleChange}
                value={message}
            />
            <button
                    onClick={()=> this.sendMessage() } 
                    style={{width: '100%'}}

            > add comment
            </button>



           </div>
        )
    }

}
export default MessageForm




// messagesRef
// .child(channel.id)
// .push()
// .set(this.createMessage())
// .then(() => {
//     this.setState({ loading: false, message: ''})
// })
// .catch(err=>{
//     console.error(err);
//     this.setState({
//         loading: false,
//         errors: this.state.errors.concat(err)
//     })
// })