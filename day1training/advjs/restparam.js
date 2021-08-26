//rest param packs args to array
function getEmployee(id=48356834,...skillSet){
    console.log(id);
    skillSet.forEach(skill=>{
        console.log(skill);
    })
}
getEmployee(84358);
getEmployee(84358,"java");
getEmployee(84358,"java","c#");
getEmployee(84358,"java","c#","Python");
getEmployee(84358,"PHP");
getEmployee();
