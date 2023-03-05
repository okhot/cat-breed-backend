const { API_BASE_URL, QUERY, API_KEY } = require("../constants");

async function customFetch() {
  const response = await fetch(`${API_BASE_URL}${QUERY}=${API_KEY}`);
  console.log(`${API_BASE_URL}${QUERY}=${API_KEY}`);
  return response;
}

module.exports = customFetch;
