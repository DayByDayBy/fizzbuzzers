import time

print('\n')    #  not necessary at all, but improves command-line readability when running 

data = [int(num) for num in open('../data.txt').read().split(",")] 
time_taken_bubble = 0
time_taken_cocktail = 0

def bubblesort(data):
    global time_taken_bubble
    n = len(data)
    start_time = time.process_time()
    for i in range(n):
        for j in range(0, n-i-1):
            if data[j] > data[j+1]:
                data[j], data[j+1] = data[j+1], data[j]
    end_time = time.process_time()
    time_taken_bubble = end_time - start_time
    return n,time_taken_bubble, data

quickSorted  = bubblesort(data)
# print(quickSorted[0], "items, sorted in ", quickSorted[1], "seconds:  ", '\n\n', quickSorted[2][:5], "(list truncated for legibility)")
print(quickSorted[2][:40])
print(f" - items sorted by 'quicksort' method: ", quickSorted[0], "   (list truncated for legibility)")
print(f" - time taken: ", quickSorted[1], "seconds\n")


def cocktail_shaker_bubble(data):
    global time_taken_cocktail
    n = len(data)
    start_time = time.process_time()
    for _ in range(n//2):
        for i in range(n-1):
            if data[i] > data[i+1]:
                data[i], data[i+1] = data[i+1], data[i]
        for i in range(n -2, -1, -1):
            if data[i] > data[i + 1]:
                data[i], data[i+1] = data[i+1], data[i]    
    end_time = time.process_time()
    time_taken_cocktail = end_time - start_time
    return n, time_taken_cocktail, data    
                
shakerSorted = cocktail_shaker_bubble(data)

print(shakerSorted[2][:40])
print(f" - items sorted by 'cocktail shaker' method: ", shakerSorted[0], "   (list truncated for legibility)")
print(f" - time taken: ", shakerSorted[1], "seconds\n")



print(f"\n - time_difference: ", time_taken_bubble - time_taken_cocktail)