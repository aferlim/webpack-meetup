// function test() {
//     return ''
// }

// const test = () => ({ ob: 1 });

// console.log(test());

const Api = { id: 1 };
const Mock = { id: 2 };

// express
const request = func1(Api);

// mocha
const requestmocha = func1(Mock);

const log = _ => console.log(_);

log(requestmocha(1));
log(request(1));

{
  function func1(apiClient) {
    return idsku =>
      idsku === 1
        ? {
            sku: 1,
            apiClient
          }
        : {};
  }
}
