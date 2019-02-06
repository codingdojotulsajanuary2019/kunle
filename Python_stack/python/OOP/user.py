class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
        
    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print("User: {}, Balance: {}".format(self.name, self.account_balance))

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        print("User: {}, Balance: {} \nUser: {}, Balance: {}".format(self.name, self.account_balance, other_user.name, other_user.account_balance))

Alex = User("ALex", "all@python.com")
John = User("John", "jall@python.com")
Paul = User("paul", "pall@python.com")

Alex.transfer_money(John, 100)

Alex.make_deposit(100).make_deposit(200).make_deposit(150).make_withdrawal(150).display_user_balance()














