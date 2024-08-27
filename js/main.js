function calcularCosto() {
    // Obtener los valores ingresados por el usuario
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const descuento = parseFloat(document.getElementById('descuento').value);

    // Validar que los valores sean correctos
    if (isNaN(precio) || isNaN(cantidad) || isNaN(descuento)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Calcular el costo total con descuento
    const costoTotal = (precio * cantidad) * (1 - (descuento / 100));

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = costoTotal.toFixed(2) + " COP";
}