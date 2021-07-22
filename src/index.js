const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const productsRouter = require('./resources/products/routes');
/* SETUP MIDDLEWARE */

app.use(morgan('dev'));
app.use(bodyParser.json());

// Database

/* SETUP ROUTES */

app.use('/products', productsRouter);
/* USER ROUTER */

// app.get('*', (req, res) => {
//   res.json({ ok: true });
// });

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
