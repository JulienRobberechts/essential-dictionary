import axios from "axios";

const API_KEY = process.env.REACT_APP_MERRIAM_WEBSTER_API_KEY;

const getDefinitions = async word => {
  if (!word || word.includes("?") || word.includes("/"))
    throw Error("invalid search");
  if (!API_KEY) throw Error("invalid API_KEY");

  const result = await axios.get(
    `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${API_KEY}`
  );

  return result.data;
};

export { getDefinitions };