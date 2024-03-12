package sorting

import (
	"reflect"
	"testing"
)

func TestInsertionSort(t *testing.T){
	tests := []struct {
		input	 []int
		expected []int
	}{	
		{input: []int{}, expected: []int{}}
		{input: []int{1, 2, 3, 4, 5, 6, 7, 33}, expected: []int{1, 2, 3, 4, 5, 6, 7, 33}},
		{input: []int{42, 7, 6, 5, 4, 3, 2, 1}, expected: []int{1, 2, 3, 4, 5, 6, 7, 42}},
		{input: []int{35678, 234567, 89023, 10234243, 29546}, expected: []int{29546, 35678, 89023, 234567, 10234243}}
	}
	for _, test := range tests{
		insertionSort(test.input)

		if !reflect.DeepEqual(test.input, test.expected) {
			t.Errorf("insertion sort(%v) = %v, expected %v", test.input, test.input, test.expected)
		}
	}
}