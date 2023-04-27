/*
    Realiza un algoritmo que:

    1) Muestre un  mensaje en pantalla indicando una serie de requisitos
    2) Pida 2 veces el nombre de usuario mediante prompt
    3) Compare si son identicos
    4) Verifique si el usuario tiene al menos 5 caracteres y maximo 15
    5) Si comiensa con @
    6) Si termina con $
    7) Luego muestra un mensaje en pantalla indicando si cumple los requisitos indicados
        7.1) en caso de no cumplir TODOS los requisitos, muestra otro mensaje indicando los requisitos
        cumplidos y los fallados.
        7.2) en caso de cumplir TODOS los requisitos, muestra un mensaje en pantalla con el nombre del usuario
        y un mensaje de felicidades, usuario registrado.
    8) Adicional, muestra un mensaje preguntando si desea reiniciar el proceso (Sin Loops)

*/
let nombre_usuario , nombre_usuario_compr
Usuario();

function Usuario(){

nombre_usuario = prompt (`INGRESO DE DATOS

¡Bienvenido! Por favor, ingrese el nombre del usuario a registrar
recuerde que debe cumplir con lo siguiente:

        1. Debe comenzar con "@"
        2. Debe terminar con "$"
        3. Debe tener entre 8 y 10 caractéres`);
if (nombre_usuario === null){
        close();
    }   

nombre_usuario_compr = prompt (`RECTIFICACIÓN DE DATOS

Por favor ingrese nuevamente su usuario.  ¡Recuerde!

        1. Debe comenzar con "@"
        2. Debe terminar con "$"
        3. Debe tener entre 8 y 10 caractéres`);


    if (nombre_usuario === nombre_usuario_compr){
            if (nombre_usuario.startsWith("@")) {
                if (nombre_usuario.endsWith ("$")) {
                    if (nombre_usuario.length <=15 ) {
                        if (nombre_usuario.length >= 8) {
                            alert(`¡Felicidades!
    El usuario a sido agregado correctamente`);
                            reingresar_usuario();    
                        }else{
                            alert(`¡ATENCIÓN!
¡El usuario no cumple con los requisitos, pulse aceptar para intentar de nuevo!`);
            Usuario();
                        }

                    }else{
                            alert(`¡ATENCIÓN!
¡El usuario no cumple con los requisitos, pulse aceptar para intentar de nuevo!`);
            Usuario();
                        }
                }else{
                    alert(`¡ATENCIÓN!
¡El usuario no cumple con los requisitos, pulse aceptar para intentar de nuevo!`);
            Usuario();
                }
            }else{
                alert(`¡ATENCIÓN!
¡El usuario no cumple con los requisitos, pulse aceptar para intentar de nuevo!`);
            Usuario();
            }
        }else{
            alert(`¡ATENCIÓN!
¡El usuario no cumple con los requisitos, pulse aceptar para intentar de nuevo!`);
            Usuario();
        }
};


function reingresar_usuario(){
    let respuesta_usuario = +prompt (`¿Desea ingresar otro usuario?
    1. Si
    2. No`);
    switch (respuesta_usuario){
            case 1: 
                Usuario ();
                break;
            case 2:
                alert("Gracias por usar el programa, hasta pronto ✌")
                close();
                break;
            default:
                alert(`Disculpe la opción ingresada no es valida, pulse "aceptar" para continuar`)
                reingresar_usuario();
                break;

    }
}
