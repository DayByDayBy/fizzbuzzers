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
print(quickSorted[2][:40])
print(f" - items sorted by 'quicksort' method: ", quickSorted[0], "   (list truncated for legibility)")
print(f" - time taken: ", quickSorted[1], "seconds\n")


# print(quickSorted[0], "items, sorted in ", quickSorted[1], "seconds:  ", '\n\n', quickSorted[2][:5], "(list truncated for legibility)")
