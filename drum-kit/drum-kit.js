const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => {
    key.addEventListener('transitionend', e => {
        if (e.propertyName !=='transform') return;
        e.target.classList.remove('playing');
    });
})

window.addEventListener('keydown',(e)=>{
    console.log(e.keyCode);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    console.log(key);
    key.classList.add('playing');
})

// function playNote() {
//     let note = document.getele
// }