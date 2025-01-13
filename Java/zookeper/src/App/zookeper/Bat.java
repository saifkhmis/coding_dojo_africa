package App.zookeper;

public class Bat extends Mammal{
	public Bat(int energyLevel) {
		super(300);
	}
	public void fly() {
		System.out.println("The bat is airborne ");
		energyLevel -= 50;
	}
	public void eatHumans() {
		System.out.println("The bats satisfaction");
		energyLevel += 25;
	}
	public void AttackTown() {
		System.out.println("bat's attack");
		energyLevel -= 100;
	}
	

}
