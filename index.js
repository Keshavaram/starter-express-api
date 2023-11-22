const admin = require("firebase-admin");
const express = require("express")
const cors = require('cors')

const app = express();
app.use(cors())

const collectionName = "DIOT"
const documentName = "UltraSonic"

const serviceAccount = require("./key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.post("upload", (req, res) =>
{
    db.collection(collectionName).doc(documentName).set({
        "distance": req.body.distance
    })
})

app.get("/distance", (req, res) =>
{
    db.collection(collectionName).doc(documentName).get().then((doc) => {
        if (doc.exists) {
            res.send(doc.data())
        } else {
            res.send({"distance": 9999})
        }
    })
})

app.listen(8080)
