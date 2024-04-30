
import heapq
from collections import Counter
from typing import Optional
import json

class TreeNode:
    def __init__(self, char: Optional[str] = None, freq: int = 0):
        self.char = char
        self.freq = freq
        self.left_node: Optional[TreeNode] = None
        self.right_node: Optional[TreeNode] = None

    def __lt__(self, other: "TreeNode") -> bool:
        return self.freq < other.freq

def build_frequency_map(text: str) -> Counter[str]:
    # build frequency map from input text
    return Counter(text)

def build_priority_queue(freq_map: Counter[str]) -> list[TreeNode]:
    # build priority queue of leaf nodes from frequency map
    return [TreeNode(char, freq) for char, freq in freq_map.items()]


def merge_nodes(left_node: TreeNode, right_node: TreeNode) -> TreeNode:
    # merge two nodes into a new node with the sum of their frequencies
    merged_node = TreeNode(freq=left_node.freq + right_node.freq)
    merged_node.left_node = left_node
    merged_node.right_node = right_node
    
    return merged_node

def build_huffman_tree(text: str) -> Optional[TreeNode]:
    # build the huffman tree from the input text, with 'if not' as error catch
    if not text:
        return None

    freq_map = build_frequency_map(text)
    priority_queue = build_priority_queue(freq_map)
    heapq.heapify(priority_queue)

    while len(priority_queue) > 1:
        left_node = heapq.heappop(priority_queue)
        right_node = heapq.heappop(priority_queue)
        merged_node = merge_nodes(left_node, right_node)
        heapq.heappush(priority_queue, merged_node)

    return priority_queue[0]

def tree_to_dict(node):
    if node is None:
        return None
    return {
        "char": node.char,
        "freq": node.freq,
        "left": tree_to_dict(node.left_node),
        "right": tree_to_dict(node.right_node)
    }
    
    
def encode_text(text, huffman_tree):
    encoding_map = {}
    def traverse(node, code=""):
        if node['char'] is not None:
            encoding_map[node['char']] = code
            return 
        traverse(node['left'], code + '0')
        traverse(node['right'], code + '1')
    traverse(huffman_tree)
    encoded_text = ''.join(encoding_map[char] for char in text)
    return encoded_text



with open('../lorem.txt', 'r') as file:
    text = file.read()
huffman_tree_root = build_huffman_tree(text)

tree_dictionary = tree_to_dict(huffman_tree_root)

with open("huffman_tree.json", "w") as file:
    json.dump(tree_dictionary, file, indent=4)
encoded_text = encode_text(text, tree_dictionary)

with open ("encoded_text.txt", "w") as file:
    file.write(encoded_text)

