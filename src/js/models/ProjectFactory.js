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
        // project.addImage(<IMAGE TITLE>, <IMAGE DESCRIPTION>, <PATH TO FILE(./../src/img/<FOLDER>/<FILENAME>)>)


        this.projects = []

        // **** MERMAID **** //
        var projectOne = new Project()
        projectOne.setCategory(ProjectFactory.illustrationCategory.name)
        // projectOne.setSubCategory("editorial")
        projectOne.addImage(new ProjectImage("The Mermaid and Mrs Hancock", "illustration for BBC History Magazine", "./../src/img/BBCMERMAID/BBCHistoryMermaid-IMAGE-1000x812px.jpg"))
        projectOne.addImage(new ProjectImage("The Mermaid and Mrs Hancock", "", "./../src/img/BBCMERMAID/BBCHistoryMermaid-MOCKUP-573x750px.jpg"))

        this.projects[4] = projectOne

        // **** KEEPER Oct2018 **** //
        var projectTwo = new Project()
        projectTwo.setCategory(ProjectFactory.illustrationCategory.name)
        // projectTwo.setSubCategory("editorial")
        projectTwo.addImage(new ProjectImage("Stuart MacPherson for The Keeper magazine", "Winter 2018", "./../src/img/KEEPER-OCT18/Keeper-Oct18-MAIN-IMAGE_720x1000px.jpg"))
        projectTwo.addImage(new ProjectImage("Drop-in image,The Keeper magazine", "", "./../src/img/KEEPER-OCT18/Keeper-Oct18-DROPIN-564x500px.jpg"))
        projectTwo.addImage(new ProjectImage("The Keeper magazine", "Winter 2018", "./../src/img/KEEPER-OCT18/Keeper-Oct18-Page1-750x1000px.jpg"))

        this.projects[3] = projectTwo


        // **** CMEdi 2018 **** //

        var projectThree = new Project()
        projectThree.setCategory(ProjectFactory.illustrationCategory.name)
        // projectThree.setSubCategory("portraiture")
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "December, John Jackson on Tradition" , "./../src/img/CMEdi2018/CMEdi2018-DEC-John-Jackson_825x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "March, Roan Lavery on Courage" , "./../src/img/CMEdi2018/CMEdi2018-MAR-Roan-Lavery_825x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "September, Hazel Johnson on Chaos" , "./../src/img/CMEdi2018/CMEdi2018-SEP-Hazel-Johnson_845x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "April, Caitlin Goodale on Game" , "./../src/img/CMEdi2018/CMEdi2018-APR-Caitlin-Goodale_850x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "February, Nicholas Oddy on Curiosity" , "./../src/img/CMEdi2018/CMEdi2018-FEB-Nicholas-Oddy_880x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "July, Eileen Hall on Intention" , "./../src/img/CMEdi2018/CMEdi2018-JULY-Eileen-Hall_825x1000.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "June, Steve Burnett & Thoren Ferguson on Craft" , "./../src/img/CMEdi2018/CMEdi2018-JUNE-SBurnett+TFerguson_900x1000px.jpg"))       
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "May, Maryam Ghaffari on Commitment" , "./../src/img/CMEdi2018/CMEdi2018-MAY-Maryam-Ghaffari_840x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "November, Rachael Stephen on Restart" , "./../src/img/CMEdi2018/CMEdi2018-NOV-Rachael-Stephen_830x1000px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "December, John Jackson" , "./../src/img/CMEdi2018/CMEdi2018-OCT-Janica-Honey_825x1000px.jpg"))        
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "" , "./../src/img/CMEdi2018/CMEdi2018-COMPOSITE_1-1000x750px.jpg"))
        projectThree.addImage(new ProjectImage("CreativeMornings Edinburgh speaker portraits 2018", "" , "./../src/img/CMEdi2018/CMEdi2018-COMPOSITE_2-1000x750px.jpg"))

        this.projects[0] = projectThree


        // **** Podcasters **** //

        var projectFour = new Project()
        projectFour.setCategory(ProjectFactory.illustrationCategory.name)
        // projectFour.setSubCategory("portraiture")
        projectFour.addImage(new ProjectImage("Adam Buxton", "The Adam Buxton Podcast" , "./../src/img/PODCASTERS/Buxton_880x1000px.jpg"))
        projectFour.addImage(new ProjectImage("Romesh Ranganathan", "Hip-hop Saved my Life" , "./../src/img/PODCASTERS/Buxton_880x1000px.jpg"))
        

        this.projects[2] = projectFour


        // **** TV 2018 **** //

        var projectFive = new Project()
        projectFive.setCategory(ProjectFactory.illustrationCategory.name)
        // projectFive.setSubCategory("portraiture")
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Michaela Coel, Black Earth Rising" , "./../src/img/TV-2018/TV-2018-BLACKEARTHRISING_945x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Richard Madden, Bodyguard" , "./../src/img/TV-2018/TV-2018-BODYGUARD_890x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Brian Tyree Henry, Atlanta" , "./../src/img/TV-2018/TV-2018-ATLANTA_1000x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Benedict Cumberbatch, Patrick Melrose" , "./../src/img/TV-2018/TV-2018-PATRICKMELROSE_915x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Saoirse-Monica Jackson, Derry Girls" , "./../src/img/TV-2018/TV-2018-DERRYGIRLS_1090x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Hugh Grant, A Very English Scandal" , "./../src/img/TV-2018/TV-2018-ENGLISHSCANDAL_940x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Christine Baranski, The Good Fight" , "./../src/img/TV-2018/TV-2018-GOODFIGHT_970x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Jodie Comer, Killing Eve" , "./../src/img/TV-2018/TV-2018-KILLINGEVE_890x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Amy Adams, Sharp Objects" , "./../src/img/TV-2018/TV-2018-SHARPOBJECTS_1000x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "Brian Cox, Succession" , "./../src/img/TV-2018/TV-2018-SUCCESSION_1000x1000px.jpg"))
        projectFive.addImage(new ProjectImage("Best TV of 2018", "" , "./../src/img/TV-2018/TV-2018-composite_814x1000px.jpg"))
                

        this.projects[1] = projectFive


                // **** Trump **** //

        var projectSix = new Project()
        projectSix.setCategory(ProjectFactory.illustrationCategory.name)
        // projectSix.setSubCategory("portraiture")
        projectSix.addImage(new ProjectImage("Donald Trump", "" , "./../src/img/TRUMP/TRUMPportrait_890x1000px.jpg"))
                

        this.projects[5] = projectSix
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