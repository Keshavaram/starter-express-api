import cors from "cors";
import express from "express";
import bodyParser from 'body-parser'
import fs from "fs";
import {Restaurants_data} from "./Data.js"
import {menu} from "./Menu.js";

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(cors())
app.use("/carouselImages", express.static("CarouselImages"))
app.use('/restaurantImages', express.static('RestaurantImages'));
app.use('/icons', express.static('icons'))

let orders = []
let users= []

app.get("/carouselFiles", async (req, res) => {
    const testFolder = './CarouselImages';
    let imageNames = []
    fs.readdirSync(testFolder).forEach(file => {
        imageNames.push(file)
    });

    res.send({images: imageNames.toString()})
})

app.get("/restaurantData", async (req, res) => {
    res.send(Restaurants_data)
})

app.get("/menu", (req, res) => {
    const cuisine = parseInt(req.query.id);
    let c_id;
    const data = menu.map((each) => {
        if (each.c_id === cuisine) {
            c_id = each.c_id
            return each.menu
        }
    });
    res.send({menuData: data, c_id: c_id})
})

app.post('/cartData', function (req, res) {
    let updated = false
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].user === req.body.user) {
            orders[i].cart.push.apply(orders[i].cart, req.body.cart)
            updated = true
        }
    }
    if (!updated) {
        orders.push(req.body)
    }
});

app.get("/getCartDetails", (req, res) => {
    const userId = req.query.user
    for (let i = 0; i < orders.length; i++) {
        // console.log(orders[i].cart)
        if (orders[i].user === userId) {
            res.send({cart: orders[i].cart})
        }
    }
})

app.post("/login", (req, res) => {
    const details = req.body
    let auth = 0
    for (let i = 0; i < users.length; i++) {
        if (details.name === users[i].name && details.password === users[i].password) {
            auth = 1
        }
    }
    if (auth === 0) {
        res.send({auth: 0})
    } else if (auth === 1) {
        res.send({auth: 1})
    }
})
app.post("/register", (req, res) => {
    users.push(req.body)
    res.send({result: "userCreated"})
})

app.get("/getOrders", (req, res) => {
    const restaurant = req.query.restaurant
    let data = []
    try
    {
        for (let i = 0; i < orders[0].cart.length ; i++) {
            // console.log((orders[0].cart)[i].restaurant)
            if ((orders[0].cart)[i].restaurant === restaurant && (orders[0].cart)[i].confirm === true) {
                data.push(orders[0].cart[i])
            }
        }
    } catch (e)
    {
        console.log("Error!!")
    }
    res.send({orders: data})
})
app.post("/resLogin", (req,res) =>
{
    let auth = 0;
    for (let i = 0; i < Restaurants_data.length; i++) {
        if (req.body.name === Restaurants_data[i].name && parseInt(req.body.password) === Restaurants_data[i].id)
        {
            auth = 1
        }
    }
    if (auth === 0) {
        res.send({auth: 0})
    } else if (auth === 1) {
        res.send({auth: 1})
    }
})

app.get("/confirm", (req,res) =>
{
    for (let i = 0; i < (orders[0].cart).length; i++) {
        (orders[0].cart)[i].confirm = true
    }
    res.send({result: "orderConfirmed"})
})

app.listen(8080, () => {
    console.log("Server running at 8080");
});
