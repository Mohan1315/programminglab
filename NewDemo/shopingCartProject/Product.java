package shopingCartProject;

import java.io.PrintStream;

abstract class Product implements Displayable {
   private String name;
   private double price;
   private int quantity;

   public Product(String var1, double var2) {
      this.name = var1;
      this.price = var2;
      this.quantity = 1;
   }

   public String getName() {
      return this.name;
   }

   public double getPrice() {
      return this.price;
   }

   public int getQuantity() {
      return this.quantity;
   }

   public void setQuantity(int var1) {
      this.quantity = var1;
   }

   public void display() {
      PrintStream var10000 = System.out;
      String var10001 = this.getName();
      var10000.println(var10001 + " - Rs." + this.getPrice() + " x " + this.getQuantity());
   }

   public abstract String getInfo();
}
