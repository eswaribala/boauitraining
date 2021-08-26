interface TradeBooking{
    traderId:number;
    //optional type
    fromClientName?:string;
    toClientName: string;
    bookingAmount:number;
    dot:Date;
    noOfShares:number
}
//anonymous object
var tradeBooking:TradeBooking={
    traderId:48265847,
    fromClientName:'HCL',
    toClientName:'Virtusa',
    bookingAmount:937569463,
    dot:new Date(121,3,27),
    noOfShares:5000
}

console.log(tradeBooking);

interface TradeTransfer{
    //public abstract method
   compute: (tradeBooking:TradeBooking)=>string
}
/*
var tradeTransfer:TradeTransfer=(tradeBooking:TradeBooking)=>{
      return `The Amount to be transferred for the current 
      booking=${tradeBooking.noOfShares*450}`;
}
console.log(tradeTransfer(tradeBooking));
*/

interface TradeTransferV1{
    isTradeActive:Function;
}
class TradeTransferImpl implements TradeTransfer{

compute(tradeBooking:TradeBooking):string{
    return `The Amount to be transferred for the current 
      booking=${tradeBooking.noOfShares*450}`;
}
}

var tradeTransferImpl=new TradeTransferImpl();
console.log(tradeTransferImpl.compute(tradeBooking));
