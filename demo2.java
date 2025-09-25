class Demo2 {
    public static void main(String args[]) {
        int b = 10;  // Initialize b to some value
        int[] a = {1, 2, 3};  // Correct array declaration

        try {
            a[5] = b / 0;  // This will throw ArithmeticException before ArrayIndexOutOfBoundsException
            System.out.println(a[5]);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception: " + e);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index Out Of Bounds Exception: " + e);
        }
    }
}
