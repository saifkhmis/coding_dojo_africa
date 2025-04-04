import java.util.Random;
public class Account {
	public static int numAccounts = 0;
	public static double totalHoldings = 0;
    private static int generateId() {
		Random randGenerator = new Random();
        int randomId = randGenerator.nextInt(1000000000) + 999999999;
		return randomId;
	}
	private int accountNumber; 
	private double checkingBalance;
	private double savingsBalance;
	public Account() {
		Account.numAccounts += 1;
		this.checkingBalance = 0;
		this.savingsBalance = 0;
		this.accountNumber = Account.generateId();
	}
	public double getCheckingBalance() {
		return this.checkingBalance;
	}
	public double getSavingsBalance() {
		return this.savingsBalance;
	}
    public int getAccountNumber() {
        return this.accountNumber;
    }
	public void depositMoney(double amount, String account) {
		if(account.equals("savings"))
			this.savingsBalance += amount;
		else if(account.equals("checking"))
			this.checkingBalance += amount;
		Account.totalHoldings += amount;
	}
	public void withdrawMoney(double amount, String account) {
		boolean successful = false;
		if(account.equals("savings")) {
			if(this.savingsBalance - amount >= 0) {
				successful = true;
				this.savingsBalance -= amount;
			}
		}
		else if(account.equals("checking")) {
			if(this.checkingBalance - amount >= 0) {
				successful = true;
				this.checkingBalance -= amount;
			}
		}
		if(successful) {
			Account.totalHoldings -= amount;
		}
        else {
            System.out.println("Insufficient funds.");
        }
	}

	public void displayAccountBalance() {
		System.out.println(String.format("Savings: %.2f, Checking: %.2f", this.savingsBalance, this.checkingBalance));
	}
}