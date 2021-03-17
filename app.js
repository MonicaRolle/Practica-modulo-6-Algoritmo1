//Requisitos
// - Calcular precio total aplicando descuento segun la siguiente regla:
//   * Si la cantidad supera 5 unidades se aplicara un 5% al total
//   * Si el coste total supera 50€ se aplicara un descuento adicional del 5%

var products = [
    {
        product: "Jamón Ibérico",
        units: 1,
        price: 9.99,
    },
    {
        product: "Queso Tostado",
        units: 6,
        price: 4.45,
    },
    {
        product: "Vino Tinto",
        units: 12,
        price: 8.15,
    },
];

// A partir de una lista de productos, recorrerla y calcular coste de cada producto:
//  - para calcular coste de cada prodcuto:
//    * Coste total = units * price
//    * Aplicar cdescuento coste total
//      ** Para conocer descuento:
//         +Necesitamos => units y coste total del producto
//           .Si units >= 5 => 5%
//           .Si coste tal del producto >= 50 => 5%

var getDiscount = (units, cost) => {
    var unitDiscount = units > 5 ? 5 : 0;
    var costDiscount = cost >50 ? 5 : 0;
    return unitDiscount + costDiscount;
}
 var productCost = product => {
     var productCost = product.units* product.price;
     var productDiscount = getDiscount(product.units, productCost);
     return productCost * (1 -  productDiscount / 100);
 }
 var totalCost = productList => {
     var totalCost = 0;
     for(product of productList){
         totalCost += productCost(product);
     }
     return totalCost;
 }

 console.log(totalCost(products))