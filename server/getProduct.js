
const products = require('../products.json');

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if not
    const item = products.find(val => val.id === parseInt(req.param.id));  //The find() method returns the value of the first element in the array that satisfies the provided testing function
    if (!item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
}
module.exports = getProduct;



// app.get("/api/users/:id",(rec,res)  => {  //dynamic id from to use :id
//     const userId =users.filter(user => user.id === Number(rec.params.id));  //must cast as number
//     if(userId.length>0){ res.json(userId[0]);}
//     else {res.status(404).json("no user found")}
// } );
