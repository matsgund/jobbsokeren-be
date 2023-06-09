const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization:  process.env.OPENAI_ORGANIZATION_ID,
});

const openai = new OpenAIApi(configuration);

exports.fetchData = async (prompt) => {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        return completion.data.choices[0].text;
    } catch (error) {
        throw err;
    }
};
