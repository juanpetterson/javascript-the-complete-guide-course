const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
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
  // let positionData;
  getPosition()
    .then(
      posData => {
        positionData = posData;
        // console.log(posData);
        return setTimer(2000);
      },
      err => {
        console.log(err);
      }
    )
    .catch(err => {
      console.log(err);
      return 'on we go';
    }) //only catch the above errors, the 'then' below will execute normally and it not cancel the promise
    .then(data => {
      console.log(data, positionData);
    })
    .finally(() => {
      console.log('This is the Finally');
    });

  setTimer(1000).then(() => {
    console.log('Timer done');
  }); //execute after the below line because its an async function and need to wait
  //for Message Queue(what is waiting for an empty stack to execute) and the event loop
  console.log('Getting position...');
}

async function trackUserHandlerAsync() {
  let posData;
  let timerData;

  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }

  setTimer(1000).then(() => {
    console.log('Timer done');
  });

  console.log(timerData, posData);
}

button.addEventListener('click', trackUserHandlerAsync);

// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// });

// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
//   console.log(promiseData);
// }); // if one promise fails, all the others will not execute

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
}); // execute all promises even if one fails

// let result = 0;
// for (let i = 0; i < 1000000000; i++) {
//   result += i;
// }
//
// console.log(result);
