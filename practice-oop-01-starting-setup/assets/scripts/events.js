const button = document.querySelector('button');

// button.onclick = function() {
//   alert('alo');
// };

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log('Im disabled');
};

// const boundFunction = buttonClickHandler.bind(this);

// button.onclick = buttonClickHandler;

// buttons.forEach(button => {
//   button.addEventListener('click', buttonClickHandler);
// });

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 3000);

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

// let curElementNumber = 0;

// function scrollHandler() {
//   const distanceToBottom = document.body.getBoundingClientRect().bottom;
//   console.log('Distance: ', distanceToBottom);
//   console.log('client height: ', document.documentElement.clientHeight + 150);

//   if (distanceToBottom < document.documentElement.clientHeight + 150) {
//     const newDataElement = document.createElement('div');
//     curElementNumber++;
//     newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//     document.body.append(newDataElement);
//   }
// }

// window.addEventListener('scroll', scrollHandler); // Infinit scroll

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
});

const div = document.querySelector('div');

div.addEventListener(
  'click',
  event => {
    console.log('Clicked Div');
    console.log(event);
  }
  //,true //Define to events occurs in the capturing phase order
);

button.addEventListener('click', function(event) {
  event.stopPropagation(); //stop ancestor events (parents for example)
  // event.stopImmediatePropagation() //stop others events in the same element
  console.log('Clicked Button');
  // console.log(event);
  console.log(this);
});

const listItem = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItem.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', event => {
  // event.target.classList.toggle('highlight'); // works if we have only one child, the li
  event.target.closest('li').classList.toggle('highlight');
  // form.submit(); // will submit our form insteed execute our submit eventListener
  button.click(); // will simulate a click in the button and execute our eventListener
}); // list propagante / delegate events
