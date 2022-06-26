const express = require('express');
const path = require('path');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const routes = require('./routes')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const root = path.join(__dirname, '../client/build')
app.use(express.static(root));
app.get("/", (req, res) => {
  res.sendFile('index.html', { root });
})

app.use(routes);

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
