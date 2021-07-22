const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

/* SETUP MIDDLEWARE */

app.use(morgan('dev'));
app.use(bodyParser.json());

// Database

const products = [
  {
    id: 1,
    name: 'Jacket',
    price: 65,
    category: 'expensive',
  },
  {
    id: 2,
    name: 'blouse',
    price: 65,
    category: 'cheap',
  },
  {
    id: 3,
    name: 'pants',
    price: 65,
    category: 'expensive',
  },
  {
    id: 4,
    name: 'shirt',
    price: 65,
    category: 'cheap',
  },
  {
    id: 5,
    name: 'shorts',
    price: 65,
    category: 'expensive',
  },
];
/* SETUP ROUTES */

/* USER ROUTER */

app.get('/products', (req, res) => {
  const response = {
    route: req.path,
    method: req.method,
  };
  const category = req.query.category;
  if (category) {
    const foundCategory = products.filter(
      (product) => product.category === category
    );
    const display = foundCategory.length
      ? foundCategory
      : { msg: 'This category does not exist' };

    res.json(display);
  } else {
    res.json(products);
  }
});

app.get('/products/:id', (req, res) => {
  const response = {
    route: req.path,
    method: req.method,
    params: req.params,
  };

  const id = req.params.id;

  const foundProduct = products.find((product) => product.id === Number(id));
  res.json(foundProduct);
});

app.post('/products/', (req, res) => {
  const response = {
    name: 'leggings',
    category: 'cheap',
    price: 30,
  };

  res.json(response);
});

app.get('*', (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
