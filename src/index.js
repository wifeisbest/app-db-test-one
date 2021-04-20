require('dotenv').config();


// ======= Require framwork ==========\\
const express = require('express');
const app = express();
const port = process.env.APP_PORT;
const cors = require('cors');

// ======= App use ====== \\
app.use(express.json());
app.use(cors());


// ======= App require local files ===========\\
const Router = require('./routers')
const db = require('./config/db');


// ===== Connect DB
db.connect();


// ==== Get router ===
Router(app);







app.listen(port, () => console.log(`Sever is running on port ${port}`))