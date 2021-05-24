import React, { Component } from 'react';
import '../styles/Todo.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const TodoItem = (props) => {
    const {items} = props;
    const handelComplete = (e) => {
        let trgt = e.target;
        trgt.parentElement.firstChild.children[0].style.color = "gray";
        trgt.parentElement.firstChild.children[0].style.textDecoration = "line-through";
        trgt.parentElement.firstChild.children[1].style.color = "gray";
        trgt.parentElement.firstChild.children[1].style.textDecoration = "line-through";
        trgt.parentElement.removeChild(e.target);
    }
    const handelDelete = (e) => {
        let trgt = e.target;
        trgt.parentElement.parentElement.removeChild(trgt.parentElement);
    }

    const ListItems = items.map(item => {
        return (
            <section className="TodoItems" key={item.id}>
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.desc}</p>
                </div>
                <button type="button" className={"dlt"} onClick={handelDelete}></button>
                <button type="button" className={"comp"} onClick={handelComplete}></button>
            </section>  
        );
    })
    return(
        <> {ListItems} </>
    )
}


export default TodoItem;
