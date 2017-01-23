const util = require('util');


//執行NODE_DEBUG=test node test1  
//1.
// //設定NODE_DEBUG名稱
// const debuglog = util.debuglog('test');
// //只有debuglog和上面的名稱相同時才會有log
// debuglog('this is test');

//2.
//告知使用者使function已經deprecate，不推薦再使用
// var test = util.deprecate(function() {
// } ,'test function: 這是一個deprecate的function');

// test();


//3.util.format(類似於c語言的printf)
// %s - String.
// %d - Number 
// %j - JSON
// var test = util.format(1, 2, 3); // '1 2 3'
// var test1 = util.format('%s:%s', 'foo', 'bar', 'baz'); // 'foo:bar baz'
// console.log(test);
// console.log('---');
// console.log(test1);


//4.
//util.inherits 
//可用來達成繼承的功能
//(不被官方鼓勵使用，官方推薦使用ES6的class與extends
//這部分將在後續ES6章節提到)

// var test = function() {};
// var emitter = require('events').EventEmitter;
// util.inherits(test, emitter);
// test.on('add', function() {
//   console.log('add');
// })
// test.emit('add');
//執行後發現錯誤，原因是繼承後並需new出一個實例才可使用繼承後的東西


//5.
//更改為如下即可
// var test = function() {};
// var emitter = require('events').EventEmitter;
// util.inherits(test, emitter);
// var test1 = new test;
// test1.on('add', function() {
//   console.log('add');
// })
// test1.emit('add');

//6.
//util.inspect
//用來查看深層的json或物件很實用
var myObject = {
   "a":"a",
   "b":{
      "c":"c",
      "d":{
         "e":"e",
         "f":{
            "g":"g",
            "h":{
               "i":"i"
            }
         }
      }
   }
};    
console.log(myObject);
//發現 f: [Object] ，無法顯示
//使用如下即可
console.log(util.inspect(myObject, {depth: null}));
//depth: null 代表console出無限深層的結構，或可改為數字

