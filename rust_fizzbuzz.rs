fn main(){

    for i in 0..=100 {
        if i % 5 == 0 && i % 3 == 0 {
            println!("FizzBuzz");
        } else if i % 3{
            println!("Fizz");
        } else if i % 5{
            println!("Buzz");
        } else println!("{}",i);
    }


}

