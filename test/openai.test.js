const chai = require('chai');
const expect = chai.expect;
const { ChatAPI } = require('../appscript/services/openai/api.gs');

// Load environment variables
require('dotenv').config();

// Mock the function to return the API key from environment variables
global.getApiKey = () => process.env.OPENAI_API_KEY;

describe('ChatAPI', () => {
  it('should return the translated text', async () => {
    const prompt = "Translate the following into German:";
    const cellValue = "Hello";
    const expectedResponse = "Hallo";

    // Mock the API call
    global.UrlFetchApp = {
      fetch: (url, options) => {
        return {
          getContentText: () => JSON.stringify({
            choices: [{ message: { content: "Hallo" } }]
          })
        };
      }
    };

    const actualResponse = ChatAPI(prompt, cellValue);
    expect(actualResponse).to.equal(expectedResponse);
  });
});