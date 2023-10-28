package myfold;

import java.util.ArrayList;
import java.util.Scanner;

class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}

class ShoppingCart {
    private ArrayList<Product> items;

    public ShoppingCart() {
        items = new ArrayList<>();
    }

    public void addToCart(Product product) {
        items.add(product);
    }

    public double calculateTotal() {
        double total = 0;
        for (Product item : items) {
            total += item.getPrice();
        }
        return total;
    }

    public void displayCart() {
        System.out.println("Items in your shopping cart:");
        for (Product item : items) {
            System.out.println(item.getName() + " - $" + item.getPrice());
        }
        System.out.println("Total: $" + calculateTotal());
    }
}

public class My {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ShoppingCart cart = new ShoppingCart();

        // Adding some sample products
        Product product1 = new Product("Laptop", 999.99);
        Product product2 = new Product("Smartphone", 399.99);
        Product product3 = new Product("Headphones", 49.99);

        while (true) {
            System.out.println("\nAvailable Products:");
            System.out.println("1. Laptop - $999.99");
            System.out.println("2. Smartphone - $399.99");
            System.out.println("3. Headphones - $49.99");
            System.out.println("4. Checkout");
            System.out.print("Enter your choice (1-4): ");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    cart.addToCart(product1);
                    break;
                case 2:
                    cart.addToCart(product2);
                    break;
                case 3:
                    cart.addToCart(product3);
                    break;
                case 4:
                    cart.displayCart();
                    System.out.println("Thank you for shopping!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please select a valid option.");
            }
        }
    }
}