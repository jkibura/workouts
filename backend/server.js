require("dotenv").config()

const express = require("express")

const app = express()
const mongoose = require("mongoose")
const workoutsRoutes = require('./routes/workouts')


app.use(express.json())

app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutsRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port" ,process.env.PORT);
        });
    })
    .catch(error=> {
        console.log(error)
    })
















/* const user = require("./models/user");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path = require("path"); */