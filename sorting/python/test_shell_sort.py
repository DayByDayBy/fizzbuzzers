import unittest
from python_bubble_shell import shell_sort



class TestBubble(unittest.TestCase):
    def test_shell_sort_empty_list(self):
        data = []
        sorted_data = shell_sort(data)
        self.assertEqual(sorted_data[2], [])
    
    def test_shell_sort_sorted_list(self):
        data = [1, 2, 3, 4, 5, 6, 7, 33]
        sorted_data = shell_sort(data)
        self.assertEqual(sorted_data[2], [1, 2, 3, 4, 5, 6, 7, 33])
    
    def test_shell_sort_reversed_list(self):
        data = [42, 7, 6, 5, 4, 3, 2, 1]
        sorted_data = shell_sort(data)
        self.assertEqual(sorted_data[2], [1, 2, 3, 4, 5, 6, 7, 42])
    
    def test_shell_sort_bigger_numbers(self):
        data = [35678, 234567, 89023, 10234243, 29546]
        sorted_data = shell_sort(data)
        self.assertEqual(sorted_data[2], [29546, 35678, 89023, 234567, 10234243])
        
if __name__ == '__main__':
    unittest.main()
    
    
#  test varies from the straight data in/sorted data out 
#  model because the script itself does, along with other bubblesorts
# 
#  function returns n, time, and data, as i was messing with 
#  timing the sorts, and with outputting different prints
#  to command line (n items sorted in time_taken seconds, etc)
    
    