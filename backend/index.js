import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './dbproducts/productRoutes.js';
import categoryRoutes from './dbcategories/categoryRoutes.js';
import userRoutes from './dbusers/userRoutes.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/users', userRoutes);


const CONNECTION_URL = 'mongodb+srv://jairajbarve:root@cluster0.obvn3h4.mongodb.net/?retryWrites=true&w=majority/digitalflake';
const PORT = 9001;

mongoose.set('strictQuery', true);

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App running on ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    })

