import axios from "axios";

const API_KEY = process.env.REACT_APP_MERRIAM_WEBSTER_API_KEY;

const getDefinitions = word => {
  if (!word || word.includes("?") || word.includes("/"))
    throw Error("invalid search");
  console.log("API_KEY", API_KEY);
  if (!API_KEY) throw Error("invalid API_KEY");

  const results = axios.get(
    `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${API_KEY}`
  );

  return results;
};

export { getDefinitions };