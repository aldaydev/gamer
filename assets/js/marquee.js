document.addEventListener("DOMContentLoaded", (event) => {

    let marquee = (selector_list, speed) => {

        const list = document.querySelector(selector_list);
        let i = 0;

        setInterval(() => {
            list.style.marginLeft = `-${i}px`;

            if(i > list.clientWidth) {
                i = 0;
            }

            i = i + speed;
            
        }, 0);

    }

    marquee(".marquee__list", 0.2);

});