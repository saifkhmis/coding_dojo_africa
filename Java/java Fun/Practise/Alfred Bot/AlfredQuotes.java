
import java.util.Date;

public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return String.format("Good morning  %s nice to met you ,",name);
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        return String.format("it is %s", new Date());
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
       if(conversation.indexOf("Alexis")>-1){
        return "what is your favorite anime of all time ? ";
       }
       if(conversation.indexOf("Alfred")>-1){
        return "for me is naruto   ";
       }
       return "maybe i will say one pice";
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

