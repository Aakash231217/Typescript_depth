"use strict";
class Product {
    constructor(name, price, stock) {
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
const product1 = new Product("Macbook", 10, 20);
