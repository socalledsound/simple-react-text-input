import React from 'react'

const Message = ({message}) => {
    return ( 
        <div>
            <div>
                {message.content}
            </div>
            <div>
                from {message.username}
            </div>
            <div>
                at { message.timestamp}
            </div>
          
        </div>
     );
}
 
export default Message;