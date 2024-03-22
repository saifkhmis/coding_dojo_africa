class BankAccount:
    accounts=[]
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance):
        self.int_rate=int_rate
        self.balance=balance
        BankAccount.accounts.append(self)
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance+=amount
        return self
        # your code here
    def withdraw(self, amount):
        if (self.balance - amount)>=0:
            self.balance-=amount
        else:

            print("Insufficient funds: Charging a $5 fee")
            print("and deduct $5")
            self.balance-=5
        return self
        #decreases the account balance by the given amount if there are sufficient funds; if there is not enough money, print a message "Insufficient funds: Charging a $5 fee" and deduct $5
        # your code here
    def display_account_info(self):
        print(f"balance:{self.balance}")
        return self
        # your code here
    def yield_interest(self):
        if self.balance >0 : 
            self.balance += (self.balance * self.int_rate)
            return self
        # your code here
    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()
saving=BankAccount(.05,10000)
checking=BankAccount(.02,90000)
saving.deposit(50).deposit(100).deposit(900).withdraw(10).yield_interest().display_account_info()
checking.deposit(50).deposit(54).deposit(80).withdraw(84).yield_interest().display_account_info()
BankAccount.print_all_accounts