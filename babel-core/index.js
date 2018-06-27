const { transform } = require('babel-core');

const escode = `
  const a = 1;
  console.log(a);
`
const res = transform(escode,{
  presets: ['env']//presets 规则
})
//=> {code,map,ast}

console.log(res.code)
