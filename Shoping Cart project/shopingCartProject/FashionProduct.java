package shopingCartProject;

import java.io.PrintStream;

class FashionProduct extends Product {
   private String brand;

   public FashionProduct(String var1, double var2, String var4) {
      super(var1, var2);
      this.brand = var4;
   }

   public void display() {
      PrintStream var10000 = System.out;
      String var10001 = this.getName();
      var10000.println(var10001 + " by " + this.brand + " - Rs." + this.getPrice() + " x " + this.getQuantity() + " = Rs." + this.calculateTotal());
   }

   public String getInfo() {
      return "Brand: " + this.brand;
   }

   public double calculateTotal() {
      return this.getPrice() * (double)this.getQuantity();
   }
}
