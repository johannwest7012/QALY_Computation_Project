const axios = require("axios");
const cheerio = require("cheerio");
require("dotenv").config();
const express = require("express");
const router = express.Router();
const openai = require("../config/openaiConfig");

// models
const QLR = require("../models/qlr"); //
const QLRSurveyLog = require("../models/qlr_survey_log"); //

// constants
const qlr_list = require("../constants/test_qlrs");

router.post("/init_qlr", async (req, res) => {
    try {
        const { name } = req.body;
        console.log("Adding qlr: ", name);
        // Create a new item instance
        const newQLR = new QLR({ name });

        // Save the item to the database
        await newQLR.save();

        res.status(201).json({ message: "QLR added successfully", item: newQLR });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});

router.post("/init_all_qlrs", async (req, res) => {
    try {
        for (let i = 0; i < qlr_list.length; i++) {
            var name = qlr_list[i];
            // Create a new item instance
            var newQLR = new QLR({ name });

            // Save the item to the database
            await newQLR.save();
        }
        res.status(201).json({ message: "QLR added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});

router.delete("/delete_all_qlrs", async (req, res) => {
    try {
        // Use the `deleteMany` method to delete all rows in the qlr table
        await QLR.deleteMany({});

        res.status(200).json({ message: "All QLRs deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});

async function compareTwoReducers(reducer1_name, reducer2_name) {
    console.log();

    const prompt_content = `Which would you predict more individuals would consider to have a more severe negative impact on quality of life for a single year? Answer “1” for ${reducer1_name} or “2” for ${reducer2_name}. Only answer with “1” or “2” without failure.`;

    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
                role: "user",
                content: prompt_content,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 70,
        temperature: 1,
    });

    console.log("Chat completion test:");
    console.log("Reducer1:", reducer1_name);
    console.log("Reducer2:", reducer2_name);

    message_content = chatCompletion.choices[0].message.content;

    if (message_content == "1") {
        console.log("Valid Message:", message_content);
        return 1;
    } else if (message_content == "2") {
        console.log("Valid Message:", message_content);
        return 2;
    } else {
        console.log("Invalid Message:", message_content);
        return null;
    }
}

router.post("/test_qlr_survey", async (req, res) => {
    try {
        // Use Mongoose to query all QLR objects and store them in an array
        const qlrObjects = await QLR.find({});
        console.log("qlrObjects");
        //console.log(qlrObjects);

        const { name1, name2 } = req.body;

        var name1_found = false;
        var name2_found = false;
        for (var i = 0; i < qlrObjects.length; i++) {
            if (qlrObjects[i].name == name1) {
                name1_found = true;
            } else if (qlrObjects[i].name == name2) {
                name2_found = true;
            }
        }

        if (name1_found == false || name2_found == false) {
            res.status(201).json({ message: "FAILURE: Names provided are not valid" });
        } else {
            for (var i = 0; i < qlrObjects.length; i++) {
                if (qlrObjects[i].name == name1 || qlrObjects[i].name == name2) {
                    console.log();

                    for (var j = 0; j < qlrObjects.length; j++) {
                        if (i != j) {
                            // match them if they are not the same object

                            if (qlrObjects[j].name == name1 || qlrObjects[j].name == name2) {
                                const reducer1 = qlrObjects[i];
                                const reducer2 = qlrObjects[j];

                                // Run a comparison LLM survey question
                                // between object1 and object2. Store the result
                                // in QLRSurveyLog

                                var greaterReducer = await compareTwoReducers(
                                    reducer1.name,
                                    reducer2.name
                                );

                                // if LLM survey was successful, proceed with creating
                                // log entry
                                if (greaterReducer != null) {
                                    if (greaterReducer == 1) {
                                        greaterReducer = reducer1;
                                    } else if (greaterReducer == 2) {
                                        greaterReducer = reducer2;
                                    }

                                    const newQLRSurveyLog = new QLRSurveyLog({
                                        reducer1_id: reducer1.id,
                                        reducer1_name: reducer1.name,
                                        reducer2_id: reducer2.id,
                                        reducer2_name: reducer2.name,
                                        greater_reducer_id: greaterReducer.id,
                                        greater_reducer_name: greaterReducer.name,
                                    });

                                    // Save the item to the database
                                    await newQLRSurveyLog.save();
                                }
                            }
                        }
                    }
                }
            }

            res.status(201).json({ message: "QlR Survey Ran Successfully, logs added" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});

router.post("/run_qlr_surveys", async (req, res) => {
    try {
        // Use Mongoose to query all QLR objects and store them in an array
        const qlrObjects = await QLR.find({});
        console.log("qlrObjects");
        //console.log(qlrObjects);

        for (var i = 0; i < qlrObjects.length; i++) {
            for (var j = 0; j < qlrObjects.length; j++) {
                if (i != j) {
                    // match them if they are not the same object
                    const reducer1 = qlrObjects[i];
                    const reducer2 = qlrObjects[j];

                    // Run a comparison LLM survey question
                    // between object1 and object2. Store the result
                    // in QLRSurveyLog

                    var greaterReducer = await compareTwoReducers(reducer1.name, reducer2.name);

                    // if LLM survey was successful, proceed with creating
                    // log entry
                    if (greaterReducer != null) {
                        if (greaterReducer == 1) {
                            greaterReducer = reducer1;
                        } else if (greaterReducer == 2) {
                            greaterReducer = reducer2;
                        }

                        const newQLRSurveyLog = new QLRSurveyLog({
                            reducer1_id: reducer1.id,
                            reducer1_name: reducer1.name,
                            reducer2_id: reducer2.id,
                            reducer2_name: reducer2.name,
                            greater_reducer_id: greaterReducer.id,
                            greater_reducer_name: greaterReducer.name,
                        });

                        // Save the item to the database
                        await newQLRSurveyLog.save();
                    }
                }
            }
        }

        res.status(201).json({ message: "QlR TEST Survey Ran Successfully, logs added" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});

router.delete("/delete_all_qlr_surveys", async (req, res) => {
    try {
        // Use the `deleteMany` method to delete all rows in the qlr table
        await QLRSurveyLog.deleteMany({});

        res.status(200).json({ message: "All QLRSurveyLogs deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});

module.exports = router;
