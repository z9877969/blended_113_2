import { getAllProducts, getProductById } from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json({
    status: 200,
    message: 'Got all products',
    data: products,
  });
};
export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);
  res.status(200).json({
    status: 200,
    message: 'Got one product',
    data: product,
  });
};
