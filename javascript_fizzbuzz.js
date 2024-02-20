for (let i = 1; i <= 100; i++) {
    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz")
    } else if (i%3 ===0){
        console.log("Fizz")
    } else if (i%5 === 0){
        console.log("Buzz")
    } else { console.log(i)
    }
}


// node javascript_fizzbuzz.js to run, or wrap it in some HTML, swap out the console log approach for html elements