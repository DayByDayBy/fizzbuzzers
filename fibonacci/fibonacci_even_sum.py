limit = 4000000

def fibonacci_even_sum(limit):
    a, b = 1, 2
    total = 0
      
    while a <= limit:
        if a % 2 == 0:
            total += a        
        a, b = b, a + b 
    return total

result = fibonacci_even_sum(limit)

print("the sum is: ", result)
