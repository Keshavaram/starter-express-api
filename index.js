import cors from "cors";
import express from "express";
import bodyParser from 'body-parser'
import fs from "fs";
const app = express()
import {Restaurants_data} from "./Data.js"
import {menu} from "./Menu.js";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())
app.use("/carouselImages",express.static("CarouselImages"))
app.use('/restaurantImages', express.static('RestaurantImages'));
app.use('/icons',express.static('icons'))

let orders = []

app.get("/carouselFiles",async (req,res) =>
{
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

app.get("/menu",(req,res) =>
{
    const cuisine = parseInt(req.query.id);
    const data = menu.map((each) =>
    {
        if (each.c_id === cuisine)
        {
            return each.menu
        }
    });
    res.send({menuData: data})
})

app.post('/cartData', function(req, res) {
    let updated = false
    for (let i = 0; i < orders.length; i++) {
        if(orders[i].user === req.body.user)
        {
            orders[i].cart = req.body.cart
            updated = true
        }
    }
    if(!updated) {
        orders.push(req.body)
    }
    console.log(orders)
});

app.listen(8080,() =>
{
    console.log("Server running at 8080");
});
