import time

print('\n')    #  not necessary at all, but improves command-line readability when running 

data = [int(num) for num in open('../data.txt').read().split(",")] 
time_taken_shell = 0

def shell_sort(data):
    global time_taken_shell
    n = len(data)
    gap_seq = generate_gap_sequence(n)
    start_time = time.process_time()

    for gap in gap_seq:
        for i in range(gap, n):
            temp = data[i]
            j = i
            while j >= gap and data[j-gap] > temp:
                data[j] = data[j-gap]
                j-= gap
            data[j] = temp    
                
    end_time = time.process_time()
    time_taken_shell = end_time - start_time
    return n,time_taken_shell, data

def generate_gap_sequence(n):
    gap = (n//2)
    while gap  > 0:
        yield gap 
        gap = gap//2

shellSorted  = shell_sort(data)
print(shellSorted[2][:40])
print(f" - items sorted by 'shellsort' method: ", shellSorted[0], "   (list truncated for legibility)")
print(f" - time taken: ", shellSorted[1], "seconds\n")
