console.log("<----- Personal Budget ----->");

/**
 * Como usuario, quiero registrar el nombre, tipo(ingreso o egreso) y monto
 * de una compra, para llevar un control de mi dinero,
 * 
 * ************************
 * CRITERIOS DE ACEPTACION:
 * ************************
 * El sistema solicita el nombre y duracion
 * Si el nombre esta vacio o la duracion es menor o igual a cero, muestra un mensaje
 * Si los datos son validos, se guarda la actividad
 */

// variable global que permita registrar las operaciones
const transacciones = [];

//nombrar una funcion
function registrarIngresoOEgreso() {
    while (true) {
        let transaccion = prompt("Ingrese la nueva transaccion");
        while(!transaccion){
            /** !transaccion significa si transaccion es falsy
             *  los valores falsy con aquellos considerados falso en un contexto:
             * ""(cadena vacia)
             * 0
             * null
             * undefined
             * NaN
             * false
             */
            alert("El nombre de la transaccion no puede estar vacio");
            transaccion = prompt("Ingrese el nombre de la transaccion");
        }
        let tipoDeTransaccion;
        while(true){
            tipoDeTransaccion = prompt(
                "Escoga el tipo de transaccion \n1) Ingreso\n 2) Egreso\n Solo debe poner el numero de la opcion"
            );
            if(tipoDeTransaccion == "1" || tipoDeTransaccion == "2")break;
            alert("Opcion invalida. Debe ingresar 1 para Ingreso o 2 para Egreso");
        }
        let monto;
        while(true){
            monto = parseFloat(prompt("Ingrese el monto de la transaccion:"));
            /**parseFloat convierte esa cadena a un numero con decimales
             * ***
             * ejm:
             * ***
             * Usuario ingresa "50" -> parseFloat("50") devuelve 50(numero).
             * Usuario ingresa "abc -> parseFloat("abc") devuelve NaN(Not a NUmber)
             */
            if(!isNaN(monto) && monto > 0) break;
            /**&&-> Ambas condiciones
             * ||-> Solo una condicion
             */
            alert("El monto debe ser un numero mayor a 0");
        }

        // Guardamos la transaccion en el array global
        transacciones.push({
            transaccion,
            tipo: tipoDeTransaccion === "1" ? "Ingreso" : "Egreso",
            /**Operador ternario 
             * Si tipoDeTransaccion es 1 asigna Ingreso,si no asigna Egreso;
            */
            monto,
            fechaDeCreacion: new Date().toLocaleDateString,
            /**toLocalString convierte la fecha en un formato legible
             * segun la configuracion del navegador
             */
        });

        //Preguntamos si desea Continuar
        const confirmacion = confirm("Desea agregar otra transaccion?");
        // ok -> true, continuar 
        // cancel -> false, terminar
        // en que caso deberiamos acabar el while
        if (!confirmacion) break;
    }

}

//Funcion para calculaar saldo total
function calcularTotalSaldo(){
    let totalIngresos = 0;
    let totalEgresos = 0;

    for(let transaccion of transacciones){
        /**Se usa for...of para recorrer cada objeto dentro del array transacciones
         * en cada iteracion, la variable transaccion almacena un objeto de la lista
         * let transaccion declara una nuvea variable local dentro del bucle,
         * en cada iteracion, transaccion toma el valor de un elementor del 
         * array transacciones.
         * ejm:
         * let transaccion = { transaccion: "Cena", tipo:"Egreso", monto:45.50}
         */
        if(transaccion.tipo == "Ingreso"){
            totalIngresos += transaccion.monto;
        } else {
            totalEgresos += transaccion.monto;
        }
    }
    return{ totalIngresos,totalEgresos, saldo: totalIngresos - totalEgresos};
}

//Funcion para mostrar el resumen final
function mostrarResumen(){
    if(transacciones.length === 0){
        console.log("No se han registrado transacciones aun");
        return;
    }

    const {totalIngresos, totalEgresos, saldo} = calcularTotalSaldo();
    /**Se usa destructuring { totalIngresos, totalEgresos, saldo} para extraer los valores
     * y almacenarlos en variables
    */

    console.log("\nResumen Final");
    console.log("-----------------------");
    console.log(`Total de movimientos registrados: ${transacciones.length}`);
    console.log(`Saldo total: $${saldo.toFixed(2)}`);
    console.log("\nDesglose por tipo:");
    console.log(`- Ingresos: $${totalIngresos.toFixed(2)}`);
    console.log(`- Egresos: $${totalEgresos.toFixed(2)}`);
}

//Ejecucion del programa
registrarIngresoOEgreso(); 
mostrarResumen();