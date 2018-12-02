import Project from './Project.js'

class ProjectFactory {

  constructor(){

  }

  getArtistProjects() {
    var projects = []

    // **** PROJECT 1 **** //
    var projectOne = new Project()
    projectOne.setTitle("Example project title")
    projectOne.setDescription("Example project description")
    projectOne.addImage("https://t3.ftcdn.net/jpg/01/16/71/10/500_F_116711094_8dcyjfz9Ab0mb32fUxCPZYJoWo9MNWyL.jpg")
    projectOne.addImage("https://i.pinimg.com/originals/ad/70/ed/ad70edc06fd73727ec31509215789fcd.jpg")

    projects[0] = projectOne


    return projects
  }

}

export default ProjectFactory