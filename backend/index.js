
const express = require('express');
const session = require('express-session');
const app = express();
const { readFile } = require('fs').promises;
const db = require('./models');
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Routers
const postRouter = require('./routes/post_routes');
app.use("/posts", postRouter);

async function start() {
    // Create tables
    await db.sequelize.sync();

    // Run server
    app.listen(3001, () => console.log('App available on http://localhost:3001'));
}

start();