var x = Math.floor(Math.random() * 50+1) ;
var a = document.getElementById("nbr1"); 
let i = 1; // i : compteur pour les tentatives
function envoyer(){
if (a.value == x) {
    document.getElementById("demo3").innerHTML = "Bravo"; 
    document.getElementById("btn").innerText ="Rejouer"; 
    document.getElementById("btn").disabled =true; 
}else{
    document.getElementById("tentative").innerHTML ="Tentatives: "+ i +"/10";
    document.getElementById("demo3").innerHTML = "Reessez encore!"; 
    i++;
    if (i>11) {
        document.getElementById("demo3").innerHTML = "vous avez tenté tous les chances";    
        document.getElementById("btn").disabled=true;
        a.disabled=true;}}    
}

  