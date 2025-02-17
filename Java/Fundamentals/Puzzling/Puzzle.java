
import java.util.ArrayList;
import java.util.Random;

public class  Puzzle{
    public ArrayList<Integer>getTenRolls(){
        ArrayList<Integer> random1 = new ArrayList<Integer>();
        Random rand = new Random();
        for (int i = 0; i < 10; i++) {
            random1.add(rand.nextInt(20)+1);
        }
        return random1;
    }
    public String getRandom(){
        Random rand = new Random();
        String letter ="abcdefguihdefzjfuiçhàefjàzifjifefnfzfsz ";
        char randomChar= letter.charAt(rand.nextInt(26));
        return String.valueOf(randomChar);
    }

    public  String genraPassword(){
        String password="";
        for (int i=0; i<8;i++){
            password=password+getRandom();
        }
        return password;
    }

    public ArrayList<String> getNewPassword(int length){
        ArrayList<String> SetPassword = new ArrayList<String>();
        for ( int i=0;i<length;i++){
            SetPassword.add(genraPassword());
        }
        return SetPassword;
    }

}


