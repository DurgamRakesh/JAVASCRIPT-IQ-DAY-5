//this is example of pass by value
 function sqr(a){
    return a*a
 }
 let b = 10;
 console.log(sqr(b)); 
 console.log(b);

//this is example of pass by reference
let student = {
    name:'abc',
    id: 1001
}
function incid(obj){
    obj.id+=1
}
incid(student);
console.log(student);

// <------------------------------------------------------------->

//this is example of map
const arr = [ 1,2,3,4,5];

const newarr = arr.map((element) => element*2);
console.log(newarr);

//this is example of filter
const arr1 = [ 1,2,3,4,5];

const newarr1 = arr.filter((element) => element > 2);
console.log(newarr1);

// <------------------------------------------------------------->

//this is example of async/await 
let p  = new Promise((res,rej) => {
    setTimeout(() => {
        res('this is promis function')
    }, 5000);
})

async function asyncfunction(){
    let result = await p
    console.log(result);
    console.log('this is async function');
}
asyncfunction();