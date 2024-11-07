/*Personas en un Bar

El gerente de una discoteca desea tener un registro del número de personas que ingresan al local. Para mantener un ambiente seguro y controlado, solo se permite la entrada a personas de entre 18 y 40 años. Actualmente, el total de personas en el local es de 270.

El gerente necesita saber:

* Cuántas personas menores de 21 años han ingresado.
* Cuántas personas de 21 años o más han ingresado.
* El promedio de edad de las personas que ingresaron al local.

Para la simulación de las edades de los asistentes, puedes utilizar la siguiente función que genera un número aleatorio entre un valor mínimo y máximo:
*/

function aleatorio(min: number, max: number) { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function registroDePersonas(totalDePersonas: number) {
    let menoresDe21: number = 0;
    let mayoresDe21: number = 0;
    let sumarEdades: number = 0;

    for (let i = 0; i < totalDePersonas; i++) {
        const edad = aleatorio(18,40);

        if (edad < 21){
            menoresDe21++
        } else{
            mayoresDe21++
        }
        sumarEdades += edad;
    }

    const calcularPromedioEdades = sumarEdades / totalDePersonas;

    console.log(`El total de personas menores de 21 años es de: ${menoresDe21}`);
    console.log(`El total de personas mayores de 21 años es de: ${mayoresDe21}`);
    console.log("El promedio de las edades de las personas en el local es de: ", calcularPromedioEdades.toFixed(2)); //Uso toFixed para que no salga un choclo de decimales.
}
registroDePersonas(270)