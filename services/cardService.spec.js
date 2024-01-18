const mongoose = require("mongoose");
const createCard = require("./cardService");

describe("card", () => {
  beforeAll(() => {
    mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/testing-app-server"
    );
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  const testCardData = {
    createdBy: "65a959899a29b2a85878c7ed",
    title: "Lemmorld!",
    status: "To-do",
    topic: "game",
    category: "Action-Adventure",
    content: "Click on them to acttheir skils!",
    link: "https://github.com/hymced/project1-game",
    consumeTime:
      "Your goal is to have at least 60% of lemmings IN the EXIT at the bottom.",
  };

  test("creates a card", async () => {
    const card = await createCard(testCardData);

    expect(card.title).toStrictEqual("Lemmorld!");
  });

  test("Fails if title is missing", async () => {
    const { title, ...incompleteData } = testCardData;

    expect(createCard(incompleteData)).rejects.toThrow(
      "Card validation failed: title: Title is required"
    );
  });

  test("Fails if id is in the wrong format", async () => {
    const cardWithWrongId = {
      ...testCardData,
      createdBy: "hola:)",
    };

    expect(createCard(cardWithWrongId)).rejects.toThrow(
      "Card validation failed: createdBy"
    );
  });

  test("Fails if status is not listed in the enum", async () => {
    const cardWithWrongStatus = {
      ...testCardData,
      status: "Hola:)",
    };

    expect(createCard(cardWithWrongStatus)).rejects.toThrow(
      "Card validation failed: status"
    );
  });
});
