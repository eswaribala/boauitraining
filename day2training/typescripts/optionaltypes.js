var firstName;
var lastName;
var dob;
var active;
var gender;
(function (gender) {
    gender[gender["MALE"] = 0] = "MALE";
    gender[gender["FEMALE"] = 1] = "FEMALE";
    gender[gender["TRANSGENDER"] = 2] = "TRANSGENDER";
})(gender || (gender = {}));
var customerGender;
firstName = "Parameswari";
lastName = "Bala";
dob = new Date(70, 11, 2);
active = true;
customerGender = gender.FEMALE;
console.log(firstName, lastName, dob, active, gender[customerGender]);
var accounts = {
    accountId: 39756937,
    balance: 785687384,
    dot: new Date()
};
console.log(accounts);
accounts = 5876836;
console.log(accounts);
accounts = "Transaction Completed";
console.log(accounts);
