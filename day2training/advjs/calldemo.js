//create Object
const person= {
    fullName:function(){
        return this.firstName+"-"+this.lastName;
    }

}

const p1={
    firstName:"Parameswari",
    lastName:"Bala",
}

const p2={
    firstName:"Vignesh",
    lastName:"Bala",
}
//syntax should be intact
//treats parameter as arguments
console.log(person.fullName.call(p1));
