import fetch from "node-fetch";

export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .then((data) => {
      return [data.origin, data.author, data.content];
    })
    .catch(console.error);
};
