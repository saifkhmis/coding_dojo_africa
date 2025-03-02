package App.zookeper;

public class TestZoo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Gorilla gorilla =new Gorilla(100);
		gorilla.throwSomething();
		gorilla.throwSomething();
		gorilla.throwSomething();
		gorilla.eatBananas();
		gorilla.eatBananas();
		gorilla.climb();
		gorilla.displayEnergy();
		Bat bat =new Bat(300);
		bat.AttackTown();
		bat.AttackTown();
		bat.AttackTown();
		bat.eatHumans();
		bat.eatHumans();
		bat.fly();
		bat.fly();
		bat.displayEnergy();
	}

}
