public class OrdersTest {
    public static void main(String[] args) {
    Items item1 = new Items();
    item1.name = "MOCHA";
    item1.price = 6.25;
    Items item2 = new Items();
    item2.name = "LATTE";
    item2.price = 5.65;
    Items item3 = new Items();
    item3.name = "CAPPUCCINO";
    item3.price = 4.75;
    Items item4 = new Items();
    item4.name = "DRIP COFFEE";
    item4.price = 3.25;

    
        Order order1 = new Order();
        System.out.println(order1.total);
        order1.name = "CINDHURI";
        Order order2 = new Order();
        order2.name = "JIMMY";
        Order order3 = new Order();
        order3.name = "NOAH";
        Order order4 = new Order();
        order4.name = "SAM";
        
        order2.item.add(item1);
        order2.total += item1.price;
        order3.item.add(item4);
        order3.total += item4.price;
        order1.ready = true;
        order4.item.add(item2);
        order4.item.add(item2);
        order4.total += item2.price * 2;
        order2.ready = true;
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);
        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);
        
    }
}