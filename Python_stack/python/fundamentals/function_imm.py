import random
def randInt(min="", max=""):
    num = random.random()
    return num
print(randInt())

import random
def randInt(min="", max=""):
    num = random.random() * "max"
    return num
print(randInt(max=50))

import random
def randInt(min="", max=""):
    num = random.random() * "min"
    return num
print(randInt(min=50))

# import random
def randInt(min="", max=""):
    if(min>max):
        return "minimum value exceeds maximum"
    else:
        num = random.random() * "min"
        return num
print(randInt(min=50,max=100))