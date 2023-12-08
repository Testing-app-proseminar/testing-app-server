const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    status: {
        type: String,
        enum: ["To-do", "Doing", "Done"]
    },
    topic: String,
    category: String,
    content: String,
    link: String,
    consumeTime: String,

  },
  {
    timestamps: true,
  }
);

const Card = model("Card", cardSchema);

module.exports = Card;
