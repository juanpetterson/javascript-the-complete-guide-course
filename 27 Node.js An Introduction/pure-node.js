const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  request.on('data', chunck => {
    body.push(chunck);
  });

  request.on('end', () => {
    body = Buffer.concat(body).toString();
    let userName = 'Unknown user';

    if (body) {
      userName = body.split('=')[1];
    }

    console.log(userName);
    response.setHeader('Content-Type', 'text/html');
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"/><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

server.listen(3333);
