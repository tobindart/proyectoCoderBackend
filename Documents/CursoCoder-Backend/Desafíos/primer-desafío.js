class ProductManager{
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const id = Math.floor(Math.random() * 10000);
        const product ={
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        if (this.products.find((p) => p.code === code)) {
            throw new Error("El código ya está en uso");
        }
        this.products.push(product);
    };
    getProducts(){
        return this.products;
    }
    getProductById(id) {
        return this.products.find((p) => p.id === id);
    }
}