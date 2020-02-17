public class Challenge {

    boolean checkPalindrome(String s) {
        return new StringBuilder(s).reverse().toString().equals(s);
    }

    int adjacentElementsProduct(int[] inputArray) {
        int largestProduct = 0;
        for (int i = 0; i < inputArray.length - 1; i++) {
            if (inputArray[i] * inputArray[i + 1] > largestProduct) largestProduct = inputArray[i] * inputArray[i + 1];
        }
        return largestProduct;
    }

    public static void main(String[] args) {
        Challenge obj = new Challenge();
        // obj.adjacentElementsProduct(new int[]{1,2,3,4,5})
        System.out.println(obj.adjacentElementsProduct(new int[]{1,2,3,4,5}));
    } 
}