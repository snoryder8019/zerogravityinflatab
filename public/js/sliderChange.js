const bkgImg0 = document.getElementById('bkgImg0');
let slides = [house1,house2,house3];

function sliderChange(){
    bkgImg0.addEventListener('onload',function(){
        for (let i=0;i<slides.length;i++){
            setInterval(function(){
                bkgImg0.img="bkgImg"+[i];
            },3000)
        }
    })
}