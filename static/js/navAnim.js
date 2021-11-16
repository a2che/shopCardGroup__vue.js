const select = document.querySelector(".add__prod")
        const stay = 57
        const CLAY_TOP = "24px"

        window.addEventListener("scroll",function(){
            if(window.innerWidth > '768'){
                if(stay <= window.pageYOffset ){
                    select.style.position = "fixed";
                    select.style.top = CLAY_TOP
                }else{
                    select.style.position = null;
                    select.style.top = null;
                }
            }
            
        })