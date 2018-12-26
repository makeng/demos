/*----------------------------------------------------------------------------------
* about:Promise链生成
* date:2018-12-25
* ----------------------------------------------------------------------------------*/

function Man( str ) {
  this.say = function () {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(str);
        resolve(str);
      }, 500);
    });
  }
}

const man1 = new Man("1");
const man2 = new Man("2");
const man3 = new Man("3");

async function chain( arr ) {
  let cnt = arr.length;
  if ( cnt ) {
    const resArr = [];
    for ( let i = 0; i < cnt; i++ ) {
      const fn = arr[ i ];
      const res = await fn();
      resArr.push(res);
    }
    return resArr;
  } else {
    return;
  }
}

chain([ man1.say, man2.say, man3.say ]).then(res => {
  console.log(res);
});

