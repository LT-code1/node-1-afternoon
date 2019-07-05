
const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.query.price){
        const items = products.filter(val => val.price >= parseInt(req.query.price));  //return arr with filtered list greater than inputted price from req
        return res.status(200).send(items);                  //items is new array
    }
    res.status(200).send(products);
}

module.exports = getProducts;




// const getProducts = (req, res) => {
//     if (req.query.price) {
//         const items = products.filter(val => val.price >= parseInt(req.query.price));
//         return res.status(200).send(items);
//     }
//     res.status(200).send(products);
// }s
// if(rec.query.first_name){
//     const userArray = users.filter(user => user.first_name.includes(rec.query.first_name));
//     return res.json(userArray);
//     }
//     return res.json(users);
// });
