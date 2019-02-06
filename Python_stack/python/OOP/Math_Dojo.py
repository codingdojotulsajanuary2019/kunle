class MathDojo:
    def __init__(self):
    	self.result = 0
    def add(self, num, *nums):
        j = 0
        for i in nums:
            j += i
        self.result += num + j
        return self
    def subtract(self, num, *nums):
        j = 0
        for i in nums:
            j += i
        self.result -= num + j
        return self
    	
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)