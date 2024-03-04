#include <iostream>
#include <fstream>
#include <vector>
#include <sstream>

std::vector<int> quicksort(std::vector<int>& data){
    if (data.size() <=1){
        return data;
    } else { 
        int pivot = data[0];
        std::vector<int>left, right;
        for(size_t i = 1; i < data.size(); ++i){
            if (data[i] < pivot){
                left.push_back(data[i]); 
            } else {
                right.push_back(data[i]);
            }
        }
        left = quicksort(left);
        right = quicksort(right);
        left.push_back(pivot);
        left.insert(left.end(), right.begin(), right.end());
        return left;
    }

}

int main(){
    std::ifstream file("../data.txt");
    if (!file.is_open()){
        std::cerr << "error opening file" << std::endl;
        return 1;
    }

    std::vector<int> data;
    std::string line;
    while (std::getline(file, line)){
        std::istringstream iss(line);
        std::string numStr;
        while (std::getline(iss, numStr, ',')){
            int num = std::stoi(numStr);
            data.push_back(num);
        }
    }
    file.close();
    std::vector<int> sortedData = quicksort(data);
    for (int num : sortedData ){
        std::cout << num << " ";
    }
    std::cout << std::endl;
    return 0;
}


// i/o stuff:
//      ifstream, is_open(), getline())
// string manipulation:
//      istringstream, getline()
// vector manipulation:
//      vector, push_back(), size()
// error handling:
//       cerr, !file.is_open()
// type conversion:
//      stoi() for string to int
// some 'new friends':
//      iosrea,, fstream, vector, sstream, 
//      and getting more familiar with '::' notation for namespace and classes
// 
//
//
// main task for me with C-fam stuff is remembering the names of the various 
// tools required, a few things that are 'taken care of' in other 
// laguages, or built-in in more seamlessly