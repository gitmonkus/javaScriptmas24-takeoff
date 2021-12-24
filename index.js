const crew = document.getElementById("crew")
const btn = document.getElementById("btn")

// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.

const audio = new Audio('tree.mp3')
const sleigh = new Audio('sleigh.mp3')

function reset() {
    window.location.reload()
}

function image() {
    crew.classList.remove('animate')
    crew.classList.add('cutey')
    crew.innerHTML = `<img src="cutey.png">`
    audio.volume = .4
    audio.play()
    setTimeout(reset, 31000)
}

btn.addEventListener('click', function() {
    crew.classList.add('animate')
    sleigh.play()
    setTimeout(image, 4000)
})