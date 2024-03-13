package golang

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)


func insertionSort(data []int) []int{
	for i := 0; i = < len(data); i++{
		
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
	sortedData := insertionSort(data)
	fmt.Println(sortedData)
}