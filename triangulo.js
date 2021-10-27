function ladosTriangulo(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 !== base) {
    const alturaIsosceles = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
    const areaIsosceles = (base * alturaIsosceles) / 2;
    alert(
      'Es un triangulo isosceles su altura es ' +
        alturaIsosceles +
        ' y su area es ' +
        areaIsosceles
    );
  } else {
    alert('No es un triangulo isosceles');
  }
}
