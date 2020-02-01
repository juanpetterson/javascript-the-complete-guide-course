const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {
    name: 'Juan',
    age: 27,
    hobbies: ['Sports', 'Coding']
  };

  // document.cookie = `uid=${userId}; max-age=2`; //in seconds
  document.cookie = `uid=${userId};`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  cookieData.map(cookie => {
    return cookie.trim();
  });

  console.log(JSON.parse(cookieData[1].split('=')[1]));
});
