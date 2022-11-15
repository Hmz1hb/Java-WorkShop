//enonce3 boucle for
function generer(){
   
    a = Number(document.getElementById("n1").value);
    document.getElementById("demo1").innerHTML = "";
     for(var i=1;i<=10;i++){
        document.getElementById("demo1").innerHTML += a + 
        ' x ' + i +  ' = '+ a*i +'<br>';
     }
 }