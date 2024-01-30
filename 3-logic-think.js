/*
  Ejercicio 3: Pensamiento lógico
  Escribe una función que tome un número entero como
  entrada y devuelva un array con todos los números
  enteros impares desde 1 hasta el número de entrada.
  Por ejemplo, si el número de entrada es 9, la
  función debería devolver [1, 3, 5, 7, 9].
*/

const getOddNumbers = (limit) => {
  const parsedLimit = Number(limit);

  if (isNaN(parsedLimit) || parsedLimit < 1) {
    throw new Error('The number has been greater than or equal 1');
  }

  const numberList = Array.from(
    { length: parsedLimit },
    (_, index) => index + 1
  );
  const oddNumbers = numberList.filter((number) => number % 2 !== 0);

  return oddNumbers;
};
