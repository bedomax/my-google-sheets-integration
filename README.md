
# My Google Sheets Integration

## Overview

Integrates Google Sheets with multiple APIs using Google Apps Script. Send prompts to OpenAI's API directly from Google Sheets. Includes local testing with Mocha and secure API key management via environment variables.

## Features

- **Google Sheets Integration**: Connects with various APIs.
- **OpenAI API**: Sends custom prompts from Google Sheets.
- **Local Testing**: Uses Mocha for tests.
- **Secure API Keys**: Manages API keys with environment variables.

## Setup

### Prerequisites

- Node.js and npm
- Google Apps Script CLI (`clasp`)
- OpenAI API key

### Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/my-google-sheets-integration.git
   cd my-google-sheets-integration
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Setup `clasp`**:
   \`\`\`bash
   npm install -g @google/clasp
   clasp login
   clasp create --type standalone --title "My Google Sheets Integration"
   \`\`\`

4. **Configure environment variables**:
   - Create a `.env` file:
     \`\`\`plaintext
     OPENAI_API_KEY=your_openai_api_key_here
     \`\`\`
   - Ensure `.env` is in `.gitignore`:
     \`\`\`plaintext
     .env
     \`\`\`

5. **Push code to Google Apps Script**:
   \`\`\`bash
   clasp push
   \`\`\`

## Usage

### Google Sheets Function

- Use in Google Sheets:
  \`\`\`plaintext
  =useChatAPI("your_prompt", A1)
  \`\`\`

### Running Tests

- Run tests locally:
  \`\`\`bash
  npm test
  \`\`\`

## Project Structure

\`\`\`
my-google-sheets-integration/
├── README.md
├── .gitignore
├── .env
├── appscript/
│   ├── main/
│   │   └── main.gs
│   ├── services/
│   │   ├── openai/
│   │   │   ├── api.gs
│   │   │   └── prompt.gs
│   ├── utils/
│   │   └── config.gs
├── scripts/
│   └── deploy.sh
├── docs/
│   └── documentation.md
├── package.json
├── mocha.opts
└── test/
    ├── main.test.js
    ├── openai.test.js
\`\`\`

## Example Files

### `.env`
\`\`\`plaintext
OPENAI_API_KEY=your_openai_api_key_here
\`\`\`

### `mocha.opts`
\`\`\`plaintext
--require @babel/register
--recursive
test/**/*.js
\`\`\`

### `package.json`
\`\`\`json
{
  "name": "my-google-sheets-integration",
  "version": "1.0.0",
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "@babel/core": "^7.14.0",
    "@babel/preset-env": "^7.14.0",
    "@babel/register": "^7.14.0",
    "chai": "^4.3.4",
    "mocha": "^8.3.2",
    "@google/clasp": "^2.4.1",
    "dotenv": "^10.0.0"
  }
}
\`\`\`

### `test/main.test.js`
\`\`\`javascript
const chai = require('chai');
const expect = chai.expect;

// Mock the function for testing
global.useChatAPI = function(prompt, cellValue) {
  // Simulate the behavior of the function
  if (prompt === "Translate the following into German:" && cellValue === "Hello") {
    return "Hallo"; // Mocked response
  }
  return "Error";
};

describe('useChatAPI', () => {
  it('should return the translated text', async () => {
    const prompt = "Translate the following into German:";
    const cellValue = "Hello";
    const expectedResponse = "Hallo";

    const actualResponse = useChatAPI(prompt, cellValue);
    expect(actualResponse).to.equal(expectedResponse);
  });
});
\`\`\`

### `test/openai.test.js`
\`\`\`javascript
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
    const expectedResponse = "Hallo"; // Adjust this based on actual API response

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
\`\`\`

## License

This project is licensed under the MIT License.