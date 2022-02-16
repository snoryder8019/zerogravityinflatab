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
const nowButtons = [inventoryNow,callNow,contactNow];


function backgroundScroll(){
    console.log('scroll function intitated');
     }
function listenerAdds(){
    backgroundScroll();
    menuOpen();
  //  sliderChange();
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
  
for (let i =0;i<menuPages.length;i++){
menuPages[i].style.display="none";}
$zzy.style.display="block";
menuOpen();
}
function closeOption(){
    console.log('closeOption init')
    if(menuPage.style.transform!=="translateX(-100vw)"){
         menuPage.style.transform="translateX(-100vw)"
    }
     for (let i =0;i<menuPages.length;i++){
    menuPages[i].style.display="none";

    }
    for(let i=0;i<nowButtons.length;i++){
        nowButtons[i].style.display="block"; 
    }
           greeting.style.display="block";
}

function menuDirect($zzy){

   console.log('invDirect init')
   for(let i=0;i<nowButtons.length;i++){
       nowButtons[i].style.display="none";
   }
    greeting.style.display="none";
    $zzy.style.display="block";
}