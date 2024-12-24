import java.util.ArrayList;
public class TestPuzzle {
    
	public static void main(String[] args) {
		Puzzle generator = new Puzzle();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);

        System.out.println(generator.getTenRolls());
        System.out.println(generator.getRandom());
        System.out.println(generator.genraPassword());
        System.out.println(generator.getNewPassword(8));
        }}