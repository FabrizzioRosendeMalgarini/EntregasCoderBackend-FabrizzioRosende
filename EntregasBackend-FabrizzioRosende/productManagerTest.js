import { ProductManager } from "./productManager.js";

const productManager = new ProductManager();

try {
    productManager.addProduct({});    
} catch (error) {
    console.log('Test Case 1: ', error.message);
}

try {
    productManager.addProduct({title: 'Flor', price: 1000});    
} catch (error) {
    console.log('Test Case 2: ', error.message);
}

try {
    productManager.addProduct({title: 'Flor', price: 1000, thumbnail: 'Hola', code: 'AAA', stock: 'A'});    
} catch (error) {
    console.log('Test Case 3: ', error.message);
}

try {
    productManager.addProduct({title: 'Flor', price: 1000, thumbnail: 'Hola', code: 'AAA', stock: -1});    
} catch (error) {
    console.log('Test Case 4: ', error.message);
}

try {
    productManager.addProduct({title: 'Flor', price: -1000, thumbnail: 'Hola', code: 'AAA', stock: 9});    
} catch (error) {
    console.log('Test Case 5: ', error.message);
}

productManager.addProduct({title: 'Flor1', price: 1000, thumbnail: 'Hola', code: 'AAA', stock: 4});
productManager.addProduct({title: 'Flor2', price: 1000, thumbnail: 'Hola', code: 'AAB', stock: 5});
productManager.addProduct({title: 'Flor3', price: 1000, thumbnail: 'Hola', code: 'AAC', stock: 6});
console.log('Test Case 6: 3 productos agregados exitosamente'); 

try {
    productManager.addProduct({title: 'Flor4', price: 1000, thumbnail: 'Hola', code: 'AAC', stock: 7});
} catch (error) {
    console.log('Test Case 7: ', error.message); 
}

console.log('Test Case 8: ', productManager.getProducts());

console.log('Test Case 9: ', productManager.getProductById(2));

try {
    console.log(productManager.getProductById(10));
} catch (error) {
    console.log('Test Case 10: ', error.message); 
}