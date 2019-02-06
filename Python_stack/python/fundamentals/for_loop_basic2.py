def biggie(num):
    for x in range(len(num)):
        if num[x] > 0:
            num[x] = "big"
    return num
print(biggie([-1, 3, 5, -5]))

def positives(num):
    count = 0
    for x in range(len(num)):
        if num[x] > 0:
            count+=1
    num[len(num)-1] = count
    return num
print(positives([-1,1,1,1]))

def total(num):
    sum = 0
    for x in range(len(num)):
        sum+= num[x]
    return sum
print(total([6,3,-2]))

def average(num):
    sum = 0
    for x in range(len(num)):
        sum+= num[x]
    return sum/len(num)
print(average([1,2,3,4]))

def length(num):
    return len(num)
print(length([]))

def minimum(num):
    if num == []:
        return "false"
    else:
        min = num[0]
        for x in range(len(num)):
            if num[x] < min:
                min = num[x]
    return min
print(minimum([37,2,1,-9]))

def maximum(num):
    if num == []:
        return "false"
    else:
        max = num[0]
        for x in range(len(num)):
            if num[x] > max:
                max = num[x]
    return max
print(maximum([37,2,1,-9]))

def analysis(num):
    min = num[0]
    max = num[0]
    avg = 0
    sum = 0
    for x in range(len(num)):
        if num[x] > max:
            max = num[x]
        elif num[x] < min:
            min = num[x]
        sum += num[x]
    avg = sum/len(num)
    new = {'sumTotal':sum, 'average':avg, 'minimum':min, 'maximum':max, 'length':len(num)}
    return new
print(analysis([37,2,1,-9]))

def rev(num):
    print(len(num))
    for x in range(int(len(num)/2)):
        temp = num[x]
        num[x]=num[len(num)-1-x]
        num[len(num) -x -1] =temp
    return num
print(rev([37,2,1,-9]))
