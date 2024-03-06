

data = [int(num) for num in open('../data.txt').read().split(",")] 
# data = [2, 4, 34, 87, 1, 90, 3, 67]



def merge_sort(data):
    
    if len(data) <= 1:
        return data
     
    mid = len(data) // 2
    left_data = merge_sort(data[:mid])
    right_data = merge_sort(data[mid:])
    
    return merge(left_data, right_data)

def merge(left, right):
    merged = []
    left_index, right_index = 0, 0
    
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1
            
    merged.extend(left[left_index:])
    merged.extend(right[right_index:])
            
    return merged


mergeSorted  = merge_sort(data)
print(mergeSorted)
