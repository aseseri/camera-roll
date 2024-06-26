// Open and close pop-up
const images = document.querySelectorAll(".image");
images.forEach((image)=>{ image.addEventListener("click", clickOnImage)});

const popup = document.getElementsByClassName("popup")[0];
const popupImage = document.querySelector(".popup img");
const popupHeader = document.querySelector(".popup h3");
function clickOnImage(e){
    if(popup.classList.contains("hidden")){
        images.forEach((image)=>(image.classList.add("pop-up-open")));
        popup.classList.remove("hidden");
        e.stopPropagation();    // Prevents clicking an image from opening and closing the popup at once

        // Alters the popup with the clicked image
        const clickedImage = e.target.closest(".image").querySelector("img");
        popupImage.setAttribute("src",clickedImage.getAttribute("src"));
        popupHeader.textContent = clickedImage.getAttribute("alt");

        const event = new Event("open-popup");
        popupImage.dispatchEvent(event);
    }
}

document.getElementsByTagName("main")[0].addEventListener("click", closePopUp);
function closePopUp(e){
    if(!popup.classList.contains("hidden")){
        popup.classList.add("hidden");
        images.forEach((img)=>(img.classList.remove("pop-up-open")));
    }
}

// Clicking on logo
const logo = document.querySelector("nav .logo");
logo.addEventListener("click", ()=>{window.location.assign("https://aseseri.github.io/camera-roll/")});
