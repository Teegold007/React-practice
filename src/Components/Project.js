
import React, { Component } from 'react';
import Projectitem from './Projectitem';


class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);

  }
 

  render() {
    let projectitems;
    if(this.props.projects){
      projectitems = this.props.projects.map(project =>{
       // console.log(project);
       return(
         <Projectitem onDelete={this.deleteProject.bind(this)}key={project.title} project={project} />

       );
      });
    }
    
    return (
      <div className="Projects">
        <h3>Latest project </h3>
        
        {projectitems}
        
      </div>
    );
  }
}

//Projects.proptypes = {
  //projects: React.Proptypes.object,
  //onDelete: React.PropTypes.func
//}
export default Projects;
