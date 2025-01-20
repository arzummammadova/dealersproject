import product from "../models/productModels.js";



export const createProduct=async(req, res) => {
    try {
      const productData = req.body;
  
      const newproduct = new product(productData);
      await newproduct.save();
      res.status(201).json(newproduct);
  } catch (error) {
      res.status(500).json({ message: 'Failed to add product', error: error.message });
  }}


export const getProducts=async (req, res) => {
    try {
      
      const products= await product.find();
      res.status(200).json(products);
    } catch (error) {
      
      res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
  }

export const deleteProduct=async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedProduct = await product.findByIdAndDelete(id);
  
      if (!deletedProduct ) {
        return res.status(404).json({ message: 'product not found' });
      }
  
      res.status(200).json(deletedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete deletedProduct ', error: error.message });
    }
  }