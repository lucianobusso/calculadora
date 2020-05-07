function suma(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var total = num1*1+num2*1;
    var mensaje = "El resultado es: "
    document.getElementById("resultado").innerHTML = mensaje+ total;
}
function resta(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var total = num1*1-num2;
    var mensaje = "El resultado es: "
    document.getElementById("resultado").innerHTML = mensaje+ total;
}
function mult(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var total = num1*1*num2;
    var mensaje = "El resultado es: "
    document.getElementById("resultado").innerHTML = mensaje+ total;
}
function divi(){
    if (num2 = "0"){
        var mensaje = "IMPOSIBLE DIVIDIR POR 0...";
        document.getElementById("resultado").innerHTML = mensaje;
    } else {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var total = num1*1/num2*1;
    var mensaje = "El resultado es: "
    document.getElementById("resultado").innerHTML = mensaje+ total;
    }
}


