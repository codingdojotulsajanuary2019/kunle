Countdown 
def countdown(num):
    new = []
    for x in range(num,-1,-1):
        new.append(x)
    return new
print(countdown(5))

Print and Return
def preturn(x,y):
    print(x)
    return y
print(preturn(1,2))

First Plus Length
def first_plus_length(num):
    return num[0]+len(num)
print(first_plus_length([1,2,3,4,5]))

Values Greater than Second
def second(num):
    count = 0
    new = []
    for x in range(len(num)):
        if len(num)<2:
            return "false"
        if num[x] > num[1]:
            new.append(num[x])
            count+=1
    print(count)
    return new
print(second([5,2,3,2,1,4]))

This Length
def length_and_value(x,y):
    new = []
    for i in range(x):
        new.append(y)
    return new
print(length_and_value(4,7))
