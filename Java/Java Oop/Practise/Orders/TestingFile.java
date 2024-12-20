public class TestingFile {
    public static void main(String[] args) {
      Item item1 = new Item("drip coffee", 1.50);
        Item item2 = new Item("capuccino", 3.50);
        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order("Bob");
        Order order4 = new Order("Sammy");
        Order order5 = new Order("Tina");
        order1.addItem(item1);
        order1.addItem(item2);
        order2.addItem(item1);
        order2.addItem(item2);
        order3.addItem(item1);
        order3.addItem(item2);
        order4.addItem(item2);
        order4.addItem(item1);
        order5.addItem(item1);
        order5.addItem(item2);
        order5.addItem(item2);
        System.out.println(order5.getStatuesMessage());
        order5.setReady(true);
        System.out.println(order5.getStatuesMessage());
        System.out.println(order5.getOrderTotal());
        order5.display();
    }
}