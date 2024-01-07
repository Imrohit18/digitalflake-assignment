import express from "express";
import mongoose from "mongoose";
import category from "./categoryModel.js";

const router = express.Router();

export const getCategories = async (req, res) => {
    try {
        const categoryList = await category.find();
        res.status(200).json(categoryList)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createCategory = async (req, res) => {
    const { name, description, status } = req.body;

    const newCategory = new category({
        name, description, status
    })
    try {
        await newCategory.save();
        res.status(201).json(newCategory)


    }
    catch (error) {
        res.status(409).json({ message: error.message })

    }
}


export const updateCategory = async (req, res) => {

    const { id } = req.params;
    const { name, description, status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedProduct = { name, description, status, _id: id };

    await category.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);

}

export const deleteCategory = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await category.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" })

}