import {ForexTransaction,loadData} from "./forex.js";
import {HousingLoan} from "./loan.js";

var forex=new ForexTransaction();
console.log(forex.convert(483658743));

console.log(loadData());

var hl=new HousingLoan();
console.log(hl.initiateProcess(496259694));
