//Taoj data test 10  san pham
/* var data = [{ id: 1, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 175 },
    { id: 2, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 15 },
    { id: 3, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 17 },
    { id: 4, name: "Kajak", category: "Soccer", description: "A boat for one person", price: 1755 },
    { id: 5, name: "Kajak", category: "Chess", description: "A boat for one person", price: 185 },
    { id: 6, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 75 },
    { id: 7, name: "Kajak", category: "Coat", description: "A boat for one person", price: 175 },
    { id: 8, name: "Kajak", category: "Chess", description: "A boat for one person", price: 175 },
    { id: 9, name: "Kajak", category: "Soccer", description: "A boat for one person", price: 175 },
] */
//Su dung Faker de tao data ngau nhien
var faker = require("faker");
var data = [];
var categories = ["Watersports", "Soccer", "Chesss", "Running", "Clothes"];
faker.seed(50);
for (let i = 1; i <= 500; i++) {
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}:${faker.lorem.sentence(4)}`, // lấy 4 từ của lorem
        price: faker.commerce.price()
    })
}


module.exports = function() {
    return {
        products: data,
        // categories: [...new Set(data.map(p => p.category))].sort(),
        categories: categories,
        orders: []
    }

}