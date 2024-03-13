import User from "../models/user.model.js";

export const getUsersForSidebar = async (req , res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password"); // Every User in the db but not our chat is visible because we do not want to send msg to ourselves

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar: " , error.message);
        res.status(500).json("Internal Server error");
    }
}