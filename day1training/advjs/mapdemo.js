customers=new Map();

for(let i=0;i<100;i++){
    customers.set((Math.random()*100000).toFixed(0),"customer"+(i+1));
}

//read the values
for( var [key,value] of customers.entries()){
    console.log(key,value);
}
