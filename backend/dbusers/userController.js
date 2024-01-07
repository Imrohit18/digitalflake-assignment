import express from "express";
import mongoose from "mongoose";
import users from "./userModel.js";

const router = express.Router();

export const getUsers = async (req, res) => {
    try {
        const userList = await users.find();
        res.status(200).json(userList)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
