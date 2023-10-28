
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Create an interface for items to be displayed
interface Displayable {
    void display();
}

// Create a base class for products with abstraction
abstract class Product implements Displayable {
    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        this.quantity = 1;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public void display() {
        System.out.println(getName() + " - Rs." + getPrice() + " x " + getQuantity());
    }

    public abstract String getInfo();
}

// Create a ShoppingCart class that holds products
class ShoppingCart {
    private List<Product> items;

    public ShoppingCart() {
        items = new ArrayList<>();
    }

    public void addToCart(Product product) {
        boolean found = false;
        for (Product item : items) {
            if (item.getName().equals(product.getName())) {
                int currentQuantity = item.getQuantity();
                int newQuantity = currentQuantity + getProductQuantityFromUser(item.getName());
                item.setQuantity(newQuantity);
                found = true;
                break;
            }
        }
        if (!found) {
            product.setQuantity(getProductQuantityFromUser(product.getName()));
            items.add(product);
        }
    }

    private int getProductQuantityFromUser(String productName) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter quantity for " + productName + ": ");
        int quantity = scanner.nextInt();
        return quantity;

    }

    public double calculateTotal() {
        double total = 0;
        for (Product item : items) {
            total += item.getPrice() * item.getQuantity();
        }
        return total;
    }

    public void displayCart() {
        System.out.println("Items in your shopping cart:");
        for (Product item : items) {
            item.display();
        }
        System.out.println("Total: Rs." + calculateTotal());
    }
}

// Create a class for a specific type of product
class ElectronicProduct extends Product {
    private String brand;

    public ElectronicProduct(String name, double price, String brand) {
        super(name, price);
        this.brand = brand;
    }

    @Override
    public void display() {
        System.out.println(getName() + " by " + brand + " - Rs." + getPrice() + " x " + getQuantity());
    }

    @Override
    public String getInfo() {
        return "Brand: " + brand;
    }
}

public class New {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ShoppingCart cart = new ShoppingCart();

        // Adding some sample products
        Product product1 = new ElectronicProduct("Laptop", 999.99, "Dell");
        Product product2 = new ElectronicProduct("Smartphone", 399.99, "Samsung");
        Product product3 = new ElectronicProduct("Headphones", 49.99, "Boat");

        while (true) {
            System.out.println("\nAvailable Products:");
            System.out.println("1. Laptop - Rs.98999.99");
            System.out.println("2. Smartphone - Rs.12399.99");
            System.out.println("3. Headphones - Rs.2249.99");
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
