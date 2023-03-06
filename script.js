/*PROYECTO FINAL SPRINT 1
Cajero electrónico con Javascript
OBJETIVO: Simular el trabajo de un cajero electrónico usando lo aprendido en Javascript.
El aplicativo debe cumplir con los siguientes requerimientos técnicos:
1.  Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, 
contraseña y tipo de usuario. El tipo de usuario será: 1: administrador, 2: cliente. Guardarla en 
un array de objetos.
2.  Realizar   un   programa   que   al   inicio   solicite   ingresar   documento   y contraseña, 
si el usuario no existe debe indicar que no existe y volver a preguntar  usuario  y  contraseña,  
si  el  usuario  es  administrador,  debe permitir cargar el cajero de la siguiente manera:
3.  Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
4.  Almacenar esta información en un array de objetos.
5.  Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total 
general.
6.  Una  vez  el  cajero  esté  cargado,  debe  volver  a  solicitar  usuario  y contraseña, si es 
administrador, se repite el mismo proceso, sumar a la cantidad actual, si es cliente debe proseguir 
de la siguiente manera:
7.  Si  el  cajero  no  tiene  dinero  cargado,  debe  aparecer  un  mensaje  en consola: “Cajero 
en mantenimiento, vuelva pronto.” Y reiniciar desde el inicio.
8.  Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a  retirar.  Una  vez  
obtenida  la  información,  debe  indicar  cuánto  dinero puede entregar basado en la cantidad 
disponible y los tipos de billetes. Luego debe mostrar en consola cuántos billetes de cada 
denominación entregó. Priorizando siempre las denominaciones más altas para valores altos y 
redondeando a la cifra más cercana menor a la solicitada.
9.  Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada 
denominación.

FIN.
NOTA: Debes hacer que el cajero se vuelva a ejecutar, haciendo que vuelva a preguntar   usuario   y 
  contraseña   múltiples   veces,   cargar   dinero   si   es administrador, o retirar dinero si es 
cliente.*/
let arrayBilletes = [];
let docCliente;
let contraCliente;
let contadorBilletesCinco = 0;
let contadorBilletesDiez = 0;
let contadorBilletesVeinte = 0;
let contadorBilletesCincuenta = 0;
let contadorBilletesCien = 0;
let contadorTotal = 0;
let retirarBilletesCien = 0;
let retirarBilletesCincuenta = 0;
let retirarBilletesVeinte = 0;
let retirarBilletesDiez = 0;
let retirarBilletesCinco = 0;
let cantidadRetirar = 0;


/*1.  Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, 
contraseña y tipo de usuario. El tipo de usuario será: 1: administrador, 2: cliente. Guardarla en 
un array de objetos.*/
let arrayUsuario = [];
usuario1 = {
  nombre: 'Yesid Vanegas',
  nDocumento: 1002405727,
  contrasena: 'Yesid123',
  tipoUsuario: {
    administrador: 1,

  }

},
  arrayUsuario.push(usuario1);
usuario2 = {
  nombre: 'Alejandra Neisa',
  nDocumento: 1002405662,
  contrasena: 'aleja123',
  tipoUsuario: {
    cliente: 2,
  }
}
arrayUsuario.push(usuario2);



/*2.  Realizar   un   programa   que   al   inicio   solicite   ingresar   documento   y contraseña, 
si el usuario no existe debe indicar que no existe y volver a preguntar  usuario  y  contraseña,  
si  el  usuario  es  administrador,  debe permitir cargar el cajero de la siguiente manera:*/


