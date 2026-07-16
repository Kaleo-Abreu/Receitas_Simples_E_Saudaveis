const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


btn.addEventListener("click", () => {

    if(menu.classList.contains("hidden")){

        menu.classList.remove("hidden");

        menu.animate(
            [
                {
                    transform: "translateX(80px)",
                    opacity: 0
                },
                {
                    transform: "translateX(0)",
                    opacity: 1
                }
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );


        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {


        menu.animate(
            [
                {
                    transform: "translateX(0)",
                    opacity: 1
                },
                {
                    transform: "translateX(80px)",
                    opacity: 0
                }
            ],
            {
                duration: 300,
                easing: "ease-in"
            }
        );


        setTimeout(() => {
            menu.classList.add("hidden");
        }, 300);


        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});