////////////////////////////////////////////////////////////////////////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden-element');
hiddenElement.forEach((el) => observer.observe(el));

///////////////////////////////////////////////////////////////////////////

let items = document.querySelectorAll('.main-slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumnail = document.querySelectorAll('.thumnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
    itemActive++;
    if(itemActive >= countItem + 1) {
        itemActive = 0;
    }
    showSlider();
}

prev.onclick = function () {
    itemActive--;
    if(itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
function showSlider() {
    let itemActiveold = document.querySelector('.main-slider .list .item');
    let thumnailActiveOld = document.querySelector('.thumnail .item.active');
    itemActiveold.classList.remove('active');
    thumnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumnail[itemActive].classLoist.add('active');
}

///////////////////////////////////////////////////////////////////////////
const mutedButton = document.getElementById("muted-unmute-button");
const video = document.getElementById("myVideo");
mutedButton.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false; // Unmutes the video
        mutedButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Change the button icon
    } else {
        video.muted = true; // Mutes the video
        mutedButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Change the button icon
    }
});
