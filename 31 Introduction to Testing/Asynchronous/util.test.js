// jest.mock('./http.js');
// jest.mock('./axios.js');
//Jest.js will automatically use mocks of global node_modules
//So, we dont need to set jest.mock for axios

const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});
