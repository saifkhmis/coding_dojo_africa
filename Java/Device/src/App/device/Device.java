package App.device;

public class Device {
	protected int battery=100;
	
	protected void status() {
        if (battery <= 0) {
            battery = 0;
            System.out.println("Battery is dead. Please recharge.");
        } else if (battery < 10) {
            System.out.println("Warning: Battery critical! Please charge immediately.");
        }
        System.out.println("Battery level: " + battery + "%.");
    }
	}
