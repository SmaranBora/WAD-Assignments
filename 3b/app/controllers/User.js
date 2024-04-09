const UserModel = require('../model/User');

exports.create = async (req, res) => {
    try {
        const user = new UserModel(req.body);
        const savedUser = await user.save();
        res.status(201).json({ message: "User created successfully!!", user: savedUser });
    } catch (error) {
        res.status(500).json({ message: error.message || "Some error occurred while creating user" });
    }
};

exports.findAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving users" });
    }
};

exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message || "User not found" });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(404).json({ message: error.message || "User not found" });
    }
};

exports.destroy = async (req, res) => {
    try {
        const deletedUser = await UserModel.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        res.status(404).json({ message: error.message || "User not found" });
    }
};

