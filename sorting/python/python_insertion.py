data = [int(num) for num in open('../data.txt').read().split(",")] 

def insertion_sort(data):
    for i in range(1, len(data)):
        j = i-1
        while data[j] > data[j+1] and j >= 0:
            data[j], data[j+1] = data[j+1], data[j]
            j -= 1
            
insertion_sort(data)
print(data)