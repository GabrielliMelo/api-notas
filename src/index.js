const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(rotas)

app.listen(8001);