let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler .onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

let button = document.querySelector("body .content a");
button.addEventListener("click", ()=>{
  const span = document.querySelector("a");
  button.style.paddingRight = "10px";
  span.style.visibility = "visible";
  setTimeout(() => {
    span.style.visibility = "hidden";
    button.style.transistion = ".3s ease-in-out";
    button.style.paddingRight = "0px";
  }, 3000);
})
