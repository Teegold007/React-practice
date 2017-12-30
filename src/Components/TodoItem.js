import React, { Component } from 'react';



class TodoItem extends Component {
  

  
  render() {
    
    return (
      <li className="Todo">
        <b>{this.props.todo.title}</b> 
        
        
      </li>
    );
  }
}

export default TodoItem;
