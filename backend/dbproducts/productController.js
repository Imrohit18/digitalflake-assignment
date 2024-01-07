import express from "express";
import mongoose from "mongoose";
import product from "./productModel.js";

const router = express.Router();

export const getProducts = async (req, res) => {
    try {
        const productList = await product.find();
        res.status(200).json(productList)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createProduct = async (req, res) => {
    const { name, packSize, category, mrp, image, status } = req.body;

    const newProduct = new product({
        name, packSize, category, mrp, image, status
    })
    try {
        await newProduct.save();
        res.status(201).json(newProduct)


    }
    catch (error) {
        res.status(409).json({ message: error.message })

    }
}


export const updateProduct = async (req, res) => {

    const { id } = req.params;
    const { name, packSize, category, mrp, image, status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedProduct = { name, packSize, category, mrp, image, status, _id: id };

    await product.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);

}

export const deleteProduct = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await product.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" })

}