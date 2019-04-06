
users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
]

function userLanguages(arr){
  for(var x =0; x < arr.length; x++){
    result = "";
    result = arr[x].fname +" "+ arr[x].lname +" "+ "knows ";
    result2 = arr[x].fname +" "+ "is also interested in ";

    for(var j in arr[x].languages){
      result += arr[x].languages[j] +", "
    }
    console.log(result);

    for(var z in arr[x].interests){
      for(var i = 0; i < arr[x].interests[z].length; i++){
        result2 += arr[x].interests[z][i] +", ";
      }
    }
    console.log(result2);
  } 
  return result;
}

userLanguages(users);

