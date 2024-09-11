import React , { Component } from 'react'

class Form extends Component{
    constructor(){
        super();
        this.ref=React.createRef();
    }

    clickHandler=()=>{
        const message=this.ref.current.value;
        this.ref.current.value='';
        fetch('https://6mgtfvcn-5000.uks1.devtunnels.ms/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content:message
            })
        }).catch(err=>console.log(err));
    }

    render()
    {
        return (
            <div>
                <input type='text' ref={this.ref}/>
                <button onClick={this.clickHandler} > send </button>
            </div>
        )
    }
}

export default Form;