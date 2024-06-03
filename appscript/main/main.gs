function useChatAPI(prompt, cellValue) {
  try {
    return ChatAPI(prompt, cellValue);
  } catch (error) {
    return "Error: " + error.message;
  }
}

if (typeof exports !== 'undefined') {
  exports.useChatAPI = useChatAPI;
}