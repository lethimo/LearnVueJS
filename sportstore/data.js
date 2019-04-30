var data = [{ id: 1, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 175 },
    { id: 2, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 175 },
    { id: 3, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 175 },
    { id: 4, name: "Kajak", category: "Soccer", description: "A boat for one person", price: 175 },
    { id: 5, name: "Kajak", category: "Chess", description: "A boat for one person", price: 175 },
    { id: 6, name: "Kajak", category: "Watersport", description: "A boat for one person", price: 175 },
    { id: 7, name: "Kajak", category: "Coat", description: "A boat for one person", price: 175 },
    { id: 8, name: "Kajak", category: "Chess", description: "A boat for one person", price: 175 },
    { id: 9, name: "Kajak", category: "Soccer", description: "A boat for one person", price: 175 },
]

module.exports = function() {
    return {
        products: data,
        categories: [...new Set(data.map(p => p.category))].sort(),
        orders: []
    }

}