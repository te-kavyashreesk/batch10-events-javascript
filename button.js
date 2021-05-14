
 var y=document.getElementById("fruits")
var temp=true;
 function deleteEl( )
 {
     if(temp==true)
     {
        y.removeChild(y.firstElementChild);
        temp=false;
     }
     else{
        return false 
     }
     

      
 }


 var btn = document.getElementById("test");

btn.addEventListener("click" ,addTech);
var temp=true;

var list = document.getElementById("fruits");
function addTech(){
    if(temp==true)
    {
var x = document.createElement("li")
    x.innerText = "kiwi";
    console.log(list.childNodes);
    list.insertBefore(x,list.childNodes[4]);
    temp=false;
    }
    else{
        return false;
    }

}


