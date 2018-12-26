/*----------------------------------------------------------------------------------
* about:Promise链生成
* date:2018-12-25
* ----------------------------------------------------------------------------------*/

function Man( str ) {
  this.say = function () {
    const promise = new Promise(( resolve, reject ) => {
      if ( typeof str === "string" ) {
        console.log(str);
        resolve(str);
      } else {
        reject("not string");
      }
    });
    return promise;
  }
}

const man1 = new Man("1");
const man2 = new Man("2");
const man3 = new Man("3");
const man4 = new Man("4");
const man5 = new Man("5");

let promise = Promise.resolve({});
const res = promise
  .then(man1.say, man2.say)
  .then(man5.say, undefined)
  .then(man3.say, man4.say);

