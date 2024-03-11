import unittest
from python_quicksort import quicksort

class TestQuicksort(unittest.TestCase):
    def test_quicksort_empty_list(self):
        data = []
        sorted_data = quicksort(data)
        self.assertEqual(sorted_data, [])
    
    def test_quicksort_sorted_list(self):
        data = [1, 2, 3, 4, 5, 6, 7, 33]
        sorted_data = quicksort(data)
        self.assertEqual(sorted_data, [1, 2, 3, 4, 5, 6, 7, 33])
    
    def test_quicksort_reversed_list(self):
        data = [42, 7, 6, 5, 4, 3, 2, 1]
        sorted_data = quicksort(data)
        self.assertEqual(sorted_data, [1, 2, 3, 4, 5, 6, 7, 42])
    
    def test_quicksort_bigger_numbers(self):
        data = [35678, 234567, 89023, 10234243, 29546]
        sorted_data = quicksort(data)
        self.assertEqual(sorted_data, [29546, 35678, 89023, 234567, 10234243])
        
if __name__ == '__main__':
    unittest.main()