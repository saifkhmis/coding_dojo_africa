class TestBank {
    public static void main(String[] args) {
		Account ba = new Account();
        System.out.println("New Acc No. - " + ba.getAccountNumber());
		ba.depositMoney(150.49, "checking");
		ba.depositMoney(1.00, "savings");
		ba.displayAccountBalance();
		System.out.println(Account.totalHoldings);
		ba.withdrawMoney(60, "checking");
		ba.withdrawMoney(50, "savings");
		ba.displayAccountBalance();
		System.out.println(Account.totalHoldings);
        Account ba2 = new Account();
        System.out.println("New Acc No. - " + ba2.getAccountNumber());
		ba2.depositMoney(2, "checking");
		ba2.depositMoney(90, "savings");
		ba2.displayAccountBalance();
        ba2.withdrawMoney(80, "checking");
	}
}