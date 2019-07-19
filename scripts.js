const divs = document.querySelectorAll('div'); //selects all divs
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); //stop bubbling this event. I clicked the one that I actually want
    // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, //run the function on the way down rather than on the way up
    once: true // listens for a click and then unbinds itself
}));

button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  });