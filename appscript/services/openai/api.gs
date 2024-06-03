function ChatAPI(prompt, cellValue) {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    throw new Error('API key is missing. Please set the OPENAI_API_KEY in the script properties.');
  }

  if (!cellValue) {
    return "Error: Cell value is empty or invalid.";
  }

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt }
    ],
    max_tokens: 100
  };

  const options = {
    method: "post",
    contentType: "application/json",
    headers: { "Authorization": "Bearer " + apiKey },
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", options);
    const json = JSON.parse(response.getContentText());
    if (json.choices && json.choices.length > 0) {
      return json.choices[0].message.content.trim();
    } else {
      return "Error: No response from the API.";
    }
  } catch (error) {
    return "Error: " + error.message;
  }
}

// Export the function for Node.js environment
if (typeof exports !== 'undefined') {
  exports.ChatAPI = ChatAPI;
}