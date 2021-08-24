


let imagesArray = [
    "./img/turtle-baby.jpg",
    "./img/image1.jpg",
    "./img/image2.jpg",
    "./img/image3.jpg",
    "./img/image4.jpg",
    "./img/image5.jpg",
    "./img/image6.jpg",
    "./img/image7.jpg",
    "./img/image8.jpg",
  ];
let switches = document.querySelectorAll(".switch");

for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("mouseover", function(){
        document.querySelector("#display_picture").src = imagesArray[i];
        imagesArray[i].classList.add = ("menu_out")
    })
}


let Name = document.querySelector("#name")
let email = document.querySelector("#email")
let form = document.querySelector("#form")
let error = document.querySelector ("#error")
let error2 = document.querySelector ("#error2")

form.addEventListener("submit",(e)=> {
    let messages = [];
    if (Name.value === "" || Name.value == null){
        messages.push ("*Mandatory Field")
    }
    
    if (messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join(",")
    }
    
})

form.addEventListener("submit",(e)=> {
    let messages = [];
    if (email.value === "" || email.value == null){
        messages.push ("*Mandatory Field")
    }
    
    if (messages.length > 0){
        e.preventDefault()
        error2.innerText = messages.join(",")
    }
    
})




