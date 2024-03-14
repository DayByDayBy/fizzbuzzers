import unittest

from python_fizzbuzz_callable import fizzbuzzer

class TestFizzBuzz(unittest.TestCase):

    def test_fizz_buzz__3_returns_fizz(self):
        self.assertEqual("Fizz", fizzbuzzer(3))


    def test_fizz_buzz__5_returns_buzz(self):
        self.assertEqual("Buzz", fizzbuzzer(5))


    def test_fizz_buzz__15_returns_fizzbuzz(self):
        self.assertEqual("FizzBuzz", fizzbuzzer(15))


    def test_fizz_buzz__4_returns_4_as_str(self):
        self.assertEqual("4", fizzbuzzer(4))

if __name__ == '__main__':
    unittest.main()
    