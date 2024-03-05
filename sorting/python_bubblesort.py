data = [int(num) for num in open('data.txt').read().split(",")] 

def bubblesort(data):
    n = len(data)
    for i in range(n):
        for j in range(0, n-i-1):
            if data[j] > data[j+1]:
                data[j], data[j+1] = data[j+1], data[j]
            
bubblesort(data)
print(data)

    
                