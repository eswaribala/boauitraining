class ForexTransaction{
    convert(amount){
        return amount*70;
    }
}

function loadData(){
    return (Math.random()*10000).toFixed(0);
}

export{ForexTransaction,loadData};
