const express = require('express');

const productsRouter = express.Router();

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

productsRouter.get('/', (req, res) => {
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

productsRouter.get('/:id', (req, res) => {
  const response = {
    route: req.path,
    method: req.method,
    params: req.params,
  };

  const id = req.params.id;

  const foundProduct = products.find((product) => product.id === Number(id));
  res.json(foundProduct);
});

productsRouter.post('/', (req, res) => {
  const newProduct = req.body;

  const updatedProducts = [...products, newProduct];

  res.json(updatedProducts);
});

module.exports = productsRouter;
