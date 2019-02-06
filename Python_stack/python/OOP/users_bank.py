class Bank_account:
    def __init__(self, amount=0, interest=0.01):
        self.balance = amount
        self.interest = interest
    
    def deposit(self, amount):
        self.balance += amount
        print(f"Balance: ${self.balance}")
        return self
    
    def withdraw(self, amount):
        if self.balance < amount:
            self.balance -= 5
            print("Insufficient Balance")
        else:
            self.balance -= amount
        return self

    def yield_interest(self):
        if self.balance > 0:  
            x = self.balance * self.interest
            self.balance += x
        return self

    def display_info(self):
        print(f"Balance: ${self.balance}")
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = Bank_account(interest=0.02, amount=0)
        
    def deposit(self, amount):
        self.account.deposit(amount)

    def withdrawal(self, amount):
        self.account.withdraw(amount)

    def display_user_balance(self):
        print("User: {}, Balance: ${}".format(self.name, self.account.balance))

    def transfer_money(self, other_user, amount):
        self.account.withdraw(amount)
        other_user.account.deposit(amount)
        print("From User: {}, Balance: ${} \nTo User: {}, Balance: ${}".format(self.name, self.account.balance, other_user.name, other_user.account.balance))

Alex = User("ALex", "all@python.com")
John = User("John", "jall@python.com")
# Paul = User("paul", "pall@python.com")
Alex.deposit(200)
Alex.transfer_money(John,80)