let products = [{
    name: 'A Book',
    price: 20,
    desc: 'Book for study',
    productId: Math.random(),
    imgLink: ""

}];

module.exports = class Product {
    constructor(productId, name, imageUrl, desc, price) {
        this.productId = productId;
        this.name = name;
        this.imageUrl = imageUrl;
        this.desc = desc;
        this.price = price;
    }

    saveProduct() {
        if (this.id) {
            const existingProductIndex = products.findIndex(
                prod => prod.id === this.id
            );
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex] = this;
        } else {
            this.id = Math.random().toString();
            products.push(this);
        }

    }

    static fetchAllProducts() {
        return products;
    }

    static findById(id, cb) {
        const product = products.find(p => p.productId === id);
        cb(product);

    }
}