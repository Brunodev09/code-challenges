package main

import (
	"fmt"
	"sort"
	"strconv"
)

func matrix(p [][]int, n int, m int) [][]int {
	p = make([][]int, n)
	for i := 0; i < n; i++ {
		p[i] = make([]int, m)
	}
	return p
}

func remove(slice []int, s int) []int {
	return append(slice[:s], slice[s+1:]...)
}

func removeByPointer(slice *[]int, s int) []int {
	return append((*slice)[:s], (*slice)[s+1:]...)
}

func filterInt(arr []int, target int) []int {
	for i := 0; i < len(arr); i++ {
		if arr[i] == target {
			arr = remove(arr, target)
			i--
		}
	}
	return arr
}

// Write a function that returns the sum of two numbers.

// Example

// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
func add(n1 int, n2 int) string {
	return strconv.Itoa(n1 + n2)
}

// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true; For inputString = "abac", the output should be checkPalindrome(inputString) = false; For inputString = "a", the output should be checkPalindrome(inputString) = true.
func checkPalindrome(s string) bool {
	unicodeArray := []rune(s)
	reverseArray := []rune(s)

	for i, j := len(unicodeArray)-1, 0; i >= 0; i, j = i-1, j+1 {
		reverseArray[j] = unicodeArray[i]
	}
	print(string(reverseArray), string(unicodeArray))
	return string(reverseArray) == string(unicodeArray)
}

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be centuryFromYear(year) = 20; For year = 1700, the output should be centuryFromYear(year) = 17.

// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true; For inputString = "abac", the output should be checkPalindrome(inputString) = false; For inputString = "a", the output should be checkPalindrome(inputString) = true.
func centuryFromYear(year int) int {
	return (year / 100) + 1
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// a := [...]int{3, 6, -2, -5, 7, 3}
// adjacentElementsProduct(a[:])

func adjacentElementsProduct(slice []int) int {
	var product int = -100000000000
	for i := 0; i < len(slice)-1; i++ {
		if slice[i]*slice[i+1] > product {
			product = slice[i] * slice[i+1]
		}
	}
	return product
}

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

//	a := [...]int{1, 3, 2, 3, 3}
// print(almostIncreasingSequence(a[:]))

func isSequence(slice []int, index int) bool {
	aux := remove(slice[:], index)
	for i := 1; i < len(aux)-1; i++ {
		if aux[i] >= aux[i+1] || aux[i] <= aux[i-1] {
			return false
		}
	}
	return true
}

func almostIncreasingSequence(slice []int) bool {
	sequence := true
	for i := 1; i < len(slice)-1; i++ {
		if slice[i] >= slice[i+1] {
			sequence = isSequence(slice[:], i)
			if !sequence {
				return sequence
			}
		}
		if slice[i] < slice[i-1] {
			sequence = isSequence(slice[:], i-1)
			if !sequence {
				return sequence
			}
		}
	}
	return sequence
}

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

//a := [...]int{1, 3, 2, 5}
// print(makeArrayConsecutive2(a[:]))

func makeArrayConsecutive2(slice []int) int {
	sort.Ints(slice)
	c := 0
	for i := 1; i < len(slice)-1; i++ {
		if slice[i+1]-slice[i] > 1 {
			c += slice[i+1] - slice[i] - 1
		}
	}
	return c
}

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// Example

// For n = 2, the output should be shapeArea(n) = 5; For n = 3, the output should be shapeArea(n) = 13.

func shapeArea(n int) int {
	if n == 1 {
		return n
	}
	acc := 1
	for i := 1; i <= n; i++ {
		acc += 4 * i
	}
	return acc
}

// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] the output should be matrixElementsSum(matrix) = 9.

// example 1

// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

// For

// matrix = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]] the output should be matrixElementsSum(matrix) = 9.

// example 2

// Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

// function matrixElementsSum(matrix) {
// 	let sum = 0;
// 	for (let i = 1; i < matrix.length; i++) {
// 		for (let j = 0; j < matrix[i].length; j++) {
// 			console.log(matrix);
// 			if (!matrix[i - 1][j]) matrix[i][j] = 0;
// 		}
// 	}
// 	for (let i = 0; i < matrix.length; i++) {
// 		matrix[i] = matrix[i].filter(k => k);
// 	}
// 	matrix.map(k => k.map(w => (sum += w)));
// 	console.log(matrix, sum);
// 	return sum;

// }

func matrixElementsSum(slice [][]int) int {
	var sum int = 0
	for i := 1; i < len(slice); i++ {
		for j := 0; j < len(slice[i]); j++ {
			if slice[i-1][j] == 0 {
				slice[i][j] = 0
			}
		}
	}
	fmt.Println(slice, "updated")
	for i := 0; i < len(slice); i++ {
		for j := 0; j < len(slice[i]); j++ {
			if slice[i][j] == 0 {
				slice[i] = remove(slice[i], j)
				j--
			}
		}
	}
	for i := 0; i < len(slice); i++ {
		for j := 0; j < len(slice[i]); j++ {
			sum += slice[i][j]
		}
	}
	fmt.Println(slice, sum)
	return sum
}

// [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]]
func main() {
	var a = [...][]int{
		{1, 1, 1, 0},
		{0, 5, 0, 1},
		{2, 1, 3, 10},
	}
	print(matrixElementsSum(a[:][:]))
}