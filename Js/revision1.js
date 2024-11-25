// task 1
// var a;
// a = 0;
//  a++;
// alert(a);

// task 2
let count = 0;
const inc = () =>{
    let count = 0 ;
    return ()=>{
        return count++;
    }
}
const counter1 = inc(); 
const counter2 = inc();
console.log(counter1());
console.log(counter2());
