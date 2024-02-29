package main

import "fmt"

func fibonacciEvenSum(limit int) int {
	a, b := 1,2
	total := 0
	for a <= limit {
		if a % 2 == 0 {
			total += a
		}
		a, b = b, a + b
	}
	return total
}

func main() {
	limit := 4000000
	result := fibonacciEvenSum(limit)
	fmt.Println("the sum is: ", result)
}