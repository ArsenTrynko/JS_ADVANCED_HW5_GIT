function sum(){
    let n = 0;
    return function(sum){
        n += sum;
        console.log(n);
    }
}

let start = sum();

start(3)
start(5)
start(228)

