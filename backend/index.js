const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const openai = require("./config/openaiConfig");
const apiRoute = require('./routes/api'); // Import the route created above


console.log("Starting project...");

async function test() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
                role: "user",
                content:
                    "Which would you predict more individuals would consider to have a more severe negative impact on quality of life for a single year? Answer “1” for Food Insecurity or “2” for Housing Insecurity. Only answer with “1” or “2” without failure.",
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 70,
        temperature: 1
    });

    console.log("Chat completion test:");
    console.log(chatCompletion);
    console.log("Messages:", chatCompletion.choices[0].message.content);
}

//test();

// Other middleware and route handlers
app.use(bodyParser.json());

app.use(cors());
app.use('/api', apiRoute);


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
