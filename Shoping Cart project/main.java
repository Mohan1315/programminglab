import shopingCartProject.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ShoppingCart cart = new ShoppingCart();

        // Define products and brands
        Product laptopPendrive1 = new ElectronicProduct("Pendrive", 989, "SanDisk Ultra Dual Drive");
        Product laptopPendrive2 = new ElectronicProduct("Pendrive", 999.99, "Strotium Pollex");
        Product laptopPendrive3 = new ElectronicProduct("Pendrive", 1499.99, "SanDisk Ultra Flair");
        Product laptopBag1 = new ElectronicProduct("Laptop Bag", 1024, "LEXIE SACHS");
        Product laptopBag2 = new ElectronicProduct("Laptop Bag", 3200, "Emma Seymour");
        Product laptopBag3 = new ElectronicProduct("Laptop Bag", 4499, "FUR JADEN");
        Product laptopStand = new ElectronicProduct("Laptop Stand", 1499, "Lenx");
        // Soap
        Product SoapLux = new GroceryProduct("Bathing Soap", 70.9, "Lux");
        Product SoapDove = new GroceryProduct("Bathing Soap", 90, "Dove");
        Product SoapMediMax = new GroceryProduct("Bathing Soap", 99.9, "Medi Max");
        Product BarGhadi = new GroceryProduct("Detergent Bar", 20, "Ghadi");
        Product BarRin = new GroceryProduct("Detergent Bar", 15, "Rin");
        Product BarTide = new GroceryProduct("Detergent Bar", 20, "Tide");
        Product BarFenna = new GroceryProduct("Washing Bar", 25, "Fenna");
        Product BarGelo = new GroceryProduct("Washing Bar", 30, "Gelo");
        Product BarScruf = new GroceryProduct("Washing Bar", 45, "Scruf");
        // HeadPhones
        Product headphonesBoat = new ElectronicProduct("Headphones", 2249.99, "Boat");
        Product headphonesBose = new ElectronicProduct("Headphone", 2999.91, "Bose");
        Product headphonesSony = new ElectronicProduct("Headphone", 4032.10, "Sony");
        // Bottle
        Product Milton_1 = new GroceryProduct("Bottle", 500, "Milton");
        Product Nayasa_1 = new GroceryProduct("Bottle", 450, "Nayasa");
        Product Cello_1 = new GroceryProduct("Bottle", 475, "Cello");
        Product Milton_2 = new GroceryProduct("Bottle", 1000, "Milton");
        Product Nayasa_2 = new GroceryProduct("Bottle", 700, "Nayasa");
        Product Cello_2 = new GroceryProduct("Bottle", 750, "Cello");
        // Toothpaste
        Product Colgate = new GroceryProduct("ToothPaste ", 75, "Colgate");
        Product Babool = new GroceryProduct("ToothPaste ", 70, "Babool");
        Product Sensodine = new GroceryProduct("ToothPaste ", 72, "Sensodine");
        // Sunglasses
        Product SunGlasses_RayBan = new FashionProduct("Limited Edition Sunglasses", 512, "RayBan");
        Product SunGlasses_Dior = new FashionProduct("Limited Edition Sunglasses", 1024, "Dior");
        Product SunGlasses_Parada = new FashionProduct("Limited Edition Sunglasses", 762, "Parada");
        // Cap
        Product Cap_iSWEVEN = new FashionProduct("Cap", 840, "iSWEVEN");
        Product Cap_STELLERS = new FashionProduct("Cap", 345, "STELLERS");
        Product Cap_LOS = new FashionProduct("Cap", 535, "LOS POLISTAS");
        // Socks
        Product Sock_Adidas = new FashionProduct("Socks", 40, "Adidas");
        Product Sock_Nike = new FashionProduct("Socks", 60, "Nike");
        Product Sock_Puma = new FashionProduct("Socks", 50, "Puma");
        // Sports Essentials

        // Yoga Mat
        Product YogaMat_SymActive = new SportsProduct("Yoga Mat", 600, "SymActive");
        Product YogaMat_WiseLife = new SportsProduct("Yoga Mat", 780, "Wise Life");
        Product YogaMat_BoldFit = new SportsProduct("Yoga Mat", 650, "Bold Fit");
        // Football
        Product Football_Vector = new SportsProduct("Football", 400, "Vector");
        Product Football_NIVIA = new SportsProduct("Football", 560, "NIVIA");
        Product Football_COSCO = new SportsProduct("Football", 870, "COSCO");
        // Skipping Rope
        Product Skipping_Cockatoo = new SportsProduct("Skipping Rope", 89, "Cockatoo");
        Product Skipping_TRX = new SportsProduct("Skipping Rope", 343, "TRX");
        Product Skipping_iStock = new SportsProduct("Skipping Rope", 132, "iStock");

        while (true) {
            System.out.println("\nMain Menu:");
            System.out.println("1. Add to Cart");
            System.out.println("2. View Cart");
            System.out.println("3. Remove from Cart");
            System.out.println("4. Checkout\n");
            System.out.print("Enter your choice (1-4): ");

            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    while (true) {
                        System.out.println("\nAvailable Products:");
                        System.out.println("1. Laptop Accessories");
                        System.out.println("2. Grocerries");
                        System.out.println("3. Fashion");
                        System.out.println("4. Sports Equipments");
                        System.out.println("5. Headphones ");
                        System.out.println("6. Checkout\n");
                        System.out.print("Enter your choice (1-4): ");

                        int choiceAcc = scanner.nextInt();
                        switch (choiceAcc) {
                            case 1:
                                // Allow user to Pick Accessories
                                System.out.println("1. Pendrive");
                                System.out.println("2. LaptopBag");
                                System.out.println("3. Laptop Stand\n");
                                System.out.print("Enter your choice (1-3):");
                                int choice1 = scanner.nextInt();

                                switch (choice1) {
                                    case 1:
                                        // Allow the user to select a brand for Pendrive
                                        System.out.println("Select a brand for Pendrive:");
                                        System.out.println("1. SanDisk Ultra Dual Drive - Rs. 500");
                                        System.out.println("2. Strontium Pollex         - Rs. 459");
                                        System.out.println("3. SanDisk Ultra Flair      - Rs. 499\n");
                                        System.out.print("Enter your choice (1-3):");
                                        int brandChoice = scanner.nextInt();
                                        switch (brandChoice) {
                                            case 1:
                                                cart.addToCart(laptopPendrive1);
                                                break;
                                            case 2:
                                                cart.addToCart(laptopPendrive2);
                                                break;
                                            case 3:
                                                cart.addToCart(laptopPendrive3);
                                                break;
                                            default:
                                                System.out.println("Invalid brand choice.");
                                                break;
                                        }
                                        break;

                                    case 2:
                                        // Allow the user to select a brand for LAPTOP BAG
                                        System.out.println("Select a brand for Laptop bag:");
                                        System.out.println("1. LEXIE SACHS  - Rs. 2040");
                                        System.out.println("2. Emma Seymour - Rs. 4400");
                                        System.out.println("3. FUR JADEN    - Rs. 3599\n");
                                        System.out.print("Enter your choice (1-3):");
                                        int brandChoice2 = scanner.nextInt();
                                        switch (brandChoice2) {
                                            case 1:
                                                cart.addToCart(laptopBag1);
                                                break;
                                            case 2:
                                                cart.addToCart(laptopBag2);
                                                break;
                                            case 3:
                                                cart.addToCart(laptopBag3);
                                                break;
                                            default:
                                                System.out.println("Invalid brand choice.");
                                                break;

                                        }
                                        break;

                                    case 3:
                                        // Allow user to select Laptop Stand
                                        cart.addToCart(laptopStand);
                                        break;
                                }
                                break;

                            case 2:
                                // Allow user to Pick Accessories
                                System.out.println("1. Soap");
                                System.out.println("2. Bottle");
                                System.out.println("3. Toothpaste\n");
                                System.out.print("Enter your choice (1-3):");
                                int gchoice = scanner.nextInt();

                                switch (gchoice) {
                                    case 1:
                                        // Allow the user to select a brand for Pendrive
                                        System.out.println("Select a brand for Soap:");
                                        System.out.println("1. Bathing Soap");
                                        System.out.println("2. Detergent Bar");
                                        System.out.println("3. Washing Bar\n");
                                        System.out.print("Enter your choice (1-3):");
                                        int schoice = scanner.nextInt();
                                        switch (schoice) {
                                            case 1:
                                                // Allow the user to select a brand for Pendrive
                                                System.out.println("Select a brand for Bathing Soap:");
                                                System.out.println("1. Lux - RS. 70.9");
                                                System.out.println("2. Dove - Rs. 90");
                                                System.out.println("3. Medi Max - Rs. 99.9\n");
                                                System.out.print("Enter your choice (1-3):");
                                                int barChoice = scanner.nextInt();
                                                switch (barChoice) {
                                                    case 1:
                                                        cart.addToCart(SoapLux);
                                                        break;
                                                    case 2:
                                                        cart.addToCart(SoapDove);
                                                        break;
                                                    case 3:
                                                        cart.addToCart(SoapMediMax);
                                                        break;
                                                    default:
                                                        System.out.println("Invalid brand choice.");
                                                        break;
                                                }
                                                break;

                                            case 2:
                                                // Allow the user to select a brand for LAPTOP BAG
                                                System.out.println("Select a brand for Laptop bag:");
                                                System.out.println("1. Ghadi - Rs. 20");
                                                System.out.println("2. Rin Bar - Rs. 15");
                                                System.out.println("3. Tide - Rs. 10\n");
                                                System.out.print("Enter your choice (1-3):");
                                                int barChoice2 = scanner.nextInt();
                                                switch (barChoice2) {
                                                    case 1:
                                                        cart.addToCart(BarGhadi);
                                                        break;
                                                    case 2:
                                                        cart.addToCart(BarRin);
                                                        break;
                                                    case 3:
                                                        cart.addToCart(BarTide);
                                                        break;
                                                    default:
                                                        System.out.println("Invalid brand choice.");
                                                        break;

                                                }
                                                break;

                                            case 3:
                                                // Allow user to select Laptop Stand
                                                System.out.println("Select a brand for Laptop bag:");
                                                System.out.println("1. Fenna - Rs. 70");
                                                System.out.println("2. Gelo - Rs. 115");
                                                System.out.println("3. Scruf - Rs. 45\n");
                                                System.out.print("Enter your choice (1-3):");
                                                int barChoice3 = scanner.nextInt();
                                                switch (barChoice3) {
                                                    case 1:
                                                        cart.addToCart(BarFenna);
                                                        break;
                                                    case 2:
                                                        cart.addToCart(BarGelo);
                                                        break;
                                                    case 3:
                                                        cart.addToCart(BarScruf);
                                                        break;
                                                    default:
                                                        System.out.println("Invalid brand choice.");
                                                        break;

                                                }
                                                break;
                                        }
                                        break;

                                    case 2:
                                        System.out.println("Select the Capacity");
                                        System.out.println("1. 1 Litre");
                                        System.out.println("2. 2 Litre\n");
                                        System.out.print("Enter your choice (1-2):");
                                        int LitreChoice = scanner.nextInt();
                                        switch (LitreChoice) {
                                            case 1:
                                                System.out.println("Select a brand for 1 Litre Bottle:");
                                                System.out.println("1. Milton - Rs. 500");
                                                System.out.println("2. Nayasa - Rs. 450");
                                                System.out.println("3. Cello  - Rs. 475\n");
                                                System.out.print("Enter your choice (1-3):");
                                                int brand1l = scanner.nextInt();

                                                switch (brand1l) {
                                                    case 1:
                                                        cart.addToCart(Milton_1);
                                                        break;

                                                    case 2:
                                                        cart.addToCart(Nayasa_1);
                                                        break;

                                                    case 3:
                                                        cart.addToCart(Cello_1);
                                                        break;
                                                    default:
                                                        System.out.println("Invalid brand choice.");
                                                        break;
                                                }
                                                break;

                                            case 2:
                                                System.out.println("Select a brand 2 Litre Bottle:");
                                                System.out.println("1. Milton - Rs. 1000");
                                                System.out.println("2. Nayasa - Rs. 700");
                                                System.out.println("3. Cello  - Rs. 750\n");
                                                System.out.print("Enter your choice (1-3):");
                                                int brand2l = scanner.nextInt();

                                                switch (brand2l) {
                                                    case 1:
                                                        cart.addToCart(Milton_2);
                                                        break;

                                                    case 2:
                                                        cart.addToCart(Nayasa_2);
                                                        break;

                                                    case 3:
                                                        cart.addToCart(Cello_2);
                                                        break;
                                                    default:
                                                        System.out.println("Invalid brand choice.");
                                                        break;
                                                }
                                                break;

                                        }
                                        break;
                                    case 3:
                                        System.out.println("Select Brand of Tooth paste:");
                                        System.out.println("1. Colgate    - Rs. 75");
                                        System.out.println("2. Babool     - Rs. 700");
                                        System.out.println("3. Sensodine  - Rs. 750\n");
                                        System.out.print("Enter your choice (1-3):");
                                        int ToothChoice = scanner.nextInt();

                                        switch (ToothChoice) {
                                            case 1:
                                                cart.addToCart(Colgate);
                                                break;

                                            case 2:
                                                cart.addToCart(Babool);
                                                break;

                                            case 3:
                                                cart.addToCart(Sensodine);
                                                break;
                                            default:
                                                System.out.println("Invalid brand choice.");
                                                break;
                                        }
                                        break;
                                }
                                break;

                            case 3:
                                // Allow the user to Select
                                System.out.println("1. Sunglasses");
                                System.out.println("2. Cap");
                                System.out.println("3. Socks\n");
                                System.out.print("Enter your choice (1-3):");
                                int FashionChoice = scanner.nextInt();
                                switch (FashionChoice) {
                                    case 1:
                                        // Allow the user to Brand of Sunglasses
                                        System.out.println("1. RayBan - Rs. 512 ");
                                        System.out.println("2. Dior   - Rs. 1024");
                                        System.out.println("3. Parada - Rs. 762\n");
                                        System.out.print("Enter your choice (1-3):");

                                        int SunChoice = scanner.nextInt();
                                        switch (SunChoice) {
                                            case 1:
                                                cart.addToCart(SunGlasses_RayBan);
                                                break;
                                            case 2:
                                                cart.addToCart(SunGlasses_Dior);
                                                break;
                                            case 3:
                                                cart.addToCart(SunGlasses_Parada);
                                                break;
                                            default:
                                                System.out.println("Invalid brand choice.");
                                                break;
                                        }
                                        break;
                                    case 2:
                                        // Allow the user to Brand of Cap
                                        System.out.println("1. iSWEVEN      - Rs. 840 ");
                                        System.out.println("2. STELLERS     - Rs. 345");
                                        System.out.println("3. LOS POLISTAS - Rs. 535\n");
                                        System.out.print("Enter your choice (1-3):");

                                        int CapChoice = scanner.nextInt();
                                        switch (CapChoice) {
                                            case 1:
                                                cart.addToCart(Cap_iSWEVEN);
                                                break;
                                            case 2:
                                                cart.addToCart(Cap_STELLERS);
                                                break;
                                            case 3:
                                                cart.addToCart(Cap_LOS);
                                                break;
                                            default:
                                                System.out.println("Invalid brand choice.");
                                                break;
                                        }
                                        break;
                                    case 3:
                                        // Allow the user to Brand of Socks
                                        System.out.println("1. Adidas - Rs. 40 ");
                                        System.out.println("2. NIKE   - Rs. 60");
                                        System.out.println("3. PUMA   - Rs. 50\n");
                                        System.out.print("Enter your choice (1-3):");

                                        int SockChoice = scanner.nextInt();
                                        switch (SockChoice) {
                                            case 1:
                                                cart.addToCart(Sock_Adidas);
                                                break;
                                            case 2:
                                                cart.addToCart(Sock_Nike);
                                                break;
                                            case 3:
                                                cart.addToCart(Sock_Puma);
                                                break;
                                            default:
                                                System.out.println("Invalid brand choice.");
                                                break;
                                        }

                                        break;
                                }
                                break;

                            case 4:
                                // Allow the user to select the Item
                                System.out.println("1. Yoga Mat ");
                                System.out.println("2. Football ");
                                System.out.println("3. Skipping Rope\n");
                                System.out.print("Enter your choice (1-3):");
                                int S_Choice = scanner.nextInt();
                                switch (S_Choice) {
                                    case 1:
                                        System.out.println("1. SymActive - Rs. 600 ");
                                        System.out.println("2. Wise Life - Rs. 780");
                                        System.out.println("3. Bold Fit  - Rs. 650\n");
                                        System.out.print("Enter your choice (1-3):");
                                        int M_BrandChoice = scanner.nextInt();
                                        switch (M_BrandChoice) {
                                            case 1:
                                                cart.addToCart(YogaMat_SymActive);
                                                break;

                                            case 2:
                                                cart.addToCart(YogaMat_WiseLife);
                                                break;

                                            case 3:
                                                cart.addToCart(YogaMat_BoldFit);
                                                break;
                                        }
                                        break;

                                    case 2:
                                        System.out.println("1. Vector - Rs. 400");
                                        System.out.println("2. NIVIA  - Rs. 560");
                                        System.out.println("3. COSCO  - Rs. 870\n");
                                        System.out.print("Enter your choice (1-3):");
                                        int F_BrandChoice = scanner.nextInt();
                                        switch (F_BrandChoice) {
                                            case 1:
                                                cart.addToCart(Football_Vector);
                                                break;

                                            case 2:
                                                cart.addToCart(Football_NIVIA);
                                                break;

                                            case 3:
                                                cart.addToCart(Football_COSCO);
                                                break;
                                        }
                                        break;

                                    case 3:
                                        System.out.println("1. Cockatoo - Rs. 89");
                                        System.out.println("2. TRX      - Rs. 343");
                                        System.out.println("3. iStock   - Rs. 132\n");
                                        System.out.print("Enter your choice (1-3):");
                                        int S_BrandChoice = scanner.nextInt();
                                        switch (S_BrandChoice) {
                                            case 1:
                                                cart.addToCart(Skipping_Cockatoo);
                                                break;

                                            case 2:
                                                cart.addToCart(Skipping_TRX);
                                                break;

                                            case 3:
                                                cart.addToCart(Skipping_iStock);
                                                break;
                                        }
                                        break;

                                    default:
                                        System.out.println("Invalid brand choice.");
                                        break;
                                }
                                break;

                            case 5:
                                // Allow the user to select Brand of Headphones
                                System.out.println("1. Boat - Rs. 1900.99");
                                System.out.println("2. Bose - Rs. 1243.50");
                                System.out.print("3. Sony - Rs. 1500.90\n");
                                int brandChoice3 = scanner.nextInt();
                                switch (brandChoice3) {
                                    case 1:
                                        cart.addToCart(headphonesBoat);
                                        break;
                                    case 2:
                                        cart.addToCart(headphonesBose);
                                        break;
                                    case 3:
                                        cart.addToCart(headphonesSony);
                                        break;
                                    default:
                                        System.out.println("Invalid brand choice.");
                                        break;
                                }
                                break;

                        }
                        break;
                    }
                    break;

                case 2:
                    cart.viewCarts(); // Option to view the cart
                    break;
                case 3:
                    cart.viewCarts(); // Option to view the cart
                    System.out.print("Enter the product number to remove from the cart: ");
                    int productNumberToRemove = scanner.nextInt();
                    int itemIndexToRemove = productNumberToRemove - 1;
                    Product item = cart.getItemByIndex(itemIndexToRemove);
                    if (item != null) {
                        System.out.print("Enter the quantity to remove: ");
                        int quantityToRemove = scanner.nextInt();
                        cart.removeFromCart(itemIndexToRemove, quantityToRemove);
                    } else {
                        System.out.println("Invalid item index. Please enter a valid index.");
                    }
                    break;

                case 4:
                    System.out.println("\n");
                    double total = cart.calculateTotal();
                    String formattedTotal = String.format("%.2f", total);
                    cart.displayCart();
                    System.out.println("\n");
                    System.out.println("Total: Rs." + formattedTotal);
                    System.out.println("\n");
                    System.out.println("Thank you for shopping!");
                    System.out.println("x-----------x------------x");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please select a valid option.");
            }
        }
    }
}
