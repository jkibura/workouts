require("dotenv").config()
const { format } = require("date-fns")

const express = require("express")

const app = express()
const mongoose = require("mongoose")
const workoutsRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user', userRoutes)
app.use('/api/workouts', workoutsRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port" ,process.env.PORT, 'at', format(new Date(), 'yyyy-MM-dd hh:mm:ss'));
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