// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';
import './styles/Todo.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        items: [
            {id: 1, name: "Task 1", desc: "this is my task one"},
            {id: 2, name: "Task 2", desc: "this is my task two"},
            {id: 3, name: "Task 3", desc: "this is my task three"},  
        ]
    }
  }


  addItem = (item) => {
    item.id = this.state.items.length + 1;
    let items = this.state.items;
    items.push(item);        
    this.setState({items});    
  }

  render() {
  return (
    <div className="App">
      <TodoContainer addItem={this.addItem}/>
      <TodoItem items={this.state.items}/>
    </div>
  );
  }
}

export default App;
