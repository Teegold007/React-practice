import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Project';
import AddProject from './Components/AddProject';
import './App.css';


class App extends Component {
  constructor (){
    super();
    this.state = {
      projects:[]
    }
  }

  getTodos(){

  }
  getProjects(){
    this.setState({projects:[
      {
        id : uuid.v4(),
        title: 'Bussiness website',
        category: 'Web design'
      },
      {
        id : uuid.v4(),
        title: 'Social App',
        category: 'Mobile development'
      },
      {
        id : uuid.v4(),
        title: 'Ecommerce shopmart',
        category: 'Web development'
      }
     ]});
  }


 componentWillMount(){
   this.getProjects();
   this.getTodos();
 }

  componentDidMount(){

  }


  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})

  }
  //deleting a project
  HandleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id ===id);
    projects.splice(index, 1);
    this.setState({projects:projects})


  }

 
  render() {
    
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.HandleDeleteProject.bind(this)}/>


      </div>
    );
  }
}

export default App;
