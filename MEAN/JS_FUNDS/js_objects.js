function lists(arr){
    for(var x =0; x < arr.length; x++){
        console.log(`Name: ${arr[x].name}, Cohort: ${arr[x].cohort}`);
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
lists(students);


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function workers(users){
    for(var key in users){
        console.log(key.toUpperCase());
        for(var x =0; x<users[key].length; x++){
            num = users[key][x].first_name.length + users[key][x].last_name.length  
            console.log(`${x+1} - ${users[key][x].first_name}, ${users[key][x].last_name} - ${num}`);
        };  
        console.log("");
    }
 }
 workers(users);

