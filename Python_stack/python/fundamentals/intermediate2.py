x[1][0]=15
print (x)

students[0]["last_name"] = "Bryant"
print(students)

sports_directory["soccer"][0] = "Andres"
print(sports_directory)

z[0]["y"]=30
print(z)

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDictionary():
    for i in range(len(students)):
        for key in students[i].keys():
            print(key)
            print(students[i][key])
iterateDictionary()

def iterateDictionary2(key_name, list):
    for i in range(len(list)):
        print(list[i][key_name])
iterateDictionary2('first_name',students)

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dict):
    for key in dict:
        print(len(dict[key])," ",key)
        print(dict[key])
printInfo(dojo)
