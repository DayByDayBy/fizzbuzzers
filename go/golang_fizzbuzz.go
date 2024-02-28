package main

import (
	"fmt"
)

func main() {
	for i := 0; i <= 100; i++ {
		fizzbuzz(i)
	}
}

func fizzbuzz(i int) {
	fizz := "Fizz"
	buzz := "Buzz"

	if i%15 == 0 {
		fmt.Println(fizz + buzz)
	} else if i%5 == 0 {
		fmt.Println(buzz)
	} else if i%3 == 0 {
		fmt.Println(buzz)
	} else {
		fmt.Println(i)
	}
}
