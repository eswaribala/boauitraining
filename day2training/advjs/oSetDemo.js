/**
 * Created by BALASUBRAMANIAM on 15-12-2016.
 */
var set = new Set();
set.add(Math.round(Math.random()*1000));
set.add(Math.round(Math.random()*1000));
set.add(Math.round(Math.random()*1000));
set.add(Math.round(Math.random()*1000));
set.add(Math.round(Math.random()*1000));
set.add(Math.round(Math.random()*1000));
set.add(Math.round(Math.random()*1000));
console.log(set);
//union operation
var loanSet = new Set([347,346,5387]);
var fixedSet = new Set([347,4543,54654,435435]);
var result = new Set([...loanSet, ...fixedSet]);
console.log(result);
//intersection
var interResult = new Set(
    [...loanSet].filter(x => fixedSet.has(x)));
console.log(interResult);

var dotnetTrainees=new Set(["Shyam","Ram","Sangeeta"]);
var javaTrainees=new Set(["Shyam","Sunita","Jansy"]);
var interResult = new Set(
    [...dotnetTrainees].filter(x => javaTrainees.has(x)));
console.log(interResult);
//to count the elements
console.log(dotnetTrainees.size);






//difference

var difference1 = new Set(
    [...dotnetTrainees].filter(x => !javaTrainees.has(x)));

var difference2 = new Set(
    [...javaTrainees].filter(x => !dotnetTrainees.has(x)));

var result = new Set([...difference1, ...difference2]);
console.log(result);
