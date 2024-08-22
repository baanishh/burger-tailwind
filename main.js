const hamburger=document.getElementById("hamburger")
const nanMenu=document.getElementById("nav-menu")
const navClose=document.getElementById("nav-close")
const navLink=document.querySelectorAll(".nav__link")

navLink.forEach(link=>
    link.addEventListener("click",()=>{
        nanMenu.classList.add("hidden")
    })
)

navClose.addEventListener("click",()=>{
    nanMenu.classList.add("hidden")
})

hamburger.addEventListener("click",()=>{
    nanMenu.classList.remove("hidden")
})

// tabs
const tabs=document.querySelectorAll(".tabs_wrap ul li")
const all=document.querySelectorAll(".item_wrap")
const food=document.querySelectorAll('.food')
const snack=document.querySelectorAll('.snack')
const beverage=document.querySelectorAll('.beverage')

tabs.forEach(tab=>
    tab.addEventListener("click",()=>{
        tabs.forEach(tab=>
            tab.classList.remove("active")
        )
        tab.classList.add("active")

        const tabval=tab.getAttribute("data-tabs")
        
        all.forEach(item=>{
            item.style.display="none"
        })

        if(tabval == 'food'){
            food.forEach(item=>{
                item.style.display="block"
            })
        }
        else if(tabval == 'snack'){
            snack.forEach(item=>{
                item.style.display="block"
            })
        }
        else if(tabval == 'beverage'){
            beverage.forEach(item=>{
                item.style.display="block"
            })
        }
    })
   
)


     // scroll up
     window.addEventListener("scroll",()=>{
            const scrollbtn=document.getElementById("scroll-up")
    
            if(this.scrollY >= 250){
                scrollbtn.classList.remove("-bottom-1/2")
                scrollbtn.classList.add("bottom-4")
            }else{
                scrollbtn.classList.add("-bottom-1/2")
                scrollbtn.classList.remove("bottom-4")
            }
        }
    )


    // scroll header border
    window.addEventListener("scroll",()=>{
        const header=document.getElementById("header")

        if(this.scrollY >= 50){
            header.classList.add("border-b","border-secondaryColor")
        }else{
            header.classList.remove("border-b","border-secondaryColor")
        }
    }
    )




    // dark Mode

    const html=document.querySelector("html")
    const themeBtn=document.getElementById("theme-toggle")

    if(localStorage.getItem("mode")=="dark"){
        darkMode();
    }else{
        lightMode();
    }


    themeBtn.addEventListener("click",()=>{
        if(localStorage.getItem("mode")== "light"){
            darkMode();
        }else{
            lightMode();
        }  
    })

    function darkMode(){
        html.classList.add("dark");
        themeBtn.classList.replace("ri-moon-line","ri-sun-line")
        localStorage.setItem("mode","dark")
    }

    function lightMode(){
        html.classList.remove("dark");
        themeBtn.classList.replace("ri-sun-line","ri-moon-line")
        localStorage.setItem("mode","light")
    }




    // scroll reveal
    ScrollReveal().reveal('.headline',{
        origin:"left",
        distance:"60px",
        delay: 150,
        duration: 800,
        easing: 'ease-in'
    });