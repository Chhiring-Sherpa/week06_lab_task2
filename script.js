const keys = document.getElementById("key");
const coder = document.getElementById("code");

function keycode(e) {
    keys.textContent = `Key: ${e.key === ' ' ? 'Space' : e.key}`;  // Display the key pressed
    coder.textContent = `Code: ${e.which}`;  // Display the code of the key pressed

}
// keys= keys.autocapitalize

window.addEventListener('keydown', keycode);

