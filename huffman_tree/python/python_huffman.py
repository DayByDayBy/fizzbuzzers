import heapq
from collections import Counter

def read_file(filename):
    with open(filename, 'r') as file:
        text = file.read()
    return text

def write_file(filename, encoded_text, codes):
    with open(filename, 'w') as file:
        file.write(''.join(encoded_text))
        file.write('\n')
        for char, code in codes.items():
            file.write(f'{char}: {code}\n')

def build_huffman_tree(freq_dict):
    heap = [[wt, [sym, '']] for sym, wt in freq_dict.items()]
    heapq.heapify(heap)
    while len(heap) > 1:
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        heapq.heappush(heap, [lo[0] + hi[0], *lo[1:], *hi[1:]])
        print(sorted(heap))
    return sorted(heapq.heappop(heap)[1:], key=lambda p: (len(p[-1]), p))

def huffman_encode(input_filename, output_filename):
    text = read_file(input_filename)
    freq_dict = Counter(text)
    codes = {sym: code for sym, code in build_huffman_tree(freq_dict)}
    # print(codes)
    encoded_text = [codes[char] for char in text]
    write_file(output_filename, encoded_text, codes)

input_filename = '../lorem.txt'
output_filename = 'python_huffman_encoded.txt'
huffman_encode(input_filename, output_filename)