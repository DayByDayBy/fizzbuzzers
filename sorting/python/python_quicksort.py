def quicksort(data):
    if len(data) <= 1:
        return data
    else:
        pivot = data[0]
        left = [x for x in data[1:] if x < pivot]
        right = [x for x in data[1:] if x >= pivot]
        return quicksort(left) + [pivot] + quicksort(right)
        
data = [int(num) for num in open('../data.txt').read().split(",")] 
sorted_data = quicksort(data)
print(sorted_data)
                
                
        