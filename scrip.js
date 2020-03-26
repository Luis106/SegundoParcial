
var acum = 0;


function Re_Act(val){
//alert(val);
acum += val;
document.getElementById('A').setAttribute("value",acum);
cal()
}

function Est_T(){
var total =  document.getElementById('T').value;
alert("El total de manzanas estimadas es de "+(total*45) + " unidades"); 
}

function Est_A(){
    alert("El acumulado de manzanas estimados es de "+(acum * 45) + " unidades");     
}
function Por(){
    var total =  document.getElementById('T').value;
    var por = (acum * 100 /total );
    document.getElementById("Por").innerHTML = por;
    //alert("El porcentaje actual es de " + por + "%");  
    if (por >= 70  ){
        document.getElementById("myImage").src = "res/truck.png";
        alert("Hora de salir"); 
    }
}
function cal(){
    var total =  document.getElementById('T').value;
    var por = (acum * 100 /total );
    if (por >= 70 ){
        document.getElementById("myImage").src = "res/truck.png";
        alert("Hora de salir"); 
    }
}

