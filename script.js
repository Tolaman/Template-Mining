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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

let services = document.getElementsByClassName('serv-article');
let randomValue = Math.floor(Math.random() * 3);

for (let i = 0; i < services.length; i++) {
    services[i].style.flexShrink = randomValue;
    services[i].style.flexGrow = randomValue;
}

////////////////////////////////////////////////////////////////