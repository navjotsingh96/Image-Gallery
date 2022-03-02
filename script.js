let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];


function loadimages() {
    let container = document.getElementById('images_cont');
    container.innerHTML = ``;

    for (let i = 0; i < images.length; i++) {

        container.innerHTML += `<div class="img_box" id="big-img"><img class="bg1" onclick="get_img(${i})" src ="${images[i]}"></div>`;

    }

}

function get_img(i) {

    let container = document.getElementById('images_cont');
    container.innerHTML = `<div id="full-screen${i}"><img id="image_changer" class="image_div" src ="${images[i]}">
    <img src ="close-window-64.png" id= "close_button" 
        onclick="close_img(${i})"><img id="next_click" class="next_arrow" src ="next_arrow.png" onclick="next_image(${i})">
        <img class="back_arrow" src ="back_arrow.png" onclick="back_image(${i})"></div>`;



    let bigimages = document.getElementById('full-screen' + i);
    let button = document.getElementById('close_button');


    bigimages.classList.add('big_screen');
    bigimages.classList.remove('d-none');
    button.classList.remove('d-none');

}




function close_img(i) {

    let bigimages = document.getElementById('full-screen' + i);
    let button = document.getElementById('close_button');

    bigimages.classList.remove('big_screen');
    bigimages.classList.add('d-none');
    button.classList.add('d-none');
    loadimages();

}

function next_image(i) {

    close_img(i);

    if (i == images.length - 1) {
        i = 0;
        get_img(i);

    } else {
        i++;
        get_img(i);

    }

}



function back_image(i) {
    close_img(i);
    if (i == 0) {
        get_img(images.length - 1);
    } else {
        i--;
        get_img(i);
    }


}