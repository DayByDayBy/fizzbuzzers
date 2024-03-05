import time

print('\n')    #  not necessary at all, but improves command-line readability when running 

data = [int(num) for num in open('../data.txt').read().split(",")] 

time_taken_cocktail = 0


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
