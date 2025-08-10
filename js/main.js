// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const mobileNavbar = document.getElementById("mobile-navbar");
  const header = document.getElementById("header");

  if (menuIcon && mobileNavbar) {
    menuIcon.addEventListener("click", () => {
      console.log("Toggle menu clicked");
      mobileNavbar.classList.toggle("hidden");
    });
  } else {
    console.error("Menu icon or mobile navbar not found");
  }

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        header.classList.add("shadow-md", "bg-white", "bg-opacity-90", "backdrop-blur-sm");
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("shadow-md", "bg-white", "bg-opacity-90", "backdrop-blur-sm");
        header.classList.remove("header-scrolled");
      }
    });
  } else {
    console.error("Header element not found");
  }
});






