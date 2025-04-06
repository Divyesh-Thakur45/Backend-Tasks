const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const ai = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/generate/content", async (req, res) => {
  try {
    const { content } = req.body;
    // make model
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
    // using model generate content
    const result = await model.generateContent(content);
    const answer = await result.response.text();
    res.status(200).json(answer);
    console.log(answer);
  } catch (error) {
    res.status(404).json({ message: "Error generating content" });
    console.log(error);
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080"); // server started on port 8080
});
