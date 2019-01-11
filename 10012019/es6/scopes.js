function soma(x) {
  let zz = 19;

  console.log(zz);

  {
    let zz = 20;
    console.log(zz);
  }

  console.log(zz);

  //return e;
}

soma(9);

(function(f) {
  console.log("test" + f);
})(10);

const log = _ => console.log(_)

{
    function hello() {

        log('hello')
    }

    hello()

    {
        function hello() {

            log('hi')
        }
        hello()
    }

    hello()
}

let hello = () => log('good day')
hello()
{
    let hello = () => log('nice!')
    hello()
}
hello()