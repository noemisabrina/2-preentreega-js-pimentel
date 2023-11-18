function iniciarCompra() {
    let total = 0;
  
    while (true) {
      let producto = prompt("Ingrese el nombre del producto (o 'fin' para terminar la compra):");
      if (producto.toLowerCase() === 'fin') {
        break;
      }
      let cantidad = parseInt(prompt("Ingrese la cantidad de " + producto + ":"));
      let precioUnitario = parseFloat(prompt("Ingrese el precio unitario de " + producto + ":"));
  
      let subtotal = cantidad * precioUnitario;
      total += subtotal;
  
      console.log("Producto: " + producto + " - Cantidad: " + cantidad + " - Precio Unitario: $" + precioUnitario.toFixed(2) + " - Subtotal: $" + subtotal.toFixed(2));
    }
  
    console.log("Total a pagar: $" + total.toFixed(2));
    alert("El total a pagar es: $" + total.toFixed(2));
  }
  