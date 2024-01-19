const router = require("express").Router();
const User = require("../models/User.model")
const Card = require("../models/Card.model")
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/user", isAuthenticated, async (req, res) => {
    const userId = req.payload._id;

    try {
        const userData = await User.findById(userId);
        const userCards = await Card.find({ createdBy: userId});

        const profileInfo = {
            user: userData,
            cards: userCards
        }

        res.json(profileInfo)
    }
    catch {
        (error) => (error);
        res.status(500).json({message: "Server error"})
    }
})

module.exports = router