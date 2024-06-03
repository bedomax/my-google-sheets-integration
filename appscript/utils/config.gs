function getApiKey() {
  return PropertiesService.getScriptProperties().getProperty('OPENAI_API_KEY');
}

// Export the function for Node.js environment
if (typeof exports !== 'undefined') {
  exports.getApiKey = getApiKey;
}