import Project from './Project.js'
import ProjectImage from './ProjectImage.js'

// all possible categories
export const CATEGORY_ILLUSTRATION = {
    name: "illustration",
    subcategories: ["editorial", "portraiture", "other"]
}
export const CATEGORY_COMICS = {
    name: "comics",
    subcategories: []
}


class ProjectFactory {

    static get illustrationCategory() {
        return CATEGORY_ILLUSTRATION
    }

    static get comicsCategory() {
        return CATEGORY_COMICS
    }

    getValidCategories() {
        return [ProjectFactory.illustrationCategory, ProjectFactory.comicsCategory]
    }

    constructor(){

        this.projects = []

        // **** PROJECT 1 **** //
        var projectOne = new Project()
        projectOne.setCategory(ProjectFactory.illustrationCategory.name)
        projectOne.setSubCategory("editorial")
        projectOne.addImage(new ProjectImage("Image title 1", "Description for image 1", "https://t3.ftcdn.net/jpg/01/16/71/10/500_F_116711094_8dcyjfz9Ab0mb32fUxCPZYJoWo9MNWyL.jpg"))
        projectOne.addImage(new ProjectImage("Image title 2", "Desc. for image 2", "https://i.pinimg.com/originals/ad/70/ed/ad70edc06fd73727ec31509215789fcd.jpg"))

        this.projects[0] = projectOne

        // **** PROJECT 2 **** //
        var projectTwo = new Project()
        projectTwo.setCategory(ProjectFactory.comicsCategory.name)
        projectTwo.setSubCategory("editorial")
        projectTwo.addImage(new ProjectImage("Proj 2 title for image 1", "Description for project two image 1", "https://vetstreet.brightspotcdn.com/dims4/default/a2b630f/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F3e%2Ffe5980c82011e09b940050568d6ceb%2Ffile%2FLurcher-5-AP-645km081611.jpg"))

        this.projects[1] = projectTwo


        // **** PROJECT 3 **** //

        var projectThree = new Project()
        projectThree.setCategory(ProjectFactory.illustrationCategory.name)
        projectThree.setSubCategory("portraiture")
        projectThree.addImage(new ProjectImage("Proj three image 1", "desc for proj three image 1" , "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"))

        this.projects[2] = projectThree
        
    }

    getArtistProjects() {
        return this.projects
    }

    getFilteredProjects(categoryName, subcategoryName) {
        return this.projects.filter((proj) => {
            if(subcategoryName !== undefined) {
                return proj.category == categoryName && proj.subcategory == subcategoryName 
            } else {
                return proj.category == categoryName
            }
        })
    }
}

export default ProjectFactory