import cors from "cors";
import express from "express";
import fs from "fs";
const app = express()
import {Restaurants_data} from "./Data.js"

app.use(cors())
app.use("/carouselImages",express.static("CarouselImages"))
app.use('/restaurantImages', express.static('RestaurantImages'));
app.use('/icons',express.static('icons'))


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

app.listen(8080,() =>
{
    console.log("Server running at 8080");
});
