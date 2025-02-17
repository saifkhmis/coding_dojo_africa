import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CafeTest {
    public static void main(String[] args) {
        Cafe appTest = new Cafe();
        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal());
        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n\n",appTest.getOrderTotal(lineItems));
        System.out.println("----- Display Menu Test-----");
        List<String> loadMenu = Arrays.asList(
            "drip coffee",
            "cappucino",
            "latte",
            "mocha"
        );
        ArrayList<String> menu = new ArrayList<String>();
        menu.addAll(loadMenu);
        appTest.displayMenu(menu);
        System.out.println("\n----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        for (int i = 0; i < 3; i++) {
            appTest.addCustomer(customers);
            System.out.println("\n");
        }
        System.out.println("----- Display Menu NINJA BONUS Test-----");
        List<Double> loadPrices = Arrays.asList(1.5, 3.5, 4.5, 3.5);
        ArrayList<Double> prices = new ArrayList<Double>();
        prices.addAll(loadPrices);
        appTest.displayMenu(menu, prices);
        System.out.println("----- Price Chart Test-----");
        appTest.printPriceChart("Chai Latte Mix",4.5, 3);
        appTest.printPriceChart("Specialty Coaster", 2.0, 5);
        System.out.println("\n----- Barista Adding Test-----");
        ArrayList<String> newCustomers = new ArrayList<String>();
        appTest.addCustomers(newCustomers);
    }
}