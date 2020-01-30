const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {},
      opts
    );
  });

  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });

  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      // console.log(posData);
      return setTimer(2000);
    })
    .then(data => {
      console.log(data, positionData);
    });

  setTimer(1000).then(() => {
    console.log('Timer done');
  }); //execute after the above line because its an async function and need to wait
  //for Message Queue(what is waiting for an empty stack to execute) and the event loop
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 1000000000; i++) {
//   result += i;
// }
//
// console.log(result);
