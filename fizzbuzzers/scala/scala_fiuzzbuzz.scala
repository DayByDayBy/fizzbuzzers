object FizzBuzz{
    def main(args: Array[String]): Unit ={
        (1 to 100).foreach { i => 
        println(fizzbuzz(i))
    }
    }
    
    def fizzbuzz(n: Int): String = n match{
        case _ if n % 15 == 0 => "FizzBuzz"
        case _ if n % 5 == 0 => "Buzz"
        case _ if n % 3 == 0 => "Fizz"
        case _ => n.toString
    }
}

    

