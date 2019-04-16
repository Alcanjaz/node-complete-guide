const path = require('path');
const fs = require('fs');


//Export the class Product
module.exports = class Product {
    constructor(t){ //We create products with a title
        this.title = t;
    }

    save(){ //A class method that we can use when the class is instantiated   
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);   
            });
        });
    }

    static fetchAll(callback){ //A class method that we can use always as we need
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
               return callback([]);
            }
            callback(JSON.parse(fileContent));
        })
    }

}