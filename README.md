# personal-budget

### Funcion del programa:

El programa solicita al usuario que ingrese una categoria de donde se solicitara ingresar datos como el monto que se uso en esta categoria y si aquel monto es clasificado como ingreso o egreso, para posteriormente procesarlo y mostrar un resumen detallado con calculos finales que indiquen el saldo total entre otros datos.

### Funciones creadas:

**registrarIngresoOEgreso:** Esta funcion nos permite ingresar los datos iniciales como el nombre de la categoria, el tipo de transaccion, el monto y la confirmacion para agregar mas categorias, en esta funcion se implementa el codigo necesario para validar el ingreso correcto de los datos.

**calcularTotalSaldo:** Esta funcion recorre el array de transacciones para calcular los ingresos y egresos totales, para posteriromente devolvernos valores importantes que nos serviran para nuestro resumen final.

**mostrarResumen:** Esta funcion cumple con la tarea de mostrar un resumen general al usuario acerca de sus gastos e ingresos.

### Reflexiones

Las estructuras de control de flujo fueron importantes en la elaboracion del programa, ya que cumplieron un rol importante para verificar el ingreso correcto de datos que el usuario ingresaba en cada campo y tambien para el procesamiento de los montos de ingreso y egresos, estas estructural de control nos brindan un buen manejo de la logica que queremos implementar en nuestro programa.
