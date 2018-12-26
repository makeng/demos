/*----------------------------------------------------------------------------------
* about:Promise链生成
* date:2018-12-25
* ----------------------------------------------------------------------------------*/

function Man( str ) {
  this.say = function () {
    const promise = new Promise(( resolve, reject ) => {
      if ( typeof str === "string" ) {
        setTimeout(() => {
          console.log(str);
          resolve(str);
        }, 500);
      } else {
        reject("not string");
      }
    });
    return promise;
  }
}

const man1 = new Man("1");
const man2 = new Man("2");
const man3 = new Man(undefined);
const man4 = new Man("4");

async function chainPromise( arr ) {
  let cnt = arr.length;
  if ( cnt ) {
    const resArr = [];
    try {
      for ( let i = 0; i < cnt; i++ ) {
        const fn = arr[ i ];
        const res = await fn();
        resArr.push(res);
      }
    } catch ( e ) {
      console.error(e);
    }
    return resArr;
  } else {
    return;
  }
}

chainPromise([ man1.say, man2.say, man3.say ]).then(res => {
  console.log(res);
});

