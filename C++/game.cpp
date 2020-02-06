#include <iostream>
#include <map>
#include <algorithm>
#include <vector>
#include "./m.h"

M *mLib = new M();


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
            if ((p < n) && (c > n || c < p)) mLib->splice(copyVec, i);
            else mLib->splice(copyVec, i - 1);
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


// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
// each statue having an non-negative integer size.
// Since he likes to make things perfect, he wants to arrange them from smallest to largest so
// that each statue will be bigger than the previous one exactly by 1.
// He may need some additional statues to be able to accomplish that.
// Help him figure out the minimum number of additional statues needed.
// Example
// For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.

int maxStatues(std::vector<int> v) {
    sort(v.begin(), v.end());
    int count = 0;
    for (int i = 0; i < v.size() - 1; i++) {
        int &current = v[i];
        int &next = v[i + 1];
        if ((next - current) > 1) count += v[i + 1] - v[i] - 1;
    }
    return count;
}

// Below we will define an n-interesting polygon. Your task is to find the area 
// of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. 
// An n-interesting polygon is obtained by taking the n - 1-interesting polygon 
// and appending 1-interesting polygons to its rim, side by side. 
// You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// Example
// For n = 2, the output should be shapeArea(n) = 5; For n = 3, the output should be shapeArea(n) = 13.

int shapeArea(int n) {
    if (n == 1) return n;
    int count = 1;
    for (int i = 1; i < n; i++) {
        count += (4 * i);
    }
    return count;
}

// After becoming famous, the CodeBots decided to move into a new building together.
// Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! 
// Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, 
// or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, 
// your task is to return the total sum of all rooms that are suitable for the CodeBots
// (ie: add up all the values that don't appear below a 0).
// Example
// For
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]] the output should be matrixElementsSum(matrix) = 9.
// example 1
// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.
// For
// matrix = [[1, 1, 1, 0],
//           [0, 5, 0, 1], 
//           [2, 1, 3, 10]] the output should be matrixElementsSum(matrix) = 9.
// example 2
// Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it).
// Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.
int matrixElementsSum(std::vector<std::vector<int>> matrix) {
    int counter = 0;
    for (int i = 0; i < matrix.size(); i++) {
        for (int j = 0; j < matrix[i].size(); j++) {
            if (i == 0) counter += matrix[i][j];
            else if (matrix[i - 1][j] == 0) {
                matrix[i][j] = 0;
            }
            else {
                counter += matrix[i][j];
            }
        }
    }
    return counter;
}
// std::vector<int> elements = {0,1,1,2,0,5,0,0,2,0,3,3};
// std::vector<std::vector <int>> m = matrix(3, 4, elements);
// [[0,1,1,2], 
//  [0,5,0,0], 
//  [2,0,3,3]]

// [[1,2,3,4,5]]
// std::vector<int> elements = {1,2,3,4,5};
// std::vector<std::vector <int>> m = matrix(1, 5, elements);
// printIntMatrix(m);
// std::cout << matrixElementsSum(m) << std::endl;


// Given an array of strings, return another array containing all of its longest strings.
//     Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
//     Input/Output
//     [execution time limit] 4 seconds (js)
//     [input] array.string inputArray
// A non-empty array.
//     Guaranteed constraints:
//     1 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.

std::vector<std::string> allLongestStrings(std::vector<std::string> inputArray) {
    int longest = 0;
    std::vector<std::string> strArr;
    for (int i = 0; i < inputArray.size(); i++) {
        if (inputArray[i].size() > longest) {
            longest = inputArray[i].size();
            strArr.clear();
            strArr.push_back(inputArray[i]);
        }
        else if (inputArray[i].size() == longest) strArr.push_back(inputArray[i]);
    }
    return strArr;
}

// Given two strings, find the number of common characters between them.
//     Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".

int commonCharacterCount(std::string s1, std::string s2) {
    std::map<char, int> map1;
    std::map<char, int> map2;
    int counter = 0;
    
    for (std::string::size_type i = 0; i < s1.size(); i++) {
        // C++ maps return the end of the it if the element hasn't been found 
        // first -> key, second -> value
        if (map1.find(s1[i]) == map1.end()) {
            map1.insert(std::make_pair(s1[i], 1));
        }
        else {
            int val = 0;
            auto it = map1.find(s1[i]);
            it->second++;
        }
    }
    for (std::string::size_type i = 0; i < s2.size(); i++) {
        if (map2.find(s2[i]) == map2.end()) {
            map2.insert(std::make_pair(s2[i], 1));
        }
        else {
            int val = 0;
            auto it = map2.find(s2[i]);
            it->second++;
        }
    }
    std::vector<char> chars1 = mLib->keys(map1);
    std::vector<int> values1 = mLib->values(map1);

    std::vector<char> chars2 = mLib->keys(map2);
    std::vector<int> values2 = mLib->values(map2);

    std::vector<char> commonChars;

    for (int i = 0; i < chars1.size(); i++) {
        for (int j = 0; j < chars2.size(); j++) {
            if (chars1[i] == chars2[j]) commonChars.push_back(chars1[i]);
        }
    }
    for (int i = 0; i < commonChars.size(); i++) {
        auto it1 = map1.find(commonChars[i]);
        auto it2 = map2.find(commonChars[i]);
        counter += it1->second <= it2->second ? it1->second : it2->second;
    }

    return counter;
}


int main(int argc, char *args[]) {
    // std::vector<std::string> vec = {"aaba", "aa"};
    std::string s1 = "aabcc"; 
    std::string s2 = "adcaa";
    mLib->print(commonCharacterCount(s1, s2));    
    return 0; 
}


