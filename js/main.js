// --------------
// testimonial Slider 
// ---------------
function   testimonialSlider()
{
    const  carouselOne = document.getElementById('carouselOne')
    if(carouselOne){ // if the element exits //
        carouselOne.addEventListener('slid.bs.carousel',function () {
            const activeItem=this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
            activeItem.getAttribute("data-js-testimonial-img");
        })
    }

}
testimonialSlider();
// --------------
// testimonial Slider  end
// ---------------


 
// --------------
// video
// ---------------

function coursePreviewVideo(){
    const  coursePreviewModal = document.querySelector(".js-course-preview-modal"); 
    if(coursePreviewModal){ // if the element exists //
        coursePreviewModal.addEventListener("shown.bs.modal", function(){
            this.querySelector(".js-course-preview-modal-video").play();
            this.querySelector(".js-course-preview-modal-video").currentTime = 0 ;
        } )
        coursePreviewModal.addEventListener("hide.bs.modal",function(){
            this.querySelector(".js-course-preview-modal-video").paise();
        } )
    }
}
coursePreviewVideo()
// --------------
// video end
// ---------------


// --------------
// header menu 
// ---------------
    function headerMenu(){
        const menu = document.querySelector(".js-header-menu"),
        backdrop = document.querySelector(".js-header-backdrop"),
        menuCollapseBreakepoint = 991;
        

        function toggleMenu(){
            menu.classList.toggle("open");
            backdrop.classList.toggle("active");
            document.body.classList.toggle("overflow-hidden");

        }
    
        document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
            item.addEventListener("click" , toggleMenu );
        }) ; 
        
    }

    headerMenu()
    









// --------------
// Style switcher start
// ---------------

    function styleSwitcherToggle(){
    const styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler")
    styleSwitcherToggler.addEventListener("click" , function() {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times")
        this.querySelector("i").classList.toggle("fa-cog")


    })    
    }
    styleSwitcherToggle()


// --------------
// Style switcher end
// ---------------


// --------------
//  Theme Colors
// ---------------

    function themeColor(){
        const colorStyle = document.querySelector(".js-color-style"),
        themeColorcontainer = document.querySelector(".js-theme-colors")
        themeColorcontainer.addEventListener("click" ,({target}) =>  {
          if(target.classList.contains("js-theme-color-item")){
            localStorage.setItem("color" , target.getAttribute("data-js-theme-color"))  
            setcolor(); 
          }
        })
        function setcolor(){
            let path = colorStyle.getAttribute("href").split("/");
            path = path.slice(0, path.length-1)
            console.log(path);
            colorStyle.setAttribute("href" , path.join("/") + "/" + localStorage.getItem("color") + ".css" )  
            if(document.querySelector(".js-theme-color-item.active")){
                document.querySelector(".js-theme-color-item.active").classList.remove("active")
              }
                document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]" ).classList.add("active");
           
        }
        if(localStorage.getItem("color") !== null ){
           setcolor()
        }
        else {
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color=" + defaultColor + "]" ).classList.add(".active")
            
        }
    }
    themeColor()



// --------------
//  Theme Colors end
//---------------



// --------------
//  Theme Light & and dark mode
//---------------

    function themeLightDark(){
        const darkModeCheckbox= document.querySelector(".js-dark-mode");
        darkModeCheckbox.addEventListener("click", function(){
            if(this.checked){
                localStorage.setItem("theme-dark", "true")
            }
            else{
                localStorage.setItem("theme-dark", "false")

            }
            themeMode()
        })
        function themeMode(){
            if(localStorage.getItem("theme-dark") === "false" ){
                document.body.classList.remove("t-dark")
            }
            else{
                document.body.classList.add("t-dark")
 
            }
        }
        if(localStorage.getItem("theme-dark")  !== null ){
            themeMode()
        }
       if(document.body.classList.contains("t-dark")){
        darkModeCheckbox.checked = true;  
       }
    }   
    themeLightDark()
    












// --------------
//  Theme Light & and dark mode end
//---------------



// --------------
//  Theme glass start 
//---------------

function themeGlassEffect(){
    const  glassEffectCheckbox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-sytle") ;

    glassEffectCheckbox.addEventListener("click", function()  {
        if(this.checked){
            localStorage.setItem("glass-effect", "true");
        }
        else{
            localStorage.setItem("glass-effect", "false");
        }
        glass();
    } )  ;
  
    function glass(){
        if(localStorage.getItem("glass-effect") === "true"){
            glassStyle.removeAttribute("disabled");
        }
         else {
            glassStyle.disabled = true; 
        }
        if(localStorage.getItem("glass-effect") !== null){
            glass();
        }
        if(!glassStyle.hasAttribute("disable")){
            glassEffectCheckbox.checked = true;
        }
    }
}
themeGlassEffect();



// --------------
//  Theme glass end 
//---------------

