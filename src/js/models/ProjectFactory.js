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
    projectOne.setCategory("illustration")
    projectOne.setSubCategory("editorial")
    projectOne.addImage("https://t3.ftcdn.net/jpg/01/16/71/10/500_F_116711094_8dcyjfz9Ab0mb32fUxCPZYJoWo9MNWyL.jpg")
    projectOne.addImage("https://i.pinimg.com/originals/ad/70/ed/ad70edc06fd73727ec31509215789fcd.jpg")

    projects[0] = projectOne

    // **** PROJECT 2 **** //
    var projectTwo = new Project()
    projectTwo.setTitle("Project 2")
    projectTwo.setDescription("Description of project 2")
    projectTwo.setCategory("illustration")
    projectTwo.setSubCategory("editorial")
    projectTwo.addImage("https://vetstreet.brightspotcdn.com/dims4/default/a2b630f/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F3e%2Ffe5980c82011e09b940050568d6ceb%2Ffile%2FLurcher-5-AP-645km081611.jpg")

    projects[1] = projectTwo

    // **** PROJECT 3 **** //

    var projectThree = new Project()
    projectThree.setTitle("Project 3")
    projectThree.setDescription("Description of project 3")
    projectThree.setCategory("illustration")
    projectThree.setSubCategory("editorial")
    projectThree.addImage("https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG")

    projects[2] = projectThree

    return projects
  }

}

export default ProjectFactory