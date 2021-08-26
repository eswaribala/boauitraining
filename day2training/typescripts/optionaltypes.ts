let firstName:string;
let lastName:string;
let dob:Date;
let active:boolean;
enum gender{MALE,FEMALE,TRANSGENDER}
let customerGender:gender;
firstName="Parameswari";
lastName="Bala";
dob=new Date(70,11,2);
active=true;
customerGender=gender.FEMALE;
console.log(firstName,lastName,dob,active,gender[customerGender]);

let accounts:any={
    accountId:39756937,
    balance:785687384,
    dot:new Date()
}
console.log(accounts);
accounts=5876836;
console.log(accounts);
accounts="Transaction Completed";
console.log(accounts);
