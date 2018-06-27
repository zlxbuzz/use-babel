import 'babel-polyfill'
const a = 1;

const b = async ()=>{

}

const c = {...a}

const d = new Map()

const e = Object.keys({ a: 1 })

console.log(a,b,c,d,e);

var f = [1, 2, 3, 4, 5];

var found = f.find(function(element) {
  return element > 3;
});

console.log(found);

