// binary array of 4 bytes, all have the maximal value 255
let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

let dataView = new DataView(buffer);

// get 8-bit number at offset 0
console.log( dataView.getUint8(0) ); // 255

// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535
console.log( dataView.getUint16(0) ); // 65535 (biggest 16-bit unsigned int)

// get 32-bit number at offset 0
console.log( dataView.getUint32(0) ); // 4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0, 0); // set 4-byte number to zero, thus setting all bytes to 0

let testData=new Array();
for(let i=0;i<100;i++){
    testData.push((Math.random()*100).toFixed(0));
    //data[i]=(Math.random()*100).toFixed(0);

}
testData.forEach(x=>{
   // console.log(x);
})
console.log(typeof(testData) );
let data=new Uint8Array(100);
for(let i=0;i<100;i++){
     //data.push((Math.random()*100).toFixed(0));
    data[i]=(Math.random()*100).toFixed(0);

}

data.forEach(x=>{
    //console.log(x);
})

console.log(typeof(data) );
