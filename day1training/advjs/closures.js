balance=function(customerId,name){
    var amount=(Math.random()*1000000).toFixed(0)
   //inner function
    return{
        getBalance:function(){
          return customerId+","+amount;
        },
        getCIBILScore:function(){
            return name+","+(Math.random()*1000).toFixed(0);
        }

    }
}

console.log(balance(183432,'arun').getBalance());
console.log(balance(4387568734,'Sam').getCIBILScore());
