// Custom JavaScript


// when images wrapped by button is clicked
let blueButton = document.querySelector('.blueButton');
let redButton = document.querySelector('.redButton');
let greenButton = document.querySelector('.greenButton');
let purpleButton = document.querySelector('.purpleButton');
let orangeButton = document.querySelector('.orangeButton');


//reference the section with id dynamicContent
let section = document.querySelector('#dynamicContent');
//reference image 
let image = document.querySelector('#dynamicImage');
//reference header 
let header = document.querySelector('#dynamicHeader');
//reference paragraph 
let p = document.querySelector('#dynamicPara');
//reference the dynamic div
let div = document.querySelector(".dynamicDiv");

//container
let container = document.querySelector('.container');

//logo at the top left corner referenced in logo variable
let logo = document.querySelector('.logo');
let logoDiv = document.querySelector('.logoDiv');

blueButton.addEventListener('click', () => {
    //m9
    image.setAttribute("src", "img/m9_large.jpg");
    image.setAttribute("alt", "car");
    div.appendChild(image);

    //change the top logo
    logo.setAttribute("src", "img/automoblox_logo_blue.jpg");
    logo.setAttribute("alt", "car");
    logoDiv.appendChild(logo);

    //dynamic header
    let dynamicTitle = document.querySelector('.dynamicTitle');
    let dynamicPara = document.querySelector('.dynamicPara');

    dynamicTitle.style.backgroundColor = "#22BADC";
    dynamicTitle.innerText = 'M9 Sport-Van';
    dynamicPara.innerText = 'Item# 985006';
    

})

redButton.addEventListener('click', () => {
    //c9
    image.setAttribute("src", "img/c9_large.jpg");
    image.setAttribute("alt", "car");
    div.appendChild(image);

    //change the top logo
    logo.setAttribute("src", "img/automoblox_logo.jpg");
    logo.setAttribute("alt", "car");
    logoDiv.appendChild(logo);

    //dynamic header
    let dynamicTitle = document.querySelector('.dynamicTitle');
    let dynamicPara = document.querySelector('.dynamicPara');

    dynamicTitle.style.backgroundColor = "#D4272E";
    dynamicTitle.innerText = 'C9 Sports Car';
    dynamicPara.innerText = 'Item# 985002';
})

greenButton.addEventListener('click', () => {
   //t9
    image.setAttribute("src", "img/t9_large.jpg");
    image.setAttribute("alt", "car");
    div.appendChild(image);

    //change the top logo
    logo.setAttribute("src", "img/automoblox_logo_green.jpg");
    logo.setAttribute("alt", "car");
    logoDiv.appendChild(logo);

    //dynamic header
    let dynamicTitle = document.querySelector('.dynamicTitle');
    let dynamicPara = document.querySelector('.dynamicPara');

    dynamicTitle.style.backgroundColor = "#30E423";
    dynamicTitle.innerText = 'T9 Pick-Up';
    dynamicPara.innerText = 'Item# 985003';
})

purpleButton.addEventListener('click', () => {
   //x9
   image.setAttribute("src", "img/x9_large.jpg");
   image.setAttribute("alt", "car");
   div.appendChild(image);

   //change the top logo
   logo.setAttribute("src", "img/automoblox_logo_purple.jpg");
   logo.setAttribute("alt", "car");
   logoDiv.appendChild(logo);

   //dynamic header
   let dynamicTitle = document.querySelector('.dynamicTitle');
   let dynamicPara = document.querySelector('.dynamicPara');

   dynamicTitle.style.backgroundColor = "#A521D1";
   dynamicTitle.innerText = 'X9 Sport Utility';
   dynamicPara.innerText = 'Item# 985005';
})

orangeButton.addEventListener('click', () => {
   //a9
   image.setAttribute("src", "img/a9_large.jpg");
   image.setAttribute("alt", "car");
   div.appendChild(image);

   //change the top logo
   logo.setAttribute("src", "img/automoblox_logo_orange.jpg");
   logo.setAttribute("alt", "car");
   logoDiv.appendChild(logo);

   //dynamic header
   let dynamicTitle = document.querySelector('.dynamicTitle');
   let dynamicPara = document.querySelector('.dynamicPara');

   dynamicTitle.style.backgroundColor = "#DA8025";
   dynamicTitle.innerText = 'A9 Compact';
   dynamicPara.innerText = 'Item# 985004';
})