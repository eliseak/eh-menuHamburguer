const menu = document.querySelector("aside");
const botao = document.querySelector(".hamburguer");
const hamburguer = document.querySelectorAll(".hamburguer .retangulo")

function deslizar(){
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
    }
    else{
        menu.classList.add("active");
    }

    if (hamburguer[0].classList.contains("girar")){
        hamburguer[0].classList.remove("girar");
        hamburguer[0].classList.remove("maior");

        hamburguer[1].classList.remove("transparente");
        
        hamburguer[2].classList.remove("girar3");
        hamburguer[2].classList.remove("maior");

    }
    else{
        hamburguer[0].classList.add("girar");
        hamburguer[0].classList.add("maior");

        hamburguer[1].classList.add("transparente");
        
        hamburguer[2].classList.add("girar3");
        hamburguer[2].classList.add("maior");

    }

    

}

botao.onclick = deslizar;