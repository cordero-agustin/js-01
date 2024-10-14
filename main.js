const divisas = [
    { moneda: 'USD', valor: 1.0 },
    { moneda: 'EUR', valor: 0.85 },   
    { moneda: 'ARS', valor: 1180.0 }   
];

function convertirDivisa() {
    const cantidad = parseFloat(prompt("Introduce la cantidad a convertir:"));
    const divisa1 = prompt("Introduce la divisa de origen (USD, EUR, ARS):").toUpperCase();
    const divisa2 = prompt("Introduce la divisa de destino (USD, EUR, ARS):").toUpperCase();

    let valor1, valor2;

    for (let i = 0; i < divisas.length; i++) {
        if (divisas[i].moneda === divisa1) {
            valor1 = divisas[i].valor;
        }
        if (divisas[i].moneda === divisa2) {
            valor2 = divisas[i].valor;
        }
    }
    if (valor1 && valor2) {
        const cantidadConvertida = (cantidad / valor1) * valor2;
        alert(`${cantidad} ${divisa1} es igual a ${cantidadConvertida.toFixed(2)} ${divisa2}.`);
    } else {
        alert("Una de las divisas introducidas no es válida.");
    }
}
convertirDivisa();
