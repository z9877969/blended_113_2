import {
  createProduct,
  getAllProducts,
  getProductById,
} from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getAllProducts(req.query);
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

export const addProductController = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Created product',
    data: product,
  });
};
