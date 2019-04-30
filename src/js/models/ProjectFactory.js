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

        this.projects[12] = projectOne

        // **** KEEPER Oct2018 **** //
        var projectTwo = new Project()
        projectTwo.setCategory(ProjectFactory.illustrationCategory.name)
        // projectTwo.setSubCategory("editorial")
        projectTwo.addImage(new ProjectImage("Stuart MacPherson for The Keeper magazine", "Winter 2018", "./../src/img/KEEPER-OCT18/Keeper-Oct18-MAIN-IMAGE_720x1000px.jpg"))
        projectTwo.addImage(new ProjectImage("Drop-in image,The Keeper magazine", "", "./../src/img/KEEPER-OCT18/Keeper-Oct18-DROPIN-564x500px.jpg"))
        projectTwo.addImage(new ProjectImage("The Keeper magazine", "Winter 2018", "./../src/img/KEEPER-OCT18/Keeper-Oct18-Page1-750x1000px.jpg"))

        this.projects[11] = projectTwo


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

        this.projects[2] = projectThree


        // **** Podcasters **** //

        var projectFour = new Project()
        projectFour.setCategory(ProjectFactory.illustrationCategory.name)
        // projectFour.setSubCategory("portraiture")
        projectFour.addImage(new ProjectImage("Adam Buxton", "The Adam Buxton Podcast" , "./../src/img/PODCASTERS/Buxton_880x1000px.jpg"))
        projectFour.addImage(new ProjectImage("Romesh Ranganathan", "Hip-hop Saved my Life" , "./../src/img/PODCASTERS/HipHop_900x1000.jpg"))
        

        this.projects[14] = projectFour


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
                

        this.projects[5] = projectFive


                // **** Trump **** //

        var projectSix = new Project()
        projectSix.setCategory(ProjectFactory.illustrationCategory.name)
        // projectSix.setSubCategory("portraiture")
        projectSix.addImage(new ProjectImage("Donald Trump", "portrait, 2018" , "./../src/img/TRUMP/TRUMPportrait_890x1000px.jpg"))
                

        this.projects[13] = projectSix


                // **** This is America **** //

        var projectSeven = new Project()
        projectSeven.setCategory(ProjectFactory.illustrationCategory.name)
        // projectSeven.setSubCategory("portraiture")
        projectSeven.addImage(new ProjectImage("Donald Glover, This is America", "" , "./../src/img/THIS-IS-AMERICA/ThisIsAmerica-PortraitA_885x1000px.jpg"))
        projectSeven.addImage(new ProjectImage("Donald Glover, This is America", "" , "./../src/img/THIS-IS-AMERICA/ThisIsAmerica-COLLAGE_700x1000px.jpg"))
        projectSeven.addImage(new ProjectImage("Donald Glover, This is America", "" , "./../src/img/THIS-IS-AMERICA/ThisIsAmerica-PortraitB_700x1000px.jpg"))
        projectSeven.addImage(new ProjectImage("Donald Glover, This is America", "" , "./../src/img/THIS-IS-AMERICA/ThisIsAmerica-PortraitC_1000x690px.jpg"))
                

        this.projects[16] = projectSeven


                // **** Hannibals **** //

        var projectEight = new Project()
        projectEight.setCategory(ProjectFactory.illustrationCategory.name)
        // projectEight.setSubCategory("portraiture")
        projectEight.addImage(new ProjectImage("Hannibal", "Mads Mikkelsen" , "./../src/img/HANNIBALS/Hannibal-portraitC_745x1000px.jpg"))
        projectEight.addImage(new ProjectImage("Hannibal", "Mads Mikkelsen" , "./../src/img/HANNIBALS/Hannibal-portraitB_995x1000px.jpg"))
        projectEight.addImage(new ProjectImage("Hannibal", "Mads Mikkelsen" , "./../src/img/HANNIBALS/Hannibal-portraitA_1000x860px.jpg"))
        projectEight.addImage(new ProjectImage("Hannibal", "Mads Mikkelsen" , "./../src/img/HANNIBALS/Hannibal-portraitD_1000x880px.jpg"))
       
                

        this.projects[15] = projectEight


                // **** Vegans **** //

        var projectNine = new Project()
        projectNine.setCategory(ProjectFactory.illustrationCategory.name)
        // projectNine.setSubCategory("portraiture")
        projectNine.addImage(new ProjectImage("Vegan characters", "Chef" , "./../src/img/VEGANISM/Vegan-Chef_820x1000px.jpg"))
        projectNine.addImage(new ProjectImage("Vegan characters", "Baker" , "./../src/img/VEGANISM/Vegan-Baker_910x1000px.jpg"))
        projectNine.addImage(new ProjectImage("Vegan characters", "Trainer" , "./../src/img/VEGANISM/Vegan-Trainer_665x1000px.jpg"))
        projectNine.addImage(new ProjectImage("Vegan characters", "Parent" , "./../src/img/VEGANISM/Vegan-Mum_740x1000px.jpg"))
        projectNine.addImage(new ProjectImage("Vegan mock up", "(text: BBC News)" , "./../src/img/VEGANISM/Vegans-mock-up-3_1000x640px.jpg"))
        projectNine.addImage(new ProjectImage("Vegan mock up", "(text: BBC News)", "./../src/img/VEGANISM/Vegans-mock-up_1000x785px.jpg"))
       
                

        // this.projects[8] = projectNine


                // **** Oscars 2019 **** //

        var projectTen = new Project()
        projectTen.setCategory(ProjectFactory.illustrationCategory.name)
        // projectNine.setSubCategory("portraiture")
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Best Supporting Actor portraits" , "./../src/img/OSCARS2019/OSCARS2019-SuppActor-COMPOSITEv2_430x800px.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Best Supporting Actress portraits" , "./../src/img/OSCARS2019/OSCARS2019-SuppActress-COMPOSITEv2_540x1000px.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Best Actor Oscars portraits" , "./../src/img/OSCARS2019/OSCARS2019-BestActor-COMPOSITE-v2_430x800.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Best Actress portraits" , "./../src/img/OSCARS2019/OSCARS2019-BestActress-COMPOSITEv2_540x1000px.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Sam Elliott, A Star is Born" , "./../src/img/OSCARS2019/OSCARS2019-SuppActor-SAMELLIOT_580x750px.jpg"))     
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Olivia Coleman, The Favourite" , "./../src/img/OSCARS2019/OSCARS2019-BestActress-OliviaColemanv2_730x1000px.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Emma Stone, The Favourite" , "./../src/img/OSCARS2019/OSCARS2019-SuppActress-EMMASTONE_600x800px.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Rachel Weiss, The Favourite" , "./../src/img/OSCARS2019/OSCARS2019-SuppActress-RACHELWEISS_580x800.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Viggo Mortensen, Green Book" , "./../src/img/OSCARS2019/OSCARS2019-BestActor-ViggoMortensen_570x800px.jpg"))
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Richard E Grant, Can You Ever Forgive Me?" , "./../src/img/OSCARS2019/OSCARS2019-SuppActor-RICHARDEGRANT_640x800px.jpg")) 
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Melissa McCarthy, Can You Ever Forgive Me?" , "./../src/img/OSCARS2019/OSCARS2019-BestActress-MelissaMcCarthy_585x800px.jpg"))        
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Christian Bale, Vice" , "./../src/img/OSCARS2019/OSCARS2019-BestActor-ChristianBale_825x1000px.jpg"))        
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Sam Rockwell, Vice" , "./../src/img/OSCARS2019/OSCARS2019-SuppActor-SAMROCKWELL_650800px.jpg"))        
        projectTen.addImage(new ProjectImage("Oscar Nominees 2019", "Regina King, If Beale Street could Talk" , "./../src/img/OSCARS2019/OSCARS2019-SuppActress-REGINAKINGv2_555x800px.jpg"))        

        this.projects[3] = projectTen


                // **** Tove Jansson **** //

        var projectEleven = new Project()
        projectEleven.setCategory(ProjectFactory.illustrationCategory.name)
        // projectEleven.setSubCategory("portraiture")
        projectEleven.addImage(new ProjectImage("Tove Jansson", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-TOVEJANSSON_615x800px.jpg"))
        
       
                

        this.projects[6] = projectEleven


                // **** Carl Sagan **** //

        var projectTwelve = new Project()
        projectTwelve.setCategory(ProjectFactory.illustrationCategory.name)
        // projectTwelve.setSubCategory("portraiture")
        projectTwelve.addImage(new ProjectImage("Carl Sagan", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-CARLSAGAN_605x800px.jpg"))
        projectTwelve.addImage(new ProjectImage("Carl Sagan", "alternate version, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-CARLSAGAN(TEXT)_605x800px.jpg"))
        
       
                

        this.projects[7] = projectTwelve


                // **** Sharon Van Etten **** //

        var projectThirteen = new Project()
        projectThirteen.setCategory(ProjectFactory.illustrationCategory.name)
        // projectThirteen.setSubCategory("portraiture")
        projectThirteen.addImage(new ProjectImage("Sharon Van Etten", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SHARONVANETTEN-composite_665x800px.jpg"))
        projectThirteen.addImage(new ProjectImage("Sharon Van Etten", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SHARONVANETTEN-A_665x800px.jpg"))
        projectThirteen.addImage(new ProjectImage("Sharon Van Etten", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SHARONVANETTEN-B_665x800px.jpg"))
        projectThirteen.addImage(new ProjectImage("Sharon Van Etten", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SHARONVANETTEN-C_665x800px.jpg"))
        projectThirteen.addImage(new ProjectImage("Sharon Van Etten", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SHARONVANETTEN-D_665x800px.jpg"))
        
       
                

        this.projects[1] = projectThirteen


                        // **** Widows **** //

        var projectFourteen = new Project()
        projectFourteen.setCategory(ProjectFactory.illustrationCategory.name)
        // projectFourteen.setSubCategory("portraiture")
        projectFourteen.addImage(new ProjectImage("Viola Davis, Widows", "portrait, 2019" , "./../src/img/WIDOWS/Widows-ViolaDavis_1_720x800px.jpg"))
        projectFourteen.addImage(new ProjectImage("Viola Davis, Widows", "portrait, 2019" , "./../src/img/WIDOWS/Widows-ViolaDavis_2_740x800px.jpg"))
        
       
                

        this.projects[9] = projectFourteen


                        // **** Arundhati Roy **** //

        var projectFifteen = new Project()
        projectFifteen.setCategory(ProjectFactory.illustrationCategory.name)
        // projectFifteen.setSubCategory("portraiture")
        projectFifteen.addImage(new ProjectImage("Arundhati Roy", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-ARUNDHATIROY-v3_800x720px.jpg"))
        projectFifteen.addImage(new ProjectImage("Arundhati Roy", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-ARUNDHATIROY-v2_740x800px.jpg"))

       
                

        this.projects[10] = projectFifteen




                        // **** Serena Williams **** //

        var projectsixteen = new Project()
        projectsixteen.setCategory(ProjectFactory.illustrationCategory.name)
        // projectsixteen.setSubCategory("portraiture")
        projectsixteen.addImage(new ProjectImage("Serena Williams", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SERENAWILLIAMS-B_800x775px.jpg"))
        projectsixteen.addImage(new ProjectImage("Serena Williams", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SERENAWILLIAMS-A.jpg"))
        projectsixteen.addImage(new ProjectImage("Serena Williams", "portrait, 2019" , "./../src/img/PORTRAIT-CHALLENGE-2019/Portrait-Challenge-SERENAWILLIAMS-A_770x800px.jpg"))

       
                

        this.projects[8] = projectsixteen



                                // **** GitPrime **** //

        var projectseventeen = new Project()
        projectseventeen.setCategory(ProjectFactory.illustrationCategory.name)
        // projectseventeen.setSubCategory("portraiture")
        projectseventeen.addImage(new ProjectImage("Blog illustrations, GitPrime Inc", "Randy Shoup portrait, 2019" , "./../src/img/GITPRIME/GitPrime-RandyShoup_LoRes.jpg"))
        projectseventeen.addImage(new ProjectImage("Blog illustrations, GitPrime Inc", "Juan Pablo Buritica portrait, 2019" , "./../src/img/GITPRIME/GitPrime-JPBuritica_v2-LoRes.jpg"))
        projectseventeen.addImage(new ProjectImage("Blog illustrations, GitPrime Inc", "Kimber Lockhart portrait, 2019" , "./../src/img/GITPRIME/GitPrime-KimberLockhart_LoRes.jpg"))

       
                

        this.projects[4] = projectseventeen
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