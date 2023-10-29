package shopingCartProject;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

class ShoppingCart {
   private List<Product> items = new ArrayList();

   public ShoppingCart() {
   }

   public void addToCart(Product var1) {
      boolean var2 = false;
      Iterator var3 = this.items.iterator();

      while(var3.hasNext()) {
         Product var4 = (Product)var3.next();
         if (var4.getName().equals(var1.getName())) {
            int var5 = var4.getQuantity();
            int var6 = var5 + this.getProductQuantityFromUser(var4.getName());
            var4.setQuantity(var6);
            var2 = true;
            break;
         }
      }

      if (!var2) {
         var1.setQuantity(this.getProductQuantityFromUser(var1.getName()));
         this.items.add(var1);
      }

      this.viewCarts();
   }

   public void removeFromCart(int var1, int var2) {
      if (var1 >= 0 && var1 < this.items.size()) {
         Product var3 = (Product)this.items.get(var1);
         if (var3.getQuantity() > var2) {
            var3.setQuantity(var3.getQuantity() - var2);
         } else if (var3.getQuantity() == var2) {
            this.items.remove(var1);
         } else {
            System.out.println("Invalid quantity. Quantity in cart is less than the specified quantity.");
         }
      } else {
         System.out.println("Invalid item index. Please enter a valid index.");
      }

   }

   private int getProductQuantityFromUser(String var1) {
      Scanner var2 = new Scanner(System.in);
      System.out.print("Enter quantity for " + var1 + ": ");
      int var3 = var2.nextInt();
      return var3;
   }

   public double calculateTotal() {
      double var1 = 0.0;

      Product var4;
      for(Iterator var3 = this.items.iterator(); var3.hasNext(); var1 += var4.getPrice() * (double)var4.getQuantity()) {
         var4 = (Product)var3.next();
      }

      return var1;
   }

   public void displayCart() {
      System.out.println("Items in your shopping cart:");
      Iterator var1 = this.items.iterator();

      while(var1.hasNext()) {
         Product var2 = (Product)var1.next();
         var2.display();
      }

   }

   public void viewCarts() {
      System.out.println("Items in your shopping cart:");

      for(int var1 = 0; var1 < this.items.size(); ++var1) {
         System.out.print(var1 + 1 + ". ");
         ((Product)this.items.get(var1)).display();
      }

   }

   public Product getItemByIndex(int var1) {
      return var1 >= 0 && var1 < this.items.size() ? (Product)this.items.get(var1) : null;
   }
}
