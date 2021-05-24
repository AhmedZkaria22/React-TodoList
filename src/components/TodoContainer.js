import React, { Component, useState } from 'react';
import '../styles/Todo.css';


class TodoContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id: "", name: "", desc: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handelSubmit = (e) => {
        const inN = document.getElementById("name"),
            inD = document.getElementById("desc");
        if(inN.value.length >= 3 && inD.value.length >= 5){
            this.setState({id: "", name: "", desc: ""});
            this.props.addItem(this.state);
        } else{ console.log("Attention msg"); }
    }

   render() {              
        return (
            <>
              <h1>My Todos</h1>  
              <section id="TodoInsert">
                <div>
                    <p>Name</p>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div>
                    <p>Description</p>
                    <input type="text" id="desc" onChange={this.handleChange} value={this.state.desc}/>
                </div>         
                <button type="button" onClick={this.handelSubmit}>Add Todo</button>    
              </section>
            </>
        )
   }
}

export default TodoContainer;
