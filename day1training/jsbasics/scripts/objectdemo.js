//parameterized constructor
function Customer(id,name,phoneNumber,jobType){
    this.id=id;
    this.name=name;
    this.phoneNumber=phoneNumber;
    var jobType=jobType;//private scope
    //getter method
    this.getJobType=function(){
        console.log(jobType)
    };
}
//
//instance methods
Customer.prototype.updatePhoneNumber=function(phoneNumber){
    this.phoneNumber=phoneNumber;
}

//create the object
var customer=new Customer(483658,'Arun',945699854698,'SSE');
console.log(customer);
customer.getJobType();
//invoke update phoneNumber
customer.updatePhoneNumber(1234498909);
console.log(customer);

