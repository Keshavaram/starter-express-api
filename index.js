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
            orders[i].cart.push.apply(orders[i].cart,req.body.cart)
            updated = true
        }
    }
    if (!updated) {
        orders.push(req.body)
    }
    // orders.map((each) =>
    // {
    //     console.log(each.cart)
    // })
});

app.get("/getCartDetails", (req, res) => {
    const userId = req.query.user
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].user === userId) {
            res.send({cart: orders[i].cart})
        }
    }
})

app.listen(8080, () => {
    console.log("Server running at 8080");
});
