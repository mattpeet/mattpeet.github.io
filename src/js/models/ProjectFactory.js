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
        // project.addImage(<IMAGE TITLE>, <IMAGE DESCRIPTION>, <PATH TO FILE(./../src/img/<FILENAME>)>)


        this.projects = []

        // **** PROJECT 1 **** //
        var projectOne = new Project()
        projectOne.setCategory(ProjectFactory.illustrationCategory.name)
        // projectOne.setSubCategory("editorial")
        projectOne.addImage(new ProjectImage("Mermaid", "Mermaid Description", "./../src/img/BBCHistoryMermaid-IMAGE-1000x812px.jpg"))
        projectOne.addImage(new ProjectImage("Image title 2", "Desc. for image 2", "./../src/img/BBCHistoryMermaid-MOCKUP-573x750px.jpg"))

        this.projects[0] = projectOne

        // **** PROJECT 2 **** //
        var projectTwo = new Project()
        projectTwo.setCategory(ProjectFactory.illustrationCategory.name)
        // projectTwo.setSubCategory("editorial")
        projectTwo.addImage(new ProjectImage("Keeper Magazine portrait", "Description", "./../src/img/Keeper-Oct18-MAIN-IMAGE-710x1000px.jpg"))
        projectTwo.addImage(new ProjectImage("Keeper Magazine drop in", "Description", "./../src/img/Keeper-Oct18-DROPIN-564x500px.jpg"))
        projectTwo.addImage(new ProjectImage("Keeper Magazine page", "", "./../src/img/Keeper-Oct18-Page1-750x1000px.jpg"))

        this.projects[1] = projectTwo


        // **** PROJECT 3 **** //

        var projectThree = new Project()
        projectThree.setCategory(ProjectFactory.illustrationCategory.name)
        // projectThree.setSubCategory("portraiture")
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh 2018", "December, John Jackson" , "./../src/img/CMEdi2018-DEC-John-Jackson_825x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh 2018", "Description" , "./../src/img/CMEdi2018-COMPOSITE_1-1000x750px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh 2018", "Description" , "./../src/img/CMEdi2018-COMPOSITE_2-1000x750px.jpg"))

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