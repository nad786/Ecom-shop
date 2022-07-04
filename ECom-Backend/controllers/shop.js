
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getCart = (req, res, next) => {
    const products = Product.fetchAllProducts();
    const cart = Cart.getCart();
    const cartProducts = [];
    for (product of products) {
        const cartProductData = cart.products.find(
            prod => prod.id === product.productId
        );
        if (cartProductData) {
            cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
    }
    res.send({ carts: cartProducts })
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    });
    res.send({ status: "sucess" })
};

exports.getProduct = (req, res, next) => {
    res.send({ products: Product.fetchAllProducts() });
};
