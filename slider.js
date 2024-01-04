/*button*/
let next_button = document.getElementById('next');
let prev_button = document.getElementById('previous');

/*dots*/
let dots_list = document.querySelectorAll('.dots li');

/*imge list*/
let image_list = document.querySelectorAll('.list div')

/*active that indext of image showing on screen*/
let active = 0;



/*auto slide*/
let start = Date.now();
const DELAY = 6000; //ms



/*funtion */
function nextImage(){
    image_list[active].classList.remove('active_img');
    dots_list[active].classList.remove('active_dot');
    active ++;
    if(active>2)
        active = 0;
    image_list[active].classList.add('active_img');
    dots_list[active].classList.add('active_dot');
}

function prevImage(){
    image_list[active].classList.remove('active_img');
    dots_list[active].classList.remove('active_dot');
    active --;
    if(active<0)
        active = 2;
    image_list[active].classList.add('active_img');
    dots_list[active].classList.add('active_dot');
}

/*button*/
next_button.onclick = function(){
    start = Date.now();
    nextImage();
}

prev_button.onclick = function(){
    start = Date.now();
    prevImage();
}

/*auto slide*/

//setInterval(nextImage, 5000);


/*dots*/

// dots_list.forEach(dot => {
//     dot.onclick = function(){
//         document.querySelectorAll(".active_dot")[0].classList.remove("active_dot");
//         dot.classList.add("active_dot");
//         image_list[active].classList.remove("active_img");
//         active = dots_list.indexOf(dot);
//         console.log(active);
//         image_list[active].classList.add("active_img");
//     }
// });

for(let i=0; i<3; i++){
    dots_list[i].onclick = function(){
        start = Date.now();
        document.querySelectorAll(".active_dot")[0].classList.remove("active_dot");
        dots_list[i].classList.add("active_dot");
        image_list[active].classList.remove("active_img");
        active = i;
        image_list[active].classList.add("active_img");
    }
}

/*auto slide*/
function autoslide() {
    if (Date.now() - start >= DELAY) {
        start = Date.now();
        nextImage();
    }

    setTimeout(autoslide, 100);
}

autoslide();