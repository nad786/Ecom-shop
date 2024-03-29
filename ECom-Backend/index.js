const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./shop-api/shop');


const app = express();

app.use(bodyParser.json());
app.use(shopRoutes);

app.listen(3300);