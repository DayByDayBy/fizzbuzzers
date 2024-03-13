package sorting

import (
	"fmt"
	"os"
	"strconv"
	"strings"
	"log"
)

func insertionSort(data []int) []int {
	for i, _ := range data {
		j := i - 1
		for j >= 0 && data[j] > data[j+1] {
			data[j], data[j+1] = data[j+1], data[j]
			j--
		}
	}
	return data
}

func main() {
	content, err := os.ReadFile("../data.txt")
	if err != nil {
		log.Fatal(err)
	}
	strData := string(content)
	strData = strings.TrimSpace(strData)
	strNums := strings.Split(strData, ", ")
	var data []int
	for _, strNum := range strNums {
		num, err := strconv.Atoi(strNum)
		if err != nil {
			log.Fatal(err)
		}
		data = append(data, num)
	}
	sortedData := insertionSort(data)
	fmt.Println(sortedData)
}
