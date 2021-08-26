function readPassengerInfo(passportNo:string,travelDate:Date):string{
   return passportNo+","+travelDate;
}

console.log(readPassengerInfo("K42865852",new
Date(2021,10,5)));
