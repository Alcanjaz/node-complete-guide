const path = require('path');
const fs = require('fs');

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
           cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}


//Export the class Product
module.exports = class Product {
    constructor(title, imageURL, description, price){ //We create products with a title
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    save(){ //A class method that we can use when the class is instantiated   
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);   
            });
        });
    }

    static fetchAll(callback){ //A class method that we can use always as we need
        getProductsFromFile(callback);
    }

}