function cuota(){
    var nombre = document.getElementById("nombre").value;
    var cel = document.getElementById("cel").value;
    var uni = document.getElementById("uni").value;
    var carrera = document.getElementById("car").value;
    var valor;

    if(carrera=="ing" & uni =="ucc" ){
        valor = 79000;
    }if(carrera=="ing" &uni =="s21"){
        valor= 85000;
    }if(carrera=="abo" & uni =="ucc" ){
        valor = 70000;
    }if(carrera=="abo" &uni =="s21"){
        valor= 77000;
    }if(carrera=="med" & uni =="ucc" ){
        valor = 100000;
    }if(carrera=="med" &uni =="s21"){
        valor= 95000;
    }

document.getElementById("valor").value = valor;

}

function validar(){
    if(is)
    if (isNaN(cel)) {
        alert("Escriba un numero de telefono");
        document.getElementById("cel").value = "";
        document.getElementById("cel").focus();
    
    } if(isNan(nombre)) {
        alert("El nombre no puede contener numeros");
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();
    }


}


function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("cel").value = "";
    document.getElementById("uni").value = "";
    document.getElementById("car").value = "";
    document.getElementById("valor").value = "";
  }


 