let i = 0;
while (i < 5) {
  docCliente = Number(prompt(`Bienvenido al cajero PlataFácil \n Ingrese su documento: `));
  contraCliente = prompt(`Ingrese su contraseña: `);

  const indexUsuario = arrayUsuario.findIndex(elemento => elemento.nDocumento === docCliente);

  if (indexUsuario==-1  && arrayUsuario.findIndex(elemento => elemento.contrasena === contraCliente)==-1) {

    alert(`El usuario no esta registrado. \n Intente de nuevo. `);
    docCliente = Number(prompt(`Bienvenido al cajero PlataFácil \n Ingrese su documento: `));
    contraCliente = prompt(`Ingrese su contraseña: `);

  } else if (arrayUsuario[indexUsuario].tipoUsuario.administrador == 1) {
 
    /*3.  Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.*/
    const billetesCinco = Number(prompt(`Ingresa la cantidad de billetes de 5000: `));
    const billetesDiez = Number(prompt(`Ingresa la cantidad de billetes de 10000: `));
    const billetesVeinte = Number(prompt(`Ingresa la cantidad de billetes de 20000: `));
    const billetesCincuenta = Number(prompt(`Ingresa la cantidad de billetes de 50000: `));
    const billetesCien = Number(prompt(`Ingresa la cantidad de billetes de 100000: `));

    /*    4.  Almacenar esta información en un array de objetos.*/

    if (arrayBilletes.length != 0) {
      arrayBilletes[0].billetesCinco += billetesCinco;
      arrayBilletes[0].billetesDiez += billetesDiez;
      arrayBilletes[0].billetesVeinte += billetesVeinte;
      arrayBilletes[0].billetesCincuenta += billetesCincuenta;
      arrayBilletes[0].billetesCien += billetesCien;
    } else {
      const billetes = {
        billetesCinco,
        billetesDiez,
        billetesVeinte,
        billetesCincuenta,
        billetesCien
      }
      arrayBilletes.push(billetes);
    }


    contadorBilletesCinco = arrayBilletes[0].billetesCinco * 5000;
    contadorBilletesDiez = arrayBilletes[0].billetesDiez * 10000;
    contadorBilletesVeinte = arrayBilletes[0].billetesVeinte * 20000;
    contadorBilletesCincuenta = arrayBilletes[0].billetesCincuenta * 50000;
    contadorBilletesCien = arrayBilletes[0].billetesCien * 100000;
    contadorTotal = contadorBilletesCinco + contadorBilletesDiez + contadorBilletesVeinte + contadorBilletesCincuenta + contadorBilletesCien;



    /*5.  Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total 
    general.*/
    alert(`Total billetes de 5000:  ${(contadorBilletesCinco)} 
      Total billetes de 10000: ${contadorBilletesDiez} 
      Total billetes de 20000: ${contadorBilletesVeinte} 
      Total billetes de 50000: ${contadorBilletesCincuenta}
      Total billetes de 100000: ${contadorBilletesCien} 
      Total: ${contadorTotal}`);


  } else if (arrayUsuario[indexUsuario].tipoUsuario.cliente === 2) {
    /*6.  Una  vez  el  cajero  esté  cargado,  debe  volver  a  solicitar  usuario  y contraseña, si es 
   administrador, se repite el mismo proceso, sumar a la cantidad actual, si es cliente debe proseguir 
   de la siguiente manera:
   7.  Si  el  cajero  no  tiene  dinero  cargado,  debe  aparecer  un  mensaje  en consola: “Cajero 
   en mantenimiento, vuelva pronto.” Y reiniciar desde el inicio.*/

    if (contadorTotal === 0) {
      alert('El cajero esta en mantenimiento, vuelva pronto.')
      /*8.  Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a  retirar.  Una  vez  
obtenida  la  información,  debe  indicar  cuánto  dinero puede entregar basado en la cantidad 
disponible y los tipos de billetes. Luego debe mostrar en consola cuántos billetes de cada 
denominación entregó. Priorizando siempre las denominaciones más altas para valores altos y 
redondeando a la cifra más cercana menor a la solicitada.*/
    } else if (contadorTotal > 0) {
      cantidadRetirar = prompt('Ingrese la cantidad que desea retirar');
      if (cantidadRetirar > contadorTotal) {
        alert('El cajero no cuenta con el dinero solicitado.');
      } else {
        alert(`Cantidad disponible: ${contadorTotal}
                Billetes de 5000: ${arrayBilletes[0].billetesCinco}
                Billetes de 10000: ${arrayBilletes[0].billetesDiez}
                Billetes de 20000: ${arrayBilletes[0].billetesVeinte}
                Billetes de 50000: ${arrayBilletes[0].billetesCincuenta}
                Billetes de 100000: ${arrayBilletes[0].billetesCien}`);


        if ((arrayUsuario[indexUsuario].tipoUsuario.cliente == 2) >= 1) {

          contadorTotal -= cantidadRetirar;

        }


        retirarBilletesCien = Math.floor(cantidadRetirar / 100000);
        if (retirarBilletesCien > arrayBilletes[0].billetesCien) {
          arrayBilletes[0].billetesCien--;
        }
        cantidadRetirar -= retirarBilletesCien * 100000;


        retirarBilletesCincuenta = Math.floor(cantidadRetirar / 50000);
        if (retirarBilletesCincuenta > arrayBilletes[0].billetesCincuenta) {
          arrayBilletes[0].billetesCincuenta--;
        }
        cantidadRetirar -= retirarBilletesCincuenta * 50000;


        retirarBilletesVeinte = Math.floor(cantidadRetirar / 20000);
        if (retirarBilletesVeinte > arrayBilletes[0].billetesVeinte) {
          arrayBilletes[0].billetesVeinte--;
        }
        cantidadRetirar -= retirarBilletesVeinte * 20000;



        retirarBilletesDiez = Math.floor(cantidadRetirar / 10000);
        if (retirarBilletesDiez > arrayBilletes[0].billetesDiez) {
          arrayBilletes[0].billetesDiez--;
        }
        cantidadRetirar -= retirarBilletesDiez * 10000;



        retirarBilletesCinco = Math.floor(cantidadRetirar / 5000);
        if (retirarBilletesDiez > arrayBilletes[0].billetesDiez) {
          arrayBilletes[0].billetesDiez--;
        }
        cantidadRetirar -= retirarBilletesCinco * 5000;


        alert(`Los billetes entregados son: 
            Billetes de 5000: ${retirarBilletesCinco}
            Billetes de 10000: ${retirarBilletesDiez}
            Billetes de 20000: ${retirarBilletesVeinte}
            Billetes de 50000: ${retirarBilletesCincuenta}
            Billetes de 100000: ${retirarBilletesCien}`);




        /*9.  Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada 
        denominación.*/




        alert(` Saldo restante: ${contadorTotal}
        Billetes de 5000: ${arrayBilletes[0].billetesCinco - retirarBilletesCinco}
        Billetes de 10000: ${arrayBilletes[0].billetesDiez - retirarBilletesDiez}
        Billetes de 20000: ${arrayBilletes[0].billetesVeinte - retirarBilletesVeinte}
        Billetes de 50000: ${arrayBilletes[0].billetesCincuenta - retirarBilletesCincuenta}
        Billetes de 100000: ${arrayBilletes[0].billetesCien - retirarBilletesCien}
      `);
      }
    }





  }





  i++;
}


