const unitRoutes = require('./routes/unit');
const customerRoutes = require('./routes/customer');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api/unit", unitRoutes);
app.use("/api/customer", customerRoutes);

app.listen(3000);