import React, { Component } from 'react';



class Projectitem extends Component {
  deleteProject(id){
    this.props.onDelete(id);

  }
  render() {
    
    return (
      <li className="Projects">
        <b>{this.props.project.title}</b> - {this.props.project.category} <a href='#' onClick={this.deleteProject.bind(this,this.props.project.id )}>X</a>
        
        
      </li>
    );
  }
}

export default Projectitem;
