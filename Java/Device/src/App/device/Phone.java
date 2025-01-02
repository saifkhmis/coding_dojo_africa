package App.device;

public class Phone extends Device{
	public void makeCall() {
	       if (battery <= 0) {
	            System.out.println("Battery is dead. Please recharge.");
	        } else {
	            System.out.println("You make a call.");
	            battery -= 5;
	            status();
	        }
	}
	
	public void playGame() {
        if (battery < 25) {
            System.out.println("Battery too low to play a video game. Please recharge.");
        } else {
            System.out.println("You play a video game.");
            battery -= 20;
            status();
        }
	}
	
	public void charge() {
        System.out.println("You charge the phone.");
        battery += 50;
        if (battery > 100) {
            battery = 100;
        }
        status();
	}}
  