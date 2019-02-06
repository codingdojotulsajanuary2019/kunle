class Bank_account:
    def __init__(self, amount=0, interest=0.01):
        self.balance = amount
        self.interest = interest
    
    def deposit(self, amount):
        self.balance += amount
        self.display_info
        return self
    
    def withdraw(self, amount):
        if self.balance < amount:
            self.balance -= 5
            print("Insufficient Balance")
        else:
            self.balance -= amount
        self.display_info
        return self

    def yield_interest(self):
        if self.balance > 0:  
            x = self.balance * self.interest
            self.balance += x
        self.display_info
        return self

    def display_info(self):
        print(f"Balance: ${self.balance}")
        return self

# Save = Bank_account(0,float(0.01))
# Check = Bank_account(0,float(0.01))

# Save.deposit(150).deposit(100).deposit(250).withdraw(50).yield_interest().display_info()

Check = Bank_account(amount=200)
Check.withdraw(50)
# Check.display_info()