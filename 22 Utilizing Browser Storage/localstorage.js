const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u1232';
const user = {
  name: 'Juan',
  age: 27,
  hobbies: ['Sports', 'Coding']
};

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveBtn.addEventListener('click', () => {
  const storedUid = sessionStorage.getItem('uid');
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUid) {
    console.log(storedUid);
  }

  if (storedUser) {
    console.log(storedUser);
  }
});
