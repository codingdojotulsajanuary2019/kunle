Basic - Print all integers from 0 to 150.
for x in range(150):
    print(x)

Multiples of Five - Print all the multiples of 5 from 5 to 1,000
for x in range(5,1000,5):
    print(x)

Counting, the Dojo Way
for x in range(1,100):
    if x % 10 == 0:
        print("coding dojo")
    elif x % 5 == 0:
        print("Coding")
    else: print(x)

Whoa. That Sucker's Huge
final = 0
for x in range(500000):
    final += x
print(final)

Countdown by Fours
for x in range(2018,0,-4):
    print(x)

Flexible Counter
lowNum = 2
highNum = 9
mult = 3
for x in range(lowNum,highNum + 1):
    if x % mult ==0:
        print(x)
