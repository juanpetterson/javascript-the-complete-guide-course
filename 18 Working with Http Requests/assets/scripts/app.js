const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendXMLHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    //can be added by calling this method multiple times,
    // but once header is added with this method, we cant delete it

    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error('Something went wrong!'));
      }
    };

    xhr.onerror = function() {
      reject(new Error('Failed to send request!'));
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    // body: JSON.stringify(data),
    body: data
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
    .then(response => {
      if ((response.status >= 200) & (response.status < 300)) {
        return response.json();
      } else {
        return response.json().then(errData => {
          console.log(errData);
          throw new Error('Something went wrong - server side.');
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

async function fetchPosts() {
  try {
    while (listElement.firstElementChild) {
      listElement.firstElementChild.remove();
    }

    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );

    const listOfPosts = responseData;

    listOfPosts.forEach(post => {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    });
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title,
    body: content,
    userId
  };

  const formData = new FormData(form); // form is our form element
  //if we pass the form, the FormData will catch our elements and create/append an field
  //with the name attribute of our form fields and his values
  // formData.append('title', title);
  // formData.append('body', content);
  formData.append('userId', userId);
  // formData.append('someFile', 'the file' ,'photo.png');

  const responseData = await sendHttpRequest(
    'POST',
    'https://jsonplaceholder.typicode.com/posts',
    formData
  );

  console.log(responseData);
}

async function deletePost(id) {
  const responseData = await sendHttpRequest(
    'DELETE',
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  console.log(responseData);
}

function removeFromUI(postItem) {
  // postItem.parentElement.removeChild(postItem);
  postItem.remove();
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();

  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postItem = event.target.closest('li');

    deletePost(postItem.id);
    removeFromUI(postItem);
  }
});
