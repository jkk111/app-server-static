let socket = process.env.socket || 8080;
let express = require('express');
let app = express();

const STATIC_PATH = process.env.STATIC_CONTENT;
app.use(express.static(STATIC_PATH))
app.listen(socket)