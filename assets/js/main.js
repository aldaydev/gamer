document.addEventListener("DOMContentLoaded", (event) => {

    let btn_search = document.querySelector(".navbar__button");
    let input_search = document.querySelector(".search__input");

    btn_search.addEventListener("click", ()=>{
        
        let visible = document.querySelector(".visible");

        if(visible) {
            input_search.style.width = "0";
            input_search.style.padding = "0";
            input_search.classList.remove("visible");
        }else{
            input_search.style.width = "20rem";
            input_search.style.padding = "0 1.5rem";
            input_search.classList.add("visible");
        }

    });

});