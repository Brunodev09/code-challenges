#include <iostream>
#include <algorithm>
#include <vector> 

void printIntVector(const std::vector<int> &vec) {
    for (int i = 0; i < vec.size(); i++) {
        std::cout << "-------" << std::endl;
        std::cout << vec[i] << std::endl;
    }
}

std::vector<int>& concatIntVec(std::vector<int> &v1, std::vector<int> &v2) {
    v1.insert(v1.end(), v2.begin(), v2.end());
    return v1;
}

std::vector<int>& splice(std::vector<int> &vec, int index) {
    vec.erase(vec.begin() + index);
    return vec;
}



// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// Example
// For year = 1905, the output should be centuryFromYear(year) = 20; For year = 1700, the output should be centuryFromYear(year) = 17.
int centuryFromYear(int year) {
    return year % 100 == 0 ? year / 100 : year / 100 + 1;
}

// Given the string, check if it is a palindrome.
bool checkPalindrome(std::string inputString) {
    std::string cp = inputString;
    std::reverse(inputString.begin(), inputString.end());
    return  inputString == cp;
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.
int adjacentElementsProduct(std::vector<int> inputArray) {
    int largestInt = 0;
    
    for (int i = 0; i < inputArray.size() - 1; i++) {
        int& x = inputArray[i];
        int& y = inputArray[i + 1];
        if (x * y > largestInt) largestInt = x * y;
    }
    return largestInt;        
}
// std::vector<int> vec{3, 6, -2, -5, 7, 3};
// std::cout << adjacentElementsProduct(vec) << std::endl;

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
// Example
// For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false.
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.
// For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true.
// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
bool almostIncreasingSequence(std::vector<int> vec) {
    bool init = true;
    if (vec.size() == 1 || vec.size() == 2) return true;
    for (int i = 1; i < vec.size() - 1; i++) {
        int &p = vec[i - 1];
        int &c = vec[i];
        int &n = vec[i + 1];
        if (c <= p) {
            init = false;
            std::vector<int> copyVec = vec;
            if ((p < n) && (c > n || c < p)) {
                splice(copyVec, i);
            }
            else {
                splice(copyVec, i - 1);
            }
            bool test = true;
            if (copyVec.size() == 1) return true;
            else if (copyVec.size() == 2 && copyVec[0] >= copyVec[1]) return false;
            for (int j = 1; j < copyVec.size() - 1; j++) {
                int &p2 = copyVec[j - 1];
                int &c2 = copyVec[j];
                int &n2 = copyVec[j + 1];
                if (c2 <= p2 || c2 >= n2) test = false;
            }
            if (test) return test;
        }

    }
    return init;
}


int main(int argc, char *args[]) {
    std::vector<int> vec = {3, 5, 67, 98, 3};
    // std::cout << almostIncreasingSequence(vec) << std::endl;
    almostIncreasingSequence(vec);
    return 0; 
}


