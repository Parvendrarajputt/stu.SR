import { User } from "../Model/model.js";


const createUser = async (req, res) => {
    try {
        let { Name, RollNumber, Birthday, Address } = req.body;

        const user = new User({ Name, RollNumber, Birthday, Address });
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};


const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}


const getUserByID = async (req, res) => {
    try {
        let { RollNumber } = req.params;
        RollNumber = Number(RollNumber);

        const user = await User.findOne({ RollNumber: RollNumber });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
const deleteUser = async (req, res) => {
    try {
        let { RollNumber } = req.params;
        RollNumber = Number(RollNumber);
        const user = await User.findOne({ RollNumber });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        await User.deleteOne({ RollNumber });
        res.send({ message: "User deleted successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
const updateUser = async (req, res) => {
    try {
        let { RollNumber } = req.params;
        let updateData = req.body;

        RollNumber = Number(RollNumber);
        if (isNaN(RollNumber)) {
            return res.status(400).json({ message: "RollNumber must be a valid number" });
        }

        const updatedUser = await User.findOneAndUpdate(
            { RollNumber },
            { $set: updateData },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};




export { createUser, getAllUser, getUserByID, deleteUser, updateUser };  
