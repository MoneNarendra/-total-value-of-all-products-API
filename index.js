const express = require('express');
const app = express();

app.use(express.json());

app.post('/total_amount', (req, res) => {
  const products = req.body.products;

  if (!products) {
    return res.status(400).json({ error: 'No products provided.' });
  }

  let totalValue = 0;
  for (const product of products) {
    const { name, price, quality } = product;
    if (!price || !quality) {
      return res.status(400).json({ error: `Missing price or quality for product "${name}".` });
    }
    totalValue += price * quality;
  }

  res.json({ totalValue });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});