const chai = require('chai');
const expect = chai.expect;
const { useChatAPI } = require('../appscript/main/main.gs');

describe('useChatAPI', () => {
  it('should return the translated text', async () => {
    const prompt = "Translate the following into German:";
    const cellValue = "Hello";
    const expectedResponse = "Hallo";

    // Mock the ChatAPI function call
    global.ChatAPI = (prompt, cellValue) => {
      if (prompt.includes('Translate the following into German:')) {
        return "Hallo"; // Mocked response
      }
      return "Error";
    };

    const actualResponse = useChatAPI(prompt, cellValue);
    expect(actualResponse).to.equal(expectedResponse);
  });
});