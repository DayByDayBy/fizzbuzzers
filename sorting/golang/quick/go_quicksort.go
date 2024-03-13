package sorting

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func quicksort(data []int) []int{

	if len(data) <=1 {
		return data
	} else {
		pivot := data[0]
		var left, right []int
		for _, x := range data[1:]{
			if x < pivot{
				left = append(left, x)
			} else {
				right = append(right, x)
			}
		}
		return append(append(quicksort(left), pivot), quicksort(right)...)
	}
}

func main(){
	content, err := os.ReadFile("../data.txt")
	if err != nil{
		panic (err)
	}
	strData := string(content)
	strData = strings.TrimSpace(strData)
	strNums := strings.Split(strData, ", ")
	var data []int
	for _, strNum := range strNums {
		num, err := strconv.Atoi(strNum)
		if err != nil{
			panic(err)
		}
		data = append(data, num)
	}
	sortedData := quicksort(data)
	fmt.Println(sortedData)
}