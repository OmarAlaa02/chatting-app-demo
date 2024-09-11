import React , { Component } from 'react'
import OpenSocket from 'socket.io-client';

class MessageSpace extends Component{
    constructor(){
        super()
        this.state={
            messages:[]
        }
    }

    componentDidMount()
    {
        if(this.state.messages.length === 0)
        {
            fetch('https://6mgtfvcn-5000.uks1.devtunnels.ms/message')
            .then(res=>res.json())
            .then(data=>{
                this.setMessages(data.messages);
            })
            .catch(err=>console.log(err));
        }

        const socket=OpenSocket('http://localhost:5000');
        socket.on('new message',data=>{
            this.addMessage(data.message);
        })
    }

    setMessages=messages=>{
        this.setState({
            messages:messages
        })

    }

    addMessage=message=>{
        
        const messages=[...this.state.messages];
        messages.push(message);
        console.log(messages);
        this.setState({
            messages:messages
        })
    }

    render()
    {
        const {messages} = this.state;
        
        if(messages.length)
            return(
                <div>
                    {
                        messages.map((message,index)=> <h1 key={index}>{message}</h1>)
                    }
                </div>
            )
        return (
            <div>
                no messages yet
            </div>
        )
        
    }
}

export default MessageSpace;