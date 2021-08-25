console.log("Ready to rock....")

//conditional statement
//var data=Math.random()*1000;
//console.log(data);

var data=0;
//control statements
for(let i=0;i<100;i++) {
    data=Math.random() * 1000;
    if(data<200)
        console.log("Under Processing");
    else
        console.log("Completed Processing");

}
//console.log(i);
//to read input from user
const readLine=require("readline");
const r1=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("What is your name?",function(name){
   console.log(name);
   r1.close();
});

r1.on('close',function(){
    process.exit(0);
})

//const number=parseInt(readLine,10);
//console.log(number)
