const products = []; //We are simulating a db


//Export the class Product
module.exports = class Product {
    constructor(t){ //We create products with a title
        this.title = t;
    }

    save(){ //A class method that we can use when the class is instantiated   
        products.push(this);
    }

    static fetchAll(){ //A class method that we can use always as we need
        return products;
    }

}