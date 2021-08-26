window.addEventListener('load',function(){
   ajaxRequest();
})



function ajaxRequest(){
   var httpRequest=null;

//create ajax object
    try
    {
        httpRequest=new XMLHttpRequest();
    }
    catch(e)
    {
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP3.0");
        }
        catch(e)
        {
            console.log('Ajax Object cannot be created');
            return false;
        }

    }
    console.log("Ajax object created");

    httpRequest.onreadystatechange = function(){

        if(httpRequest.readyState == 4 && httpRequest.status == 200){
           //console.log(httpRequest.responseText);
           countries=JSON.parse(httpRequest.responseText);
           countries.forEach(country=>{
               console.log(country["capital"]);
           })

        }
    }
    httpRequest.open('GET','https://restcountries.eu/rest/v2/all',true);
    httpRequest.send(null);

}
