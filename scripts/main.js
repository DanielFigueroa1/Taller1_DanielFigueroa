const imageNav__leftArrow = document.querySelector(".imageNav__leftArrow"); //const no cambia, var si, referenciar la imagen
const imageNav__content = document.querySelector(".imageNav__content");
const imageNav__rightArrow = document.querySelector(".imageNav__rightArrow");

var zombie = document.querySelectorAll(".zombie")


var imageNumber = 0;
imageNav__leftArrow.addEventListener("click", ()=>{

    if (imageNumber < 0){
        imageNumber = 3
    } else {
        imageNumber--;
    }
    
    manageImage();
    }
);

imageNav__content.addEventListener("click", ()=>{
    switch (imageNumber) {
        case 0:
        window.location.hash = "#history";
        break;
        case 1:
            window.location.hash = "#about";
            break;
        case 2:
            window.location.hash = "#gallery";
            break;
        case 3:
            window.location.hash = "#support";
        }
    }
)

imageNav__rightArrow.addEventListener("click", ()=>{

    if (imageNumber++ < 3){
        
    } else {
        imageNumber = 0;
    }
    
    manageImage();
    }
);

function manageImage (){

    switch (imageNumber) {
        case 0:
        imageNav__content.setAttribute("src","./Imagenes/Iconointro0.png");
        break;
        case 1:
            imageNav__content.setAttribute("src","./Imagenes/Iconointro1.png");
            break;
        case 2:
            imageNav__content.setAttribute("src","./Imagenes/Iconointro2.png");
            break;
        case 3:
            imageNav__content.setAttribute("src","./Imagenes/Iconointro3.png");
    }

}

document.addEventListener('click', function(e){

    console.log(e.target)

    let target = e.target;
    if(target.classList.contains ("zombie")){
        
        target.setAttribute("src","./Imagenes/cabezaZombie2.png");
    }
  });


