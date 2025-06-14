import { getAllProducts } from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json({
    status: 200,
    message: 'Got all products',
    data: products,
  });
};
