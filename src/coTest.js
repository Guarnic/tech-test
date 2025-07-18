class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      // Productos que aumentan de precio
      if (this.products[i].name === 'Full Coverage') {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1;
        }
      } 
      // Mega Coverage nunca cambia
      else if (this.products[i].name === 'Mega Coverage') {
        // No hace nada
      }
      // Super Sale baja al doble de velocidad
      else if (this.products[i].name === 'Super Sale') {
        if (this.products[i].price > 0) {
          this.products[i].price = this.products[i].price - 1;
        }
      }
      // Productos normales
      else {
        if (this.products[i].price > 0) {
          this.products[i].price = this.products[i].price - 1;
        }
      }

      // Actualizar sellIn (excepto Mega Coverage)
      if (this.products[i].name !== 'Mega Coverage') {
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }

      // Reglas para productos expirados
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name === 'Full Coverage') {
          if (this.products[i].price < 50) {
            this.products[i].price = this.products[i].price + 1;
          }
        } else if (this.products[i].name === 'Super Sale') {
          if (this.products[i].price > 0) {
            this.products[i].price = this.products[i].price - 1;
          }
        } else if (this.products[i].name !== 'Mega Coverage') {
          if (this.products[i].price > 0) {
            this.products[i].price = this.products[i].price - 1;
          }
        }
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
