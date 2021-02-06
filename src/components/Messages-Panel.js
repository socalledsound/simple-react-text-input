import React, { Component } from 'react'
import MessageForm from './MessageForm';
import Message from './Message';


class MessagesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages : '',
            user: this.props.user,

         }
    }

    renderComments = (messages) => {
            if(messages){
                messages.sort((a,b) => b.timestamp - a.timestamp)
                return (
                    messages.length > 0 && messages.map( message => (
                        <div className="message-container" key={message.timestamp}>
                            <Message message={message}/>
                        </div>
                    ))
                )
            }
    }

    updateMessages = (message) => {
        const { messages } = this.state;
        const newMessages = [...messages].concat([message]);
        
        this.setState({messages: newMessages});
    } 



    render() { 
        const { messages, user } = this.state;
        return ( 
          
                <div className="message-panel-container">
                    <MessageForm  updateParent={this.updateMessages} user={user}/>
                    <div className="comments-container">
                        {this.renderComments(messages)}
                    </div>
                       
                   
                </div>
           
         );
    }
}
 
export default MessagesPanel;