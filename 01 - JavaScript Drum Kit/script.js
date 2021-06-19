window.addEventListener('keydown', (e) => {
    e.preventDefault();

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing")
})

let keys = document.querySelectorAll('.key');

console.log(keys);

function removeClass(e) {
    this.classList.remove("playing")
        //console.log(this)
}

keys.forEach(key => {
    key.addEventListener('transitionend', removeClass)
})