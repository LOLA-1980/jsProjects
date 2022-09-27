let opcion = prompt('Elige una opción: \n1 - Calcular cuadrado. \n2 - Calcular el ángulo. \n3 - Calcular el factorial. \n Presionar X para finalizar.');

while (opcion != 'X' && opcion != 'x') {

    switch (opcion) {

        case '1':
            let numero = prompt('Ingresa un número para calcular el cuadrado');

            const cuadrado = (function (numero) {
                return numero * numero
            })

            alert('El cuadrado del número ' + (numero) + ' es: ' + cuadrado(numero));
            break;

        case '2':
            let abertura = prompt('Ingresa un número para saber su ángulo');

            const angulo = (function (abertura) {
                let resultado = " ";

                if (abertura < 90) {
                    resultado = "Ángulo Agudo";
                } else if (abertura == 90) {
                    resultado = "Ángulo Recto";
                } else if (abertura > 90 && abertura < 180) {
                    resultado = "Ángulo Obtuso";
                } else if (abertura == 180) {
                    resultado = "Ángulo Llano";
                } else if (abertura > 180 && abertura < 360) {
                    resultado = "Ángulo Concavo";
                }

                return resultado;
            })

            alert('El ángulo del número ' + (abertura) + ' es: ' + angulo(abertura));
            break;

        case '3':
            //El factorial de un número es la multiplicación de todos los
            //números hasta llegar a él
            let num = prompt('Ingresa un número para calcular el factorial');

            const factorial = (function (num) {
                let resultado = 1;

                for (let i = 1; i <= num; i++) {
                    resultado *= i;
                }

                return resultado;
            })

            alert('El factorial del numero ' + (num) + ' es: ' + factorial(num));
            break;

        default:
            alert('Opción incorrecta');
            break;

    }

    opcion = prompt('Elige una opción: \n1 - Calcular cuadrado. \n2 - Calcular el ángulo. \n3 - Calcular el factorial. \n Presionar X para finalizar.');

}

alert('Peace Out!!!');






