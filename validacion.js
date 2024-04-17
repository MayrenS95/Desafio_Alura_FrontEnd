//asignando los valores de los campos del formulario de contacto


function validarFormulario(){

    let nombreContacto = document.getElementById('nombre').value;
    let emailContacto = document.getElementById('email').value;
    let asuntoContacto = document.getElementById('asunto').value;
    let mensajeContacto = document.getElementById('mensaje').value;
    let variable=0;

    if( (nombreContacto == "") || (emailContacto == "") || (asuntoContacto == "") || (mensajeContacto == "")){
        variable++;
    }

    if(variable==0){
        document.getElementById('boton').disabled = false;
    }else{
        document.getElementById('boton').disabled = true;
    }


    if (nombreContacto != ""){
        if(nombreContacto.length>50){
            alert("El campo nombre tiene más caracteres de los permitidos");}
    }else if (emailContacto != ""){
        if(emailContacto.indexOf("@")==-1){
            alert("El campo email no contiene el @");
        }else if(emailContacto.indexOf(".com")==-1){
            alert("El campo email no contiene un dominio")
        }
    }else if (asuntoContacto != ""){
        if(asuntoContacto.length>50){
            alert("El campo asunto tiene más caracteres de los permitidos");
        }
    }else if (mensajeContacto != ""){
        if(mensajeContacto.length>300){
            alert("El campo mensaje tiene más caracteres de los permitidos");}
            }


}


function limpiarCaja() {

    document.getElementById('nombre').value="";
    document.getElementById('email').value="";
    document.getElementById('asunto').value="";
    document.getElementById('mensaje').value="";
}


document.getElementById('nombre').addEventListener("keyup",validarFormulario);
document.getElementById('email').addEventListener("keyup",validarFormulario);
document.getElementById('asunto').addEventListener("keyup",validarFormulario);
document.getElementById('mensaje').addEventListener("keyup",validarFormulario);
limpiarCaja();


