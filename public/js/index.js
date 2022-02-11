const mainContent = document.getElementsByClassName('mainContent');
const greeting = document.getElementById('greeting');
const callNow = document.getElementById('callNow');
const contactNow = document.getElementById('contactNow');
const inventoryNow = document.getElementById('inventoryNow');
const menu0 = document.getElementById('menu0');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menuPage = document.getElementById('menuPage');
const menuButton= document.getElementById('menuButton');
const burgTop= document.getElementById('burgTop');
const burgMid= document.getElementById('burgMid');
const burgBottom= document.getElementById('burgBottom');
const menuPages = [greeting,menu0,menu1,menu2,menu3];
const nowButtons = [callNow,contactNow,inventoryNow];

function backgroundScroll(){
    console.log('scroll function intitated');
     }
function listenerAdds(){
    backgroundScroll();
    menuOpen();
}
function menuOpen(){
console.log('menuOpen init')
if(menuPage.style.transform!=="translateX(-100vw)"){
    console.log('menuOpen if logic')
    console.log('menuOpen else logic')
menuPage.style.transform="translateX(-100vw)"
}
else{
 menuPage.style.transform="translateX(0vw)"
}
}
function menuOption($zzy){
    console.log('menuOption init')
    $zzy.style.display="block";
for (let i =0;i<menuPages.length;i++)
menuPages[i].style.display="none";

inventoryNow.style.display="none";
callNow.style.display="none";
contactNow.style.display="none";
menuOpen();
}
function closeOption(){
    console.log('closeOption init')
    if(menuPage.style.transform!=="translateX(-100vw)"){
         menuPage.style.transform="translateX(-100vw)"
    }
     for (let i =0;i<menuPages.length;i++){
    menuPages[i].style.display="none";
    nowButtons[i].style.display="block";
    }
           
}

function invDirect(){

   console.log('invDirect init')
   for(let i=0;i<nowButtons.length;i++){
       nowButtons[i].style.display="none";
   }
    greeting.style.display="none";
    menu0.style.display="block";
}