var faker = require("faker");

for(var i = 0; i<10; i++){
    var product = faker.commerce.productName();
    var price = faker.commerce.price();
    var productList = (product + " - " + "$" + price);
    console.log(productList);
}    

