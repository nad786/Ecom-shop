const fs = require('fs');
const path = require('path');

let cartData = { products: [], totalPrice: 0 };

module.exports = class Cart {
    static addProduct(id, productPrice) {

        const existingProduct = cartData.products.find(prod => prod.id === id);

        if (existingProduct) {
            cartData.totalPrice += productPrice;

            let updatedProduct = { ...existingProduct };
            updatedProduct.qty += 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        } else {
            updatedProduct = { id: id, qty: 1 };
            cart.products = [...cart.products, updatedProduct];
        }
    }

    static deleteProduct(id, productPrice) {

        const updatedCart = { ...cartData };
        const product = updatedCart.products.find(prod => prod.id === id);
        if (!product) {
            return;
        }
        const productQty = product.qty;
        updatedCart.products = updatedCart.products.filter(
            prod => prod.id !== id
        );
        updatedCart.totalPrice =
            updatedCart.totalPrice - productPrice * productQty;

        cartData = { ...updatedCart };

    }

    static getCart() {
        return cartData;
    }
};
