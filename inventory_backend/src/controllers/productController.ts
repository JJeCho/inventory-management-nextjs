import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all products or search by name
export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

// Create a new product
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Update an existing product
export const updateProduct = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { productId } = req.params;
      let { name, price, rating, stockQuantity } = req.body;

      // Backend validation: Convert to numbers if necessary
      price = parseFloat(price);
      rating = parseFloat(rating);
      stockQuantity = parseInt(stockQuantity, 10);

      console.log("Received Data:", { productId, name, price, rating, stockQuantity });
  
      const updatedProduct = await prisma.products.update({
        where: { productId: productId },
        data: {
          name,
          price,
          rating,
          stockQuantity,
        },
      });
  
      console.log("Updated Product:", updatedProduct);
      res.json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Error updating product" });
    }
  };
