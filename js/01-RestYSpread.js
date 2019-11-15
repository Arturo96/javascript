const testRest = (first_number, ...default_numbers) => {
    document.write("<h2>Test Parametros Rest </h2>");
    default_numbers.forEach(number => {
        document.write(`<h3>Número: ${number} </h3>`);
    });
},
      testSpread = (first_number, second_number, third_number) => {
        document.write("<h2>Test Parametros Spread </h2>");

        document.write(`<h3>Número: ${first_number} </h3>`);
        document.write(`<h3>Número: ${second_number} </h3>`);
        document.write(`<h3>Número: ${third_number} </h3>`);
      },
     numbers = [2.9,1,4,3];

testRest(1,5,6,7,3,4);

testSpread(...numbers);
