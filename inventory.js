const prompt = require('prompt-sync')();
const Product = require("./product");
const fs = require('fs');

const produit = new Product();
let produits = []; //stock produit 

class Inventory {
    static ajouterProduit() { 
        if(fs.existsSync("data.json")){
            produits = JSON.parse(fs.readFileSync("data.json","utf-8")); //changement de format
        }else{
            fs.writeFileSync("data.json","[ ]");
        }                                                 //kadar eiwad constructeur
        produit.name = prompt("entrer le nom:")
        produit.description = prompt("entrer la description:")
        produit.quantity = prompt("entrer la quantité:")
        produit.price = prompt("entrer le prix:")
        produits.push(produit)
        produits = JSON.stringify(produits)
        fs.writeFileSync("data.json",produits,null,4)
        
    }


}
module.exports = Inventory;