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
   ```bash
   git clone https://github.com/yourusername/my-google-sheets-integration.git
   cd my-google-sheets-integration
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup `clasp`**:
   ```bash
   npm install -g @google/clasp
   clasp login
   clasp create --type standalone --title "My Google Sheets Integration"
   ```

4. **Configure environment variables**:
   - Create a `.env` file:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key_here
     ```
   - Ensure `.env` is in `.gitignore`:
     ```plaintext
     .env
     ```

5. **Push code to Google Apps Script**:
   ```bash
   clasp push
   ```

## Usage

### Google Sheets Function

- Use in Google Sheets:
  ```plaintext
  =useChatAPI("your_prompt", A1)
 ```

### Running Tests

- Run tests locally:
  npm test
  ```
