ids=new Set();
for(let i=0;i<10000;i++){
    ids.add((Math.random()*100000).toFixed(0));
}

ids.forEach(id=>{
    console.log(id);
})
