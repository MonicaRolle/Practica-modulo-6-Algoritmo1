//ALgoritmo Calcular la letra aleatoria del DNI
// La entrada debe ser un número entre 0 y 99999999.
// Debemos calcular el resto de la división entera entre el número introducido y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J,
// Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert al usuario y volver a preguntar los datos.
// Deberá repetirse el proceso hasta que el usuario pulse "Cancelar".

var number;

do {


    var rest;
    var letter;

    //Paso 1: pedir los datos al usuario
    number = prompt("Introduce tu numero de DNI");

    //Paso 2: comprobar que es un número

    if (parseInt(number) === Number(number)) { //NaN
        console.log("Es un número", number);
        number = Number(number);

        //Paso 3: comprabar que es un número valiudo entr 0 y 99999999
        if (number <= 99999999 && number >= 0) {
            console.log("El número es valido");
            //Paso 4: obtener el resto y la letra correspondiente
            rest = number % 23;
            switch (rest) {
                case 0:
                    letter = "T";
                    break;
                case 1:
                    letter = "R";
                    break;
                case 2:
                    letter = "W";
                    break;
                case 3:
                    letter = "A";
                    break;
                case 4:
                    letter = "G";
                    break;
                case 5:
                    letter = "M";
                    break;
                case 6:
                    letter = "Y";
                    break;
                case 7:
                    letter = "F";
                    break;
                case 8:
                    letter = "P";
                    break;
                case 9:
                    letter = "D";
                    break;
                case 10:
                    letter = "X";
                    break;
                case 11:
                    letter = "B";
                    break;
                case 12:
                    letter = "N";
                    break;
                case 13:
                    letter = "J";
                    break;
                case 14:
                    letter = "Z";
                    break;
                case 15:
                    letter = "S";
                    break;
                case 16:
                    letter = "Q";
                    break;
                case 17:
                    letter = "V";
                    break;
                case 18:
                    letter = "H";
                    break;
                case 19:
                    letter = "L";
                    break;
                case 20:
                    letter = "C";
                    break;
                case 21:
                    letter = "K";
                    break;
                case 22:
                    letter = "E";
                    break;
            }

            //letter ya tiene la letra asignada
            alert("Número: " + number + ", Letra: " + letter);
            number = null;

        } else {
            alert("El número de DNI introducido es erróneo")
        }

    } else {
        if(number !== null){
            alert(number + " no es un numero")
        }
        
    }
} while (number !== null);
// Primer requisito: la entrada debe ser un número;
// Segundo requisito: La entrada debe ser un número entre 0 y 99999999.
// Tercer requisito: Si lo introducido no es un número deberá indicarse con un alert al usuario y volver a preguntar los datos.
// Cuarto rquisito: Deberá repetirse el proceso hasta que el usuario pulse "Cancelar".

