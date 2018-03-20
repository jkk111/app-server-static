let socket = process.env.socket || 8080;
let express = require('express');
let app = express();

const STATIC_PATH = `${__dirname}/static`
app.use(express.static(STATIC_PATH))
app.listen(socket)
