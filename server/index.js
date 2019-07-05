const express = require('express');
const products = require('../products.json');  //data file
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const app = express();
const port = 3001;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});





// const express = require('express');
// const app = express();
// const port = 3001;
// const {getProducts} = require('./products_controller');
// const products = require('../products.json');

// app.get('/api/product/:id', pc);
// app.get('/api/products', getProducts);
// app.get('/api/products', (req, res) => {
//     res.status(200).send(products)
// });



// app.listen(port, () => {
//     console.log(`Server listening on port: ${port}`);
// });





