#include <iostream>
#include <algorithm>
#include <vector>    

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
int main(int argc, char *args[]) {
    std::vector<int> vec = {3, 6, -2, -5, 7, 3};
    std::cout << adjacentElementsProduct(vec) << std::endl;
    return 0; 
}