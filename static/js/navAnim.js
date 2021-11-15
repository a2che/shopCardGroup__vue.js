const select = document.querySelector(".add__prod")
        const stay = 50
        const CLAY_TOP = "24px"

        window.addEventListener("scroll",function(){
            if(stay <= window.pageYOffset){
                select.style.position = "fixed";
                select.style.top = CLAY_TOP
            }else{
                select.style.position = null;
                select.style.top = null;
            }
        